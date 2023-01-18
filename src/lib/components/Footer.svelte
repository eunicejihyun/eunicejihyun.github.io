<!-- Footer.svelte -->
<script>
	const today = new Date();
	let copyright_year = today.getFullYear();

</script>

<div class="footer">
	Eunice Kim © {copyright_year}
</div>

<style>
	.footer {
		text-align: center;
		font-size: 0.7rem;
		padding-bottom: 1rem;
	}

</style>
