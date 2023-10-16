<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import { selectedNews } from './selected-news';

	$: isOpen = !!$selectedNews;
</script>

<Dialog
	bind:open={isOpen}
	on:SMUIDialog:closed={() => selectedNews.set(null)}
	aria-labelledby="お知らせ"
	aria-describedby="お知らせ"
	class="markdown-body"
>
	{#if $selectedNews}
		<Title tag="h1">{$selectedNews.title}</Title>
		<Content>{@html $selectedNews.html}</Content>
		<Actions>
			<Button on:click={() => selectedNews.set(null)}>
				<Label>閉じる</Label>
			</Button>
		</Actions>
	{/if}
</Dialog>
