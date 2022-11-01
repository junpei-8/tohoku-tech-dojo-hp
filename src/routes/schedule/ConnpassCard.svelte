<script lang="ts">
	import CircularProgress from '@smui/circular-progress';
	import Ripple from '@smui/ripple';
	import type { ConnpassEventsAPIResponseEvent } from '@/api/connpass';
	import {
		refetchScrapingConnpassEventThumbnailURLQuery,
		useScrapingConnpassEventThumbnailURLQuery,
	} from '@/api/connpass';

	export let event: ConnpassEventsAPIResponseEvent;

	export let eventUrl: string;

	const thumbnailUrlResult =
		useScrapingConnpassEventThumbnailURLQuery(eventUrl);

	$: refetchScrapingConnpassEventThumbnailURLQuery(
		thumbnailUrlResult,
		eventUrl,
	);

	let onLoadedThumbnail = false;
</script>

<a
	class="card"
	href={eventUrl}
	target="_brank"
	rel="noopener noreferrer"
	use:Ripple={{ surface: true }}
>
	<div class="thumbnail-flame">
		{#if $thumbnailUrlResult.data}
			<img
				class="thumbnail"
				src={$thumbnailUrlResult.data}
				alt="イベントのサムネイル"
				on:load={() => (onLoadedThumbnail = true)}
			/>
		{/if}

		{#if $thumbnailUrlResult.isLoading || !onLoadedThumbnail}
			<CircularProgress style="width:40px;height:40px" indeterminate />
		{/if}
	</div>

	<div class="content">
		<h2 class="title">
			{event.title}
		</h2>
		{#if event.catch}
			<h3 class="subtitle mdc-hint">{event.catch}</h3>
		{/if}
	</div>
</a>

<style lang="scss">
	.card {
		display: flex;

		&:hover .title {
			text-decoration: underline;
		}
	}

	.thumbnail-flame {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30%;
		min-width: 240px;
		height: 100%;
		min-height: 144px; // カードの高さの最小値になる
	}

	.thumbnail {
		position: absolute;
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: 50% top;
	}

	.content {
		width: 70%;
		padding: 12px 16px;
		box-sizing: border-box;
	}

	.title {
		font-size: 20px;
		font-weight: 500;
	}

	.subtitle {
		font-size: 14px;
	}
</style>
