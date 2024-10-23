import WorkoutRepo from '../../../../classes/WorkoutRepo';

export async function GET({ request, cookies }): Promise<Response> {
	let jawnajawjawnwa = WorkoutRepo.getAllWorkouts();
	console.log(jawnajawjawnwa);
	return new Response(JSON.stringify(jawnajawjawnwa), { status: 200 });
}
