import sql from '$lib/databaseConnection';
import User from './User';

export default class UserRepo {
	user: User[] = [];
	initialized: boolean = false;

	async init() {
		if (this.initialized) {
			return;
		} else {
			this.initialized = true;
		}
	}
}
