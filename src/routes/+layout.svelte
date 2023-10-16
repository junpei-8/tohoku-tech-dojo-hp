<script lang="ts">
	import './styles.scss';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	const queryClient = new QueryClient();
</script>

<div class="app">
	<QueryClientProvider client={queryClient}>
		<Header />

		<main class="main">
			<slot />
		</main>

		<Footer />
	</QueryClientProvider>
</div>
