<!-- Tags.svelte -->
<script>
	export let tags;
</script>

<div class="tag-list">
	{#each tags as tag}
		<span class="tag">#{tag}</span>
	{/each}
</div>

<style>
	.tag {
		color: #77b5fe;
		padding: 0 0 0 10px;
	}

	.tag-list {
		text-align: right;
		padding: 0;
	}
</style>
