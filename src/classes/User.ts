export default class User {
	userId: string;
	name: string;
	joinDate: Date;
	weight: number;
	age: number;
	gender: string;
	heightfeet: number;
	heightinch: number;
	goalWeight: number;


	constructor(userId: string, name: string, joinDate: Date, weight: number, age: number,gender: string,heightfeet: number,heightinch: number, goalWeight: number) {
		this.userId = userId;
		this.name = name;
		this.joinDate = joinDate; 
		this.weight=weight;
		this.age=age;
		this.gender=gender;
		this.heightfeet=heightfeet;
		this.heightinch=heightinch;
		this.goalWeight=goalWeight;
		// Array of exercise IDs
	}
}
