<!-- NewTabLink.svelte -->
<script>
	export let link;
	export let text;

</script>

<a href={link} target="_blank" rel="noopener noreferrer">{text}</a>