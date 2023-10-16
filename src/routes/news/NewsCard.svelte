<script lang="ts">
	import Ripple from '@smui/ripple';
	import { selectedNews, type SelectedNews } from './selected-news';

	export let news: NonNullable<SelectedNews>;
</script>

<button
	class="card"
	href={`/news/${news.id}`}
	target="_brank"
	rel="noopener noreferrer"
	on:click={() => selectedNews.set(news)}
	use:Ripple={{ surface: true }}
>
	<h2 class="title">
		{news.title}
	</h2>
</button>

<style lang="scss">
	.card {
		display: flex;
		width: 100%;
		padding: 16px 24px;
		box-sizing: border-box;
		border: none;
		background: inherit;
	}

	.title {
		font-size: 20px;
		font-weight: 500;
	}
</style>
