import sql from '$lib/DatabaseConnection';
import MuscleGroup from './MuscleGroup';
export default class MuscleGroupRepo {
	muscleGroups: MuscleGroup[] = [];
	initialized: boolean = false;

	async init() {
		if (this.initialized) {
			return;
		} else {
			await this.populateMuscleGroups();
			this.initialized = true;
		}
	}

	async populateMuscleGroups() {
		type muscleGroupFromDatabase = {
			muscle_group_id: number;
			name: string;
			exerciseIds: number[];
		};
		const muscleGroupsFromDatabase = await sql<
			muscleGroupFromDatabase[]
		>`SELECT * FROM muscle_groups`;
		this.muscleGroups = muscleGroupsFromDatabase.map(
			(muscleGroup) =>
				new MuscleGroup(muscleGroup.muscle_group_id, muscleGroup.name, muscleGroup.exerciseIds)
		);
	}
	getAllMuscleGroups() {
		return [
			new MuscleGroup(1, 'Chest', [1]), // Exercise ID 1 corresponds to Bench Press
			new MuscleGroup(2, 'Legs', [2, 3]), // Exercise IDs 2 and 3 correspond to Squat and Deadlift
			new MuscleGroup(3, 'Shoulders', [4]), // Exercise ID 4 corresponds to Shoulder Press
			new MuscleGroup(4, 'Back', [5]), // Exercise ID 5 corresponds to Pull-up
			new MuscleGroup(5, 'Arms', [6]), // Exercise ID 6 corresponds to Bicep Curl
		  ]
	}
	getMuscleGroupById(muscleGroupId: number) {
		return this.muscleGroups.find((muscleGroup) => muscleGroup.muscleGroupId === muscleGroupId);
	}
	getMuscleGroupByName(name: string) {
		return this.muscleGroups.find((muscleGroup) => muscleGroup.name === name);
	}
	getMuscleGroups() {
		return this.muscleGroups;
	}
	async addMuscleGroup(name: string, exerciseIds: number[]) {
		await sql`INSERT INTO muscle_groups (name, exerciseIds) VALUES (${name}, ${exerciseIds})`;
		await this.populateMuscleGroups();
	}
	async updateMuscleGroup(
		muscleGroupId: number,
		updates: { name?: string; exerciseIds?: number[] }
	) {
		if (!updates.name && !updates.exerciseIds) {
			return;
		}
		await sql`UPDATE muscle_groups SET ${sql(updates)} WHERE muscle_group_id=${muscleGroupId}`;
		await this.populateMuscleGroups();
	}
	async deleteMuscleGroup(muscleGroupId: number) {
		await sql`DELETE FROM muscle_groups WHERE muscle_group_id=${muscleGroupId}`;
		await this.populateMuscleGroups();
	}
}
