export default class MuscleGroup {
	muscleGroupId: number;
	name: string;
	exerciseIds: number[];

	constructor(muscleGroupId: number, name: string, exerciseIds: number[] = []) {
		this.muscleGroupId = muscleGroupId;
		this.name = name;
		this.exerciseIds = exerciseIds; // Array of exercise IDs
	}
}
