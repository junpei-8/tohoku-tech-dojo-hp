<script lang="ts">
	import Button from '@smui/button';

	const passeYear = new Date().getFullYear() - 2011;
</script>

<svelte:head>
	<title>トップ | 東北TECH道場</title>
	<meta name="description" content="東北TECH道場" />
</svelte:head>

<section class="app-container">
	<h2 class="app-heading">
		東北<span class="heading-en">TECH</span>道場について
	</h2>
	<p class="text">
		東日本大震災から<span class="year">{passeYear}</span>年が経過しました。
		東北の復興・発展のために震災以降、多くの方々が共に協力し、
		日々復興に向かって前進しております。
		テクノロジーを使ってそれらの活動を支援できないか、
		またテクノロジーを使って頑張っている開発者の皆さんを支援できないかと考え、
		「東北 TECH 道場」はスタートしました。
		石巻、滝沢、仙台から始まり、現在までに<span class="year">12</span
		>の東北各地で道場を開催しています。
	</p>

	<div class="section">
		<span class="title">参加申し込みはこちらから</span>
		<Button
			tag="a"
			href="/schedule"
			variant="raised"
			style="background: #424242;color:white;padding:8px 40px"
			>スケジュールを確認する</Button
		>
	</div>
</section>

<style>
	.heading-en {
		letter-spacing: 2px;
	}

	.text {
		font-size: 20px;
		margin-bottom: 64px;
	}

	.year {
		letter-spacing: 1.4px;
	}

	.section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: 18px;
		margin-bottom: 24px;
		font-weight: 500;
	}
</style>
