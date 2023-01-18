<!-- +layout.svelte -->
<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Header />
<div class="main">
	<main>
		<slot />
	</main>
</div>
<Footer />
