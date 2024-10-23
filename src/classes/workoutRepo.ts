import sql from '$lib/DatabaseConnection';
import Workout from './Workout';
export default class WorkoutRepo {
	workouts: Workout[] = [];
	initialized: boolean = false;

	async init() {
		if (this.initialized) {
			return;
		} else {
			await this.populateWorkouts();
			this.initialized = true;
		}
	}

	async populateWorkouts() {
		type workoutFromDatabase = {
			workout_id: number;
			name: string;
			exerciseList: number[];
		};
		const workoutsFromDatabase = await sql<workoutFromDatabase[]>`SELECT * FROM workouts`;
		this.workouts = workoutsFromDatabase.map(
			(workout) => new Workout(workout.workout_id, workout.name, workout.exerciseList)
		);
	}

	getWorkoutById(workoutId: number) {
		return this.workouts.find((workout) => workout.workoutId === workoutId);
	}
	getWorkoutByName(name: string) {
		return this.workouts.find((workout) => workout.name === name);
	}
	getWorkouts() {
		return this.workouts;
	}
	async addWorkout(name: string, exerciseList: number[]) {
		await sql`INSERT INTO workouts (name, exerciseList) VALUES (${name}, ${exerciseList})`;
		await this.populateWorkouts();
	}
	async updateWorkout(workoutId: number, updates: { name?: string; exerciseList?: number[] }) {
		if (!updates.name && !updates.exerciseList) {
			return;
		}
		await sql`UPDATE workouts SET ${sql(updates)} WHERE workout_id=${workoutId}`;
		await this.populateWorkouts();
	}
	async deleteWorkout(workoutId: number) {
		await sql`DELETE FROM workouts WHERE workout_id=${workoutId}`;
		await this.populateWorkouts();
	}
}
