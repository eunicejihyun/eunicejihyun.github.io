<!-- /archive -->
<script>
	import Image from "$lib/components/Image.svelte";
	import { TabContent, TabPane, Col, Row } from "sveltestrap";
	export let data;
	const allTags = data.posts
		.map((post) => post.tags)
		.reduce((prev, current) => [...prev, ...current]);
	const uniqueTags = [...new Set(allTags)].sort();
</script>

<svelte:head>
	<title>Ramblings</title>
</svelte:head>

<Row>
	<Col md={{ size: 6, order: 2, offset: 0 }}>
		<div class="side-image">
			<Image
				css="default"
				fileName="yonggiTalking.gif"
				alt="Yonggi gossiping"
				description = "Yonggi spilling the latest tea."
			/>
		</div>
	</Col>
	<Col md={{ size: 6, order: 1, offset: 0 }}>
		<p class="description">
			Here you’ll find a collection of run-on sentences with the
			occasional grammatical error. Unlike plogging, which has positive
			externalities, these rambling blog posts are unlikely to affect your
			life.
		</p>
		<div class="ramblings">
			<TabContent pills>
				{#each uniqueTags as tag, index}
					{#if index === 2}
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
	</Col>
</Row>

<style>
	.description {
		margin: 4rem 0;
	}

	center {
		margin: 2rem 0 0;
	}
</style>
