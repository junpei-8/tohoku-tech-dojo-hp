<footer class="footer">
	<ul class="list">
		<li class="list-item">
			<a class="anchor" href="/history">沿革</a>
		</li>
		<li class="list-item">
			<a class="anchor" href="/faq">よくある質問</a>
		</li>
	</ul>
</footer>

<style lang="scss">
	.footer {
		margin-top: auto;
		padding: 32px 16px;
		box-sizing: border-box;
		background-color: #212121;
	}

	.list {
		display: flex;
		justify-content: space-evenly;
		padding: 0;
		margin: 0;
		list-style: none;
		font-size: 14px;
	}

	.list-item {
		display: block;
	}

	.anchor {
		display: block;
		color: white;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
