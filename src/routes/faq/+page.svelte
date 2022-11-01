<script lang="ts">
	interface QA {
		question: string;
		answer: string;
	}

	const QA_LIST: QA[] = [
		{
			question: '近くに道場がないのですが、どうすればいいですか？',
			answer:
				'オンライン道場に参加することができます。キックオフや発表会などは、Zoom や Google meet などで参加や見学をすることができます。',
		},
		{
			question:
				'あまりプログラミングをしたことがないのですが大丈夫でしょうか？',
			answer:
				'やさしい講師や先に始めた先輩道場生が教えてくれるので、一緒に勉強していきましょう！',
		},
		{
			question: 'どのようなプログラミングをするのですか？',
			answer:
				'参加者が興味のある内容で構いません。講師は主にモバイルアプリやWebの開発経験者がある方が多いので、いろいろと質問してみてください。',
		},
		{
			question: '持ち物は何が必要ですか。',
			answer:
				'無線LANに接続可能なパソコンをお持ちください。もしお持ちでない場合は、期間中に道場から貸し出しできる可能性がありますので、事前にご相談ください。',
		},
		{
			question: '道場を主催することは可能ですか？',
			answer:
				'開催可能な場所があり講師の確保が可能であれば、道場主としての参加も可能です。講師は東北TECH道場として派遣することも検討できます。一度ご相談ください。',
		},
	];
</script>

<svelte:head>
	<title>よくある質問 | 東北TECH道場</title>
	<meta name="description" content="東北TECH道場" />
</svelte:head>

<section class="app-container">
	<h2 class="app-heading">よくある質問</h2>
	<table class="table">
		<tbody>
			{#each QA_LIST as qa}
				<tr>
					<td class="table-cell table-left-cell">Q： </td>
					<td class="table-cell">{qa.question}</td>
				</tr>
				<tr>
					<td class="table-cell table-answer-cell">A： </td>
					<td class="table-cell table-answer-cell">{qa.answer}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	.table {
		width: 100%;
		border-collapse: collapse;
		line-height: 1.6;
	}

	.table-left-cell {
		padding-right: 8px;
	}

	.table-answer-cell {
		padding-bottom: 24px;
		vertical-align: top;
	}
</style>
