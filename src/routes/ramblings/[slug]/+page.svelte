<script>
	import Tags from "$lib/components/Tags.svelte";
	export let data;
	const { title, content, date, tags } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article>
	<h1>{title}</h1>
	<svelte:component this={content} />
	<div class="details">
		<time>{date}</time>
		<br />
		<Tags {tags} />
	</div>
</article>

<style>
	.details * {
		float: right;
	}

	.details {
		font-size: 0.85rem;
	}
</style>
