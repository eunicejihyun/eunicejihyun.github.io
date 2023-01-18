<!-- Header.svelte -->

<header>
	<nav>
		<a class="logo" href="/"><img src="../images/logo.png" height="30rem" alt="logo" /></a>
		<a class="navItem" href="/ramblings">ramblings</a>
	</nav>
</header>

<style>
	nav {
		padding-bottom: 0.5rem;
	}

	a {
		text-decoration: none;
	}

	.logo {
		display: inline-block;
		padding: 0.6rem 0.9rem 0;
		vertical-align: top;
	}

	.logo:hover {
		background: none;
	}

	nav {
		background: white;
		position: fixed;
		text-align: center;
		top: 0;
		left: 0;
		width: 100%;
	}

	.navItem {
		color: #303030;
		display: inline-block;
		font-weight: bold;
		padding: 0.75rem 0.9rem 0;
	}

	.navItem:hover,
	.navItem:active,
	.navItem:focus {
		background: none;
		color: #7a002e;
	}
</style>
