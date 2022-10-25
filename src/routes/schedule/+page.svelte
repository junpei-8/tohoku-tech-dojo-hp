<script lang="ts">
	import Button from '@smui/button';
	import {
		refetchConnpassEventQuery,
		useConnpassEventsQuery,
	} from '@/api/connpass';
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
	<meta name="description" content="Schedule this app" />
</svelte:head>

<section class="text-column">
	<h1>Schedules this app</h1>

	{#if $connpossEvents.isLoading}
		<span>Loading...</span>
	{:else if $connpossEvents.isError}
		<span>Error: {$connpossEvents.error.message}</span>
	{:else if $connpossEvents.data}
		<ul class="list">
			{#each $connpossEvents.data.events as event (event.event_url)}
				<li>
					<ConnpassCard {event} eventUrl={event.event_url} />
				</li>
			{/each}
		</ul>
	{/if}

	<Button on:click={changeLoading}>Button</Button>
</section>

<style>
	.list {
		list-style: none;
		padding: 0;
	}
</style>
