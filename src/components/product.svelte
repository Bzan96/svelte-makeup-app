<script lang="ts" title data>
	import type { ApiRoute, ProductType } from '../api-routes';
	import PageTitle from './page-title.svelte';

	export let data: ProductType[];
	export let title: ApiRoute;

	let description: HTMLParagraphElement;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<svelte:component this={PageTitle} {title} />

<section class="product">
	<ul>
		{#await data}
			<p>Loading...</p>
		{:then data}
			{#each data as product (product.id)}
				<li>
					<article>
						<figure>
							<img src={product.image_link ?? ''} alt={`Product image of ${product.name}`} />
							<span>{`$${product.price}`}</span>
							<figcaption>
								<strong>Product:</strong>
								{product.name}
							</figcaption>
						</figure>
						{#if product.description && product.description.length > 0}
							<button on:click={() => null}>Read more</button>
							<p bind:this={description}>
								{product.description}
							</p>
						{:else}
							<button disabled>No description available</button>
						{/if}
					</article>
				</li>
			{/each}
		{:catch error}
			<p>Caught error: {error}</p>
		{/await}
	</ul>
</section>

<style type="text/scss">
	@import '../styles/product.scss';
</style>
