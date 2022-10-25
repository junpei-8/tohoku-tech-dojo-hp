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
				<a class="anchor" href="/schedule">アプリ紹介</a>
			</li>
			<li class:active={$page.url.pathname === '/schedule'}>
				<a class="anchor" href="/schedule">お知らせ</a>
			</li>
			<li class:active={$page.url.pathname === '/faq'}>
				<a class="anchor" href="/faq">FAQ</a>
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
		padding: 16px;
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
		box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f;
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
