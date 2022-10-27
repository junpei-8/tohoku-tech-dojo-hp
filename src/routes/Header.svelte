<script lang="ts">
	import { page } from '$app/stores';
	import LogoSrc from '$lib/images/tohoku-tech-dojo-logo.png';
</script>

<div class="logo-flame">
	<img class="logo" src={LogoSrc} alt="東北TECH道場" />
</div>

<header class="header">
	<nav>
		<ul class="list">
			<li class:active={$page.url.pathname === '/'}>
				<a class="anchor" href="/">トップ</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a class="anchor" href="/about">道場案内</a>
			</li>
			<li class:active={$page.url.pathname === '/schedule'}>
				<a class="anchor" href="/schedule">スケジュール</a>
			</li>
			<li class:active={$page.url.pathname === '/app-intro'}>
				<a class="anchor" href="/app-intro">アプリ紹介</a>
			</li>
			<li class:active={$page.url.pathname === '/news'}>
				<a class="anchor" href="/news">お知らせ</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@use '../theme/theme';

	.logo-flame {
		position: relative;
		z-index: 16;
		display: flex;
		justify-content: center;
		padding: 24px 16px 12px 16px;

		box-sizing: border-box;
		background-color: theme.$surface;
	}

	.logo {
		height: auto;
		max-width: 100%;
	}

	.header {
		position: sticky;
		top: 0;
		z-index: 8;
		box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
			0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
		background-color: theme.$surface;
	}

	.list {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		list-style: none;
		width: 100%;
		padding: 0;
		margin: 0;

		:global(.active) {
			color: theme.$primary;
		}
	}

	.anchor {
		display: block;
		color: inherit;
		padding: 8px 16px;
		box-sizing: border-box;
	}
</style>
