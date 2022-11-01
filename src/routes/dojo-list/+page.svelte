<script lang="ts">
	import DojoCard from './DojoCard.svelte';
	import type { DojoData } from './dojo-data';

	const THUMBNAIL_BASE_URL =
		'https://storage.googleapis.com/tohoku-tech-dojo-hp.appspot.com/dojo-thumbnails';

	const DOJO_DATASET: DojoData[] = [
		{
			name: '石巻道場',
			prefecture: '宮城県',
			url: 'http://itnav.jp/blog/',
			thumbnailUrl: `${THUMBNAIL_BASE_URL}/ishinomaki-dojo.jpg`,
		},
		{
			name: '仙台道場',
			prefecture: '宮城県',
			url: 'https://tohtechdojosendai.blogspot.com/',
			thumbnailUrl: `${THUMBNAIL_BASE_URL}/sendai-dojo.jpg`,
		},
		{
			name: '盛岡道場',
			prefecture: '岩手県',
			url: 'http://moriokadojo.blogspot.com/',
			thumbnailUrl: `${THUMBNAIL_BASE_URL}/morioka-dojo.jpg`,
		},
		{
			name: '北上道場',
			prefecture: '岩手県',
			url: 'http://kitakamidojo.blogspot.com/',
			thumbnailUrl: `${THUMBNAIL_BASE_URL}/kitakami-dojo.jpg`,
		},
		{
			name: '郡山道場',
			prefecture: '福島県',
			url: 'http://koriyama.tohokutechdojo.org/',
			thumbnailUrl: `${THUMBNAIL_BASE_URL}/kouriyama-dojo.jpg`,
		},
		{
			name: '南相馬道場',
			prefecture: '福島県',
			url: 'https://minamisoma.tohokutechdojo.org/',
			thumbnailUrl: `${THUMBNAIL_BASE_URL}/minamisoma-dojo.jpg`,
		},
		{
			name: '八戸道場',
			prefecture: '青森県',
			url: 'https://8nohe-tohokutechdojo.blogspot.com/',
			thumbnailUrl: `${THUMBNAIL_BASE_URL}/hachinohe-dojo.jpg`,
		},
		{
			name: '青森道場',
			prefecture: '青森県',
			thumbnailUrl: `${THUMBNAIL_BASE_URL}/aomori-dojo.jpg`,
		},
		{
			name: '秋田道場',
			prefecture: '秋田県',
			url: 'https://akitadojo.blogspot.com/',
			thumbnailUrl: `${THUMBNAIL_BASE_URL}/akita-dojo.jpg`,
		},
	];
</script>

<svelte:head>
	<title>道場案内 | 東北TECH道場</title>
	<meta name="description" content="東北TECH道場" />
</svelte:head>

<section class="app-container">
	<h1 class="app-heading">道場案内</h1>

	<ul class="list">
		{#each DOJO_DATASET as data}
			<li class="list-item">
				<DojoCard {data} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
