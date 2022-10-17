<script lant="ts">
	import {
		refetchScrapingConnpassEventThumbnailURLQuery,
		useScrapingConnpassEventThumbnailURLQuery,
	} from '@/api/connpass';

	export let title = '';
	export let eventUrl = '';

	const thumbnailUrlResult =
		useScrapingConnpassEventThumbnailURLQuery(eventUrl);

	$: refetchScrapingConnpassEventThumbnailURLQuery(
		thumbnailUrlResult,
		eventUrl,
	);

	let onloadedThumbnail = false;
</script>

<li>
	<a href={eventUrl} target="_brank" rel="noopener noreferrer">
		<div>{title}</div>
		{#if $thumbnailUrlResult.data}
			<img
				src={$thumbnailUrlResult.data}
				alt="イベントのサムネイル"
				style={onloadedThumbnail ? '' : 'display: none'}
				on:load={() => (onloadedThumbnail = true)}
			/>
		{/if}

		{#if $thumbnailUrlResult.isLoading || !onloadedThumbnail}
			<span>Loading...</span>
		{/if}
	</a>
</li>
