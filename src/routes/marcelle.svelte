<script lang="ts">
	import type { ProductType } from '../api-routes';
	import { makeTitle } from '../page-utils';
	import { apiUrl, ApiRoute, QueryType } from '../api-routes';
	import Product from '../components/product.svelte';
	import Menu from '../components/menu.svelte';

	const data = (async () => {
		const response = await fetch(`${apiUrl}?${QueryType.Brand}${ApiRoute.Marcelle}`);
		return (await response.json()) as ProductType[];
	})();

	const title = makeTitle(ApiRoute.Marcelle);
</script>

<svelte:component this={Menu} />

<svelte:component this={Product} {title} {data} />
