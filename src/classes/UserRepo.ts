import sql from '$lib/databaseConnection';
import User from './User';

export default class UserRepo {
	initialized: boolean = false;

	async init() {
		if (this.initialized) {
			return;
		} else {
			this.initialized = true;
		}
	}
    getUserById(userId: string) {
		return
	}
	getUserByName(name: string) {
		return 
	}

	getAllUsers()
	{
		return [new User(
			"U001",               // userId
			"John Doe",           // name
			new Date("2023-01-15"), // joinDate
			180,                  // weight (in lbs)
			28,                   // age
			"Male",               // gender
			5,                    // height in feet
			11,                   // height in inches
			170                   // goalWeight (in lbs)
		  ),new User(
			"U002",               // userId
			"Jane Smith",         // name
			new Date("2023-05-23"), // joinDate
			145,                  // weight (in lbs)
			34,                   // age
			"Female",             // gender
			5,                    // height in feet
			7,                    // height in inches
			135                   // goalWeight (in lbs)
		  ),new User(
			"U003",               // userId
			"Alex Johnson",       // name
			new Date("2024-02-10"), // joinDate
			220,                  // weight (in lbs)
			42,                   // age
			"Male",               // gender
			6,                    // height in feet
			2,                    // height in inches
			200                   // goalWeight (in lbs)
		  ),new User(
			"U004", 
			"Emily Davis", 
			new Date("2023-11-07"), 
			130, 
			25, 
			"Female", 
			5, 
			4, 
			120
		  ),new User(
			"U005", 
			"Michael Brown", 
			new Date("2022-06-18"), 
			195, 
			30, 
			"Male", 
			6, 
			0, 
			180
		  ),new User(
			"U006", 
			"Sophia Wilson", 
			new Date("2023-02-14"), 
			155, 
			27, 
			"Female", 
			5, 
			8, 
			140
		  ),new User(
			"U007", 
			"James Taylor", 
			new Date("2021-09-12"), 
			175, 
			33, 
			"Male", 
			5, 
			10, 
			160
		  ),new User(
			"U008", 
			"Olivia Martinez", 
			new Date("2023-03-27"), 
			165, 
			29, 
			"Female", 
			5, 
			6, 
			150
		  )]
	}
}
