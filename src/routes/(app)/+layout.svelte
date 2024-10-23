<div class="wrapper"><main><slot /></main></div>

<style lang="scss">
	.wrapper {
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #616161;
		main {
			flex: 1;
			display: flex;
			flex-direction: column;
		}
	}
</style>
