<script>
	import Tags from '../../../lib/components/Tags.svelte';
	export let data;
	const { title, content, date, tags } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article>
	<h1>{title}</h1>
	<svelte:component this={content} />
	<time>{date}</time>
	<Tags {tags} />
</article>
