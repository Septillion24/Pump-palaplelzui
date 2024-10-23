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
	getAllWorkouts()
	{
		return [new Workout(
			101,                // workoutId
			"Full Body Workout", // name
			[201, 202, 203, 204] // exerciseList (array of exercise IDs)
		  ), new Workout(
			102,                
			"Leg Day Routine",   
			[301, 302, 303]      
		  ),new Workout(
			103,                
			"Upper Body Strength", 
			[401, 402, 403, 404, 405]
		  ),new Workout(
			104,                
			"Cardio Circuit",    
			[501, 502, 503]     
		  ), new Workout(
			105,                
			"Core Focus",        
			[601, 602, 603]     
		  ), new Workout(
			106,                
			"HIIT Workout",      
			[701, 702, 703, 704]
		  ),new Workout(
			107,                
			"Back and Biceps",   
			[801, 802, 803, 804]
		  ),new Workout(
			108,                
			"Chest and Triceps", 
			[901, 902, 903]     
		  )]
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
