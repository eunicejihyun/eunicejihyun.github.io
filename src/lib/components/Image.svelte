<!-- Image.svelte -->
<script>
	export let size;
	export let fileName;
	export let alt;

	let imageSource = '/images/' + fileName;
</script>

<figure class={size}>
	<img src={imageSource} {alt} />
</figure>

<style>
	/*FIGURES*/
	.size-1 {
		grid-column: 4 / 5;
	}

	.size-2 {
		grid-column: 3 / 6;
	}

	.size-3 {
		grid-column: 2 / 7;
	}

	.size-4 {
		grid-column: 1 / 8;
	}

	.size-1 img,
	.size-2 img,
	.size-3 img,
	.size-4 img {
		width: 100%;
		border-radius: 30px;
	}

    /* HOME IMAGE */

    

	.tall {
		display: none;
	}

	.wide {
		max-width: 100%;
		max-height: 85vh;
		margin: auto;
	}

	@media only screen and (orientation: portrait) {
		.wide {
			display: none;
		}

		.tall {
			max-width: 100%;
			max-height: 85vh;
			margin: auto;
			display: block;
		}
	}
</style>
