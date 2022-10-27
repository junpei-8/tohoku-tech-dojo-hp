<script lang="ts">
	import {
		refetchConnpassEventQuery,
		useConnpassEventsQuery,
	} from '@/api/connpass';
	import ErrorView from '@/views/error-view.svelte';
	import LoadingView from '@/views/loading-view.svelte';
	import ConnpassCard from './ConnpassCard.svelte';

	const connpossEvents = useConnpassEventsQuery({
		keyword: '東北TECH道場',
		ym: '202110',
	});

	function changeLoading() {
		refetchConnpassEventQuery(connpossEvents, {
			keyword: '東北TECH道場',
			ym: ['202208', '202210'],
		});
	}
</script>

<svelte:head>
	<title>スケジュール | 東北TECH道場</title>
	<meta
		name="description"
		content="東北TECH道場のスケジュールを確認しましょう。"
	/>
</svelte:head>

{#if $connpossEvents.isLoading}
	<LoadingView />
{:else if $connpossEvents.isError}
	<ErrorView error={$connpossEvents.error} />
{:else if $connpossEvents.data}
	<section class="host">
		<ul class="list">
			{#each $connpossEvents.data.events as event (event.event_url)}
				<li class="list-item">
					<ConnpassCard {event} eventUrl={event.event_url} />
				</li>
			{/each}
		</ul>
	</section>
{/if}

<style lang="scss">
	.host {
		padding: 32px 0;
		box-sizing: border-box;
	}

	.list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.list-item {
		width: 100%;
		max-width: 800px;
		border-top: 1px solid #0000001f;
		&:first-child {
			border-top: 0;
		}
	}
</style>
