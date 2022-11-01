<script lang="ts">
	import Ripple from '@smui/ripple';
	import type { DojoData } from './dojo-data';

	export let data: DojoData;

	const defaultThumbnailUrl =
		'https://storage.googleapis.com/tohoku-tech-dojo-hp.appspot.com/dojo-thumbnails/dormant.png';
</script>

<svelte:head>
	<title>道場案内 | 東北TECH道場</title>
	<meta name="description" content="東北TECH道場" />
</svelte:head>

<a
	class={data.url ? 'card' : 'card mdc-hint'}
	href={data.url}
	target="_blank"
	rel="noreferrer noopener"
	use:Ripple={{ surface: true }}
>
	<div class="thumbnail-flame">
		<img
			class="thumbnail"
			src={data.thumbnailUrl || defaultThumbnailUrl}
			alt={`${data.name}の写真`}
		/>
	</div>

	<h3 class="title">{data.prefecture} / {data.name}</h3>
</a>

<style>
	.card {
		display: block;
		width: 320px;
		margin: 0 24px 24px;
		background: white;
		box-shadow: 0 2px 1px -1px #0003, 0 1px 1px #00000024, 0 1px 3px #0000001f;
	}

	.thumbnail-flame {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 144px;
	}

	.thumbnail {
		position: absolute;
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: 50% top;
	}

	.title {
		text-align: center;
		padding: 24px;
		box-sizing: border-box;
		font-weight: 500;
	}
</style>
