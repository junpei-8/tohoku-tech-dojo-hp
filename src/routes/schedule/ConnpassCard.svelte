<script lant="ts">
	import Card, { Content, PrimaryAction } from '@smui/card';
	import CircularProgress from '@smui/circular-progress';
	import {
		refetchScrapingConnpassEventThumbnailURLQuery,
		useScrapingConnpassEventThumbnailURLQuery,
	} from '@/api/connpass';

	/** @type import('@/api/connpass').ConnpassEventsAPIResponseEvent */
	export let event;

	$: eventUrl = event.event_url;

	const thumbnailUrlResult = useScrapingConnpassEventThumbnailURLQuery(
		event.event_url,
	);

	$: refetchScrapingConnpassEventThumbnailURLQuery(
		thumbnailUrlResult,
		event.event_url,
	);

	console.log(event);

	let onloadedThumbnail = false;
</script>

<a href={eventUrl} target="_brank" rel="noopener noreferrer" class="anchor">
	<Card variant="outlined" style="border-radius:0">
		<PrimaryAction style="flex-direction:row">
			<div class="thumbnail-flame">
				{#if $thumbnailUrlResult.data}
					<img
						src={$thumbnailUrlResult.data}
						alt="イベントのサムネイル"
						class="thumbnail"
						style={onloadedThumbnail ? '' : 'display: none'}
						on:load={() => (onloadedThumbnail = true)}
					/>
				{/if}

				{#if $thumbnailUrlResult.isLoading || !onloadedThumbnail}
					<CircularProgress style="height: 32px; width: 32px;" indeterminate />
				{/if}
			</div>

			<div class="content">
				<h2 class="title">
					{event.title}
				</h2>
				{#if event.catch}
					<h3 class="subtitle mdc-hint">{event.catch}</h3>
				{/if}
				<Content class="mdc-typography--body2">
					And some info text. And the media and info text are a primary action
					for the card.
				</Content>
			</div>
		</PrimaryAction>
	</Card>
</a>

<style lang="scss">
	.anchor {
		max-width: 640px;
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
		min-width: 200px;
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
		padding: 16px;
		box-sizing: border-box;
	}

	.title {
	}

	.subtitle {
		font-size: 14px;
	}
</style>
