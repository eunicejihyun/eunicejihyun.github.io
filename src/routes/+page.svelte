<!-- INDEX -->
<script>
	import Image from "$lib/components/Image.svelte";
</script>

<div class="index-block">
	<p class="title">Eunice Jihyun</p>
	<Image
		css="index"
		fileName="coolEunice.png"
		alt="A chubby 2-year-old Eunice sipping yogurt and leaning against a bar cart with flowers in hand."
	/>
	<br />
	<p class="role">Analyst, Web Developer</p>
</div>

<style type="scss">

	.title {
		writing-mode: tb-rl;
		transform: rotate(180deg);
		margin: 0;
		display: inline;
		vertical-align: top;
		width: 20px;
	}


	.index-block {
		width: 90vw;
		max-width: 40rem;
		margin: 2vh auto 0;
		height: 90vw;
		max-height: 40rem;
		vertical-align: middle;
	}

	.role {
		float: right;
	}
</style>
