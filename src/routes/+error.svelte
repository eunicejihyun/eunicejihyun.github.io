<script>
	import Image from "$lib/components/Image.svelte";
</script>

<h1>404... It appears we're lost!</h1>
<div class="spacer" />
<Image
	css="default"
	fileName="404.gif"
	alt="Yonggi looking lost at the beach."
/>

<style type="scss">

	h1 {
		position: absolute;
		top: 50px;
		background-color: white;
		padding: 1rem 2rem;
		border-radius: 15px;
		
		animation-name: wavy;
		animation-duration: 3s;
		animation-timing-function: ease;
		animation-iteration-count: infinite;
	}

	.spacer {
		height: 15vh;
	}

	@media (min-width: 480px) {
		h1 {
			left: 10vw;
			border: 1px gray solid;
		}

		.spacer {
			height: 0;
		}
	}

	@keyframes wavy {
		50% {
			top: 25px;
		}
	}
</style>
