<script lang="ts">
	import {
		// refetchConnpassEventQuery,
		useConnpassEventsQuery,
	} from '@/api/connpass';
	import ErrorView from '@/views/error-view.svelte';
	import LoadingView from '@/views/loading-view.svelte';
	import ConnpassCard from './ConnpassCard.svelte';

	const connpossEvents = useConnpassEventsQuery({
		keyword: '東北TECH道場',
		ym: '202110',
	});

	// function changeLoading() {
	// 	refetchConnpassEventQuery(connpossEvents, {
	// 		keyword: '東北TECH道場',
	// 		ym: ['202208', '202210'],
	// 	});
	// }
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
	<section class="app-container">
		<h2 class="app-heading">スケジュール</h2>
		<ul class="app-list">
			{#each $connpossEvents.data.events as event}
				<li class="app-list-item">
					<ConnpassCard {event} id={event.event_id} />
				</li>
			{/each}
		</ul>
	</section>
{/if}
