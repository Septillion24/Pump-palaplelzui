<script lang="ts">
	import { onMount } from 'svelte';
	import type Workout from '../../classes/Workout';

	onMount(async () => {
		console.log('beaning');
		let workouts: Workout[] = await fetch('/api/get/workouts', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}).then((res) => 
			res.json()
		);
		console.log(workouts);
	});

	let workouts = [
		{ title: 'pull', numberOfExercises: '0', content: 'Details for Workout 1' },
		{ title: 'Workout 2', numberOfExercises: '0', content: 'Details for Workout 2' },
		{ title: 'Workout 3', numberOfExercises: '0', content: 'Details for Workout 3' }
	];
	/**
	 * @type {number | null}
	 */
	let openWorkoutIndex = null;

	/**
	 * @param {number | null} index
	 */
	function toggleWorkout(index) {
		openWorkoutIndex = openWorkoutIndex === index ? null : index;
	}
</script>

<header><img src="banner.png" alt="banner" /></header>
<div class="container">
	<div class="workouts">
		<div class="header">WORKOUTS</div>
		{#each workouts as workout, index}
			<div class="workout">
				<!-- <button on:click={() => toggleWorkout(index)}
					>{#if openWorkoutIndex === index}
						<img src="arrow_down.png" alt="" />
						{workout.title}
						{workout.content}
					{:else}
						<img src="arrow_right.png" alt="" />
						{workout.title}
					{/if}</button
				> -->
				<div class="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#FFFFFF"><path d="M480-360 280-560h400L480-360Z" /></svg
					>
				</div>
				<div class="excercise-name">{workout.title}</div>
				<div class="excercise-number">
					<p>{workout.numberOfExercises}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="muscle-groups">
		<h4>MUSCLE GROUPS</h4>
		<p>Back</p>
		<p>Shoulders</p>
		<p>Chest</p>
		<p>Quads</p>
		<p>Triceps</p>
		<p>Core</p>
		<p>...</p>
	</div>

	<div class="meal-plan">
		<h4>MEAL PLAN</h4>
		<p>Lunch 1: Beef Tacos</p>
		<p>Lunch 2: ...</p>
		<p>Dinner 1: ...</p>
	</div>

	<div class="workout-schedule">
		<h4>WORKOUT SCHEDULE</h4>
		<div class="schedule-day">Sun 08</div>
		<div class="schedule-day">Mon 09</div>
		<div class="schedule-day">...</div>
	</div>
</div>

<style lang="scss">
	.container {
		background-color: #616161;
		color: white;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		width: max-content;
		margin: 0 auto;
		padding: 20px;
		min-height: 100%;
		row-gap: 10px;
		.workouts {
			margin: 8px;
			box-sizing: border-box;
			width: calc(50% - 16px);
			background-color: #444;
			border-radius: 10px;

			.header {
				padding: 10px;
				padding-left: 15px;
				padding-bottom: 5px;
				width: 100%;
				border-bottom: 1px solid #616161;
			}
			.workout {
				padding: 5px;
				width: 100%;
				border-bottom: 1px solid #616161;
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				align-items: center;
				.icon {
					padding: 5px;
				}
				.excercise-name {
					font-size: 10pt;
					padding: 5px;
				}
				.excercise-number {
					padding: 5px;
					color: #616161;
				}
			}
		}
		.muscle-groups {
			margin: 8px;
			box-sizing: border-box;
			width: calc(50% - 16px);
			background-color: #444;
			border-radius: 10px;
			padding: 15px;
		}
		.meal-plan {
			margin: 10px;
			box-sizing: border-box;
			display: none;
			border-radius: 10px;
			padding: 15px;
		}
		.workout-schedule {
			margin: 10px;
			box-sizing: border-box;
			width: 100%;
			background-color: #444;
			padding: 20px;
			border-radius: 10px;
			.schedule-day {
				margin-bottom: 10px;
				background-color: #666;
				padding: 10px;
				border-radius: 5px;
				text-align: center;
			}
		}
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: sans-serif;
	}
	:global(body) {
		margin: 0;
		padding: 0;
	}

	body {
		margin: 0;
		padding: 0;
		background-color: #2f2f2f;
		color: #fff;
	}

	header {
		text-align: center;
		background-color: black;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	header img {
		width: 500px;
	}
</style>
