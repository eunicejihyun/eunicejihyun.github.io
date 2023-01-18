<!-- /archive -->
<script>
	import Image from '$lib/components/Image.svelte';
	import { TabContent, TabPane, Col, Row } from 'sveltestrap';
	export let data;
	const allTags = data.posts
		.map((post) => post.tags)
		.reduce((prev, current) => [...prev, ...current]);
	const uniqueTags = [...new Set(allTags)].sort();
</script>

<svelte:head>
	<title>Ramblings</title>
</svelte:head>

<article>
	<Image size="size-1" fileName="archive.jpg" alt="Yonggi at Golden Hour" />

	<p>
		Here you’ll find a collection of run-on sentences with the occasional grammatical error. Unlike
		plogging, which has positive externalities, this blog is unlikely to affect your life.
	</p>
	<center class="little">My favorite posts are denoted with an asterisk.</center>

	<div class="postHouse">
		<TabContent pills>
			{#each uniqueTags as tag, index}
				{#if index === 3}
					<TabPane tabId={tag} tab="#{tag}" active>
						<Row>
							{#each data.posts as post}
								{#if post.tags.includes(tag)}
									<Col xs="6" md="4">
										<center>
											<a href={post.path}>
												{post.title}

												{#if post.highlight}
													*
												{/if}
											</a>
											<br />
											<time>{post.date}</time>
										</center>
									</Col>
								{/if}
							{/each}
						</Row>
					</TabPane>
				{:else}
					<TabPane tabId={tag} tab="#{tag}">
						<Row>
							{#each data.posts as post}
								{#if post.tags.includes(tag)}
									<Col xs="6" md="4">
										<center>
											<a href={post.path}>
												{post.title}
												{#if post.highlight}*{/if}
											</a>
											<br />
											<time>{post.date}</time>
										</center>
									</Col>
								{/if}
							{/each}
						</Row>
					</TabPane>
				{/if}
			{/each}
		</TabContent>
	</div>
</article>

<style>
	a {
		padding-bottom: 0;
	}

	time {
		font-size: 0.6rem;
	}

	.postHouse {
		min-height: 25rem;
	}
</style>
