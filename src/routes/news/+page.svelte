<script>
	import ErrorView from '@/views/error-view.svelte';
	import LoadingView from '@/views/loading-view.svelte';
	import NewsCard from './NewsCard.svelte';
	import NewsDialog from './NewsDialog.svelte';
	import { getNewsList } from './news';

	$: newsList = getNewsList({});
</script>

<svelte:head>
	<title>お知らせ | 東北TECH道場</title>
	<meta name="description" content="東北TECH道場" />
</svelte:head>

{#if $newsList.loading}
	<LoadingView />
{:else if $newsList.error}
	<ErrorView error={$newsList.error} />
{:else}
	<section class="app-container">
		<h2 class="app-heading">お知らせ</h2>
		<ul class="app-list">
			{#each $newsList.data.news_list as news}
				<li class="app-list-item">
					<NewsCard {news} />
				</li>
			{/each}
		</ul>
	</section>

	<NewsDialog />
{/if}

<style>
	@import 'github-markdown-css';
	:global(.markdown-body) {
		background-color: inherit;
	}
</style>
