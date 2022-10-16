<script lang="ts">
	import Button from '@smui/button';
	import {
		refetchConnpassEventQuery,
		useConnpassEventsQuery,
	} from '@/api/connpass';

	const connpossEvent = useConnpassEventsQuery({
		keyword: '東北TECH道場',
		ym: '202110',
	});

	function changeLoading() {
		refetchConnpassEventQuery(connpossEvent, {
			keyword: '東北TECH道場',
			ym: ['202208', '202210'],
		});
	}
</script>

<svelte:head>
	<title>スケジュール | 東北TECH道場</title>
	<meta name="description" content="Schedule this app" />
</svelte:head>

<div class="text-column">
	<h1>Schedules this app</h1>

	{#if $connpossEvent.isLoading}
		<span>Loading...</span>
	{:else if $connpossEvent.isError}
		<span>Error: {$connpossEvent.error.message}</span>
	{:else if $connpossEvent.data}
		<ul>
			{#each $connpossEvent.data.events as event}
				<li>{event.title}</li>
			{/each}
		</ul>
	{/if}

	<Button on:click={changeLoading}>Button</Button>
</div>
