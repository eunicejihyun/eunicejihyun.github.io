<!-- Image.svelte -->
<script>
	export let css;
	export let fileName;
	export let alt;
	export let description = "";

	let imageSource = "/images/" + fileName;
</script>

<img class={css} src={imageSource} {alt} />
<p class="little description">{description}</p>


<style type="scss">
	.logo {
		max-height: 3rem;
	}

	.index {
		width: calc(100% - 20px);
		float: right;
	}

	.default {
		width: 100%;
		border-radius: 10px;
	}

	.medium {
		width: 75%;
		max-width: 30rem;
		display: block;
		margin: 0 auto;
	}

	.description {
		text-align: center;
	}

</style>
