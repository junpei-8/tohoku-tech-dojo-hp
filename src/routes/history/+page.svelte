<script lang="ts">
	interface HistoryData {
		year: `${number}${number}${number}${number}`;
		month: `${number}${number}`;
		day?: `${number}${number}`;
		desc: string;
	}

	const HISTORIES_DATASET: HistoryData[][] = [
		// 0期
		[
			{
				year: '2012',
				month: '08',
				day: '08',
				desc: 'メンバー内で構想開始',
			},
		],
		// 1期
		[
			{
				year: '2012',
				month: '10',
				day: '20',
				desc: '"ICT ERA + ABC 2012 東北"にて道場開催宣言。同時に石巻道場がスタート',
			},
			{
				year: '2012',
				month: '11',
				day: '03',
				desc: '滝沢道場、仙台道場がスタート',
			},
			{
				year: '2012',
				month: '12',
				day: '16',
				desc: '第１期発表会',
			},
		],
		// 2期
		[
			{
				year: '2013',
				month: '01',
				desc: '第2期スタート\n石巻道場、滝沢道場の2会場で実施',
			},
			{
				year: '2013',
				month: '03',
				day: '31',
				desc: '第２期発表会',
			},
		],
		// 3期
		[
			{
				year: '2013',
				month: '04',
				desc: '第３期スタート\n石巻道場、滝沢道場、仙台道場、北上道場、石川道場の5会場で実施',
			},
			{
				year: '2013',
				month: '06',
				day: '29',
				desc: '第３期発表会',
			},
		],
		// 4期
		[
			{
				year: '2013',
				month: '07',
				desc: '第４期スタート\n石巻道場、滝沢道場、仙台道場、北上道場、釜石道場の5会場で実施',
			},
			{
				year: '2013',
				month: '07',
				day: '26',
				desc: '石巻ハッカソン開催(イトナブ石巻主催、道場メンバー多数参加)',
			},
			{
				year: '2013',
				month: '07',
				day: '26',
				desc: '	第１期 ~ 第３期のアプリ完成メンバーによるGoogle訪問ツアー',
			},
		],
		// 5期
		[
			{
				year: '2014',
				month: '01',
				day: '18',
				desc: '第５期スタート\n石巻道場、盛岡道場、北上道場、釜石道場の4会場で実施',
			},
			{
				year: '2013',
				month: '09',
				day: '28',
				desc: '第５期発表会',
			},
		],
		// 6期
		[
			{
				year: '2014',
				month: '05',
				day: '11',
				desc: '第６期スタート\n石巻道場、仙台道場、盛岡道場、北上道場、釜石道場、いわき道場、会津道場の7会場で実施',
			},
			{
				year: '2014',
				month: '07',
				day: '25',
				desc: '第３回 石巻ハッカソン開催（イトナブ石巻主催、道場メンバー多数参加）',
			},
			{
				year: '2014',
				month: '08',
				day: '23',
				desc: '第６期発表会',
			},
		],
	];
</script>

<svelte:head>
	<title>沿革 | 東北TECH道場</title>
	<meta name="description" content="東北TECH道場" />
</svelte:head>

<section class="app-container">
	<h2 class="app-heading">沿革</h2>

	<table class="table">
		{#each HISTORIES_DATASET as historyDataset, index}
			<thead class="table-head">
				<tr>
					<th colspan="2" class="table-cell">第{index}期</th>
				</tr>
			</thead>
			<tbody class="table-body">
				{#each historyDataset as history}
					<tr>
						<td class="table-cell"
							>{history.year}/{history.month}{history.day
								? `/${history.day}`
								: ''}</td
						>
						<td class="table-cell">{history.desc}</td>
					</tr>
				{/each}
			</tbody>
		{/each}
	</table>
</section>

<style>
	.table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}

	.table-head {
		background-color: #eee;
	}

	.table-body::after {
		content: '';
		display: block;
		height: 24px;
	}

	.table-cell {
		padding: 8px 16px;
		border: 1px solid #e0e0e0;
		box-sizing: border-box;
	}
</style>
