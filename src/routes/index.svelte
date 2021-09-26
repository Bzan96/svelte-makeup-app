<script lang="ts">
	import Menu from '../components/menu.svelte';
	import PageTitle from '../components/page-title.svelte';

	const title = 'Svelte Makeup App';
</script>

<svelte:component this={Menu} />

<svelte:component this={PageTitle} {title} />
