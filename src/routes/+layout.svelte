<script>
	import Header from './Header.svelte';
	import './styles.css';

	export let data;
	const title = data.item.set.title ? data.item.set.title : "Error: Could not get set title";
</script>

<div class="app">
	<Header {title} />

	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
