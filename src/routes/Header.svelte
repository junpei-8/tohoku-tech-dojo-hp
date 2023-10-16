<script lang="ts">
	import Ripple from '@smui/ripple';
	import { page } from '$app/stores';
	import LogoSrc from '$lib/images/tohoku-tech-dojo-logo.png';
</script>

<div class="logo-flame">
	<img class="logo" src={LogoSrc} alt="東北TECH道場" />
</div>

<header class="header">
	<nav>
		<ul class="list mdc-hint">
			<li class:active={$page.url.pathname === '/'}>
				<a class="anchor" href="/" use:Ripple={{ surface: true }}>トップ</a>
			</li>
			<li class:active={$page.url.pathname === '/dojo-list'}>
				<a class="anchor" href="/dojo-list" use:Ripple={{ surface: true }}
					>道場案内</a
				>
			</li>
			<li class:active={$page.url.pathname === '/schedule'}>
				<a class="anchor" href="/schedule" use:Ripple={{ surface: true }}
					>スケジュール</a
				>
			</li>
			<li class:active={$page.url.pathname === '/app-intro'}>
				<a class="anchor" href="/app-intro" use:Ripple={{ surface: true }}
					>アプリ紹介</a
				>
			</li>
			<li class:active={$page.url.pathname === '/news'}>
				<a class="anchor" href="/news" use:Ripple={{ surface: true }}
					>お知らせ</a
				>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@use '../theme/theme';

	.logo-flame {
		position: relative;
		z-index: 7;
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
		z-index: 6;
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
			font-weight: 500;
			color: theme.$primary;
		}
	}

	.anchor {
		display: block;
		padding: 12px 20px;
		box-sizing: border-box;
		font-size: 14px;
		color: inherit;
	}
</style>
