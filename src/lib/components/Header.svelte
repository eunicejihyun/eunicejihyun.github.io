<!-- Header.svelte -->
<script>
	import Image from "$lib/components/Image.svelte";
	import NewTabLink from "$lib/components/NewTabLink.svelte";
	import { onMount } from 'svelte';

	function closeNavbar() {
		document.getElementById("check").checked = false;
	}

	onMount(() => {
		setTimeout(function () {
			document.body.className = "";
		}, 500);
	});
</script>

<header>
	<input id="check" class="menu-icon menu-icon__checkbox" type="checkbox" />
	<div class="menu-icon hamburger">
		<span />
		<span />
	</div>

	<a class="logo" href="/" on:click={closeNavbar}>
		<Image css="logo" fileName="E.png" alt="logo" />
	</a>

	<div id="navbox">
		<div class="links navigation">
			<a href="/about" on:click={closeNavbar}>About</a>
			<a href="/ramblings" on:click={closeNavbar}>Writings</a>
			<a href="/portfolio" class="hidden" on:click={closeNavbar}>Portfolio</a>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="links socials" on:click={closeNavbar}>
			<a href="mailto:eunicejihyun@gmail.com">Email</a>
			<NewTabLink
				link="https://linkedin.com/in/eunicejihyun"
				text="LinkedIn"
			/>
			<NewTabLink link="https://github.com/eunicejihyun" text="Github" />
		</div>
	</div>
</header>