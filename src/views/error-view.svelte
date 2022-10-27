<script lang="ts">
	import { getRandomNegativeEmoticon } from '@/utils/emoticon';

	export let error: Error;
</script>

<div class="view">
	<h2 class="emoticon">
		{getRandomNegativeEmoticon()}
	</h2>

	<h3 class="heading">データを取得できませんでした</h3>

	<h4 class="message mdc-hint">
		{error.message}
	</h4>
</div>

<style>
	.emoticon {
		font-size: 64px;
		font-weight: bold;
		margin-bottom: 40px;
	}

	.heading {
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 16px;
	}

	.message {
		font-size: 16px;
		font-weight: 500;
	}
</style>
