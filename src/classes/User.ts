export default class User {
	userId: string;
	name: string;
	joinDate: Date;

	constructor(userId: string, name: string, joinDate: Date) {
		this.userId = userId;
		this.name = name;
		this.joinDate = joinDate; // Array of exercise IDs
	}
}
