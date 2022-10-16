<script lang="ts">
	import './styles.scss';
	import Button from '@smui/button';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import Header from './Header.svelte';

	// Create a client
	const queryClient = new QueryClient();
</script>

<div class="app">
	<QueryClientProvider client={queryClient}>
		<Header />

		<main>
			<slot />
			<Button />
		</main>

		<footer>
			<p>
				visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
			</p>
		</footer>
	</QueryClientProvider>
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
		max-width: 64rem;
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
