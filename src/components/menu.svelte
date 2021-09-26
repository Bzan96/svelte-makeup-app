<script>
	import { ApiRoute } from '../api-routes';
</script>

<nav>
	<ul>
		{#each Object.values(ApiRoute) as route}
			<li><a href="/{route.replace('%20', '-')}">{route.toUpperCase().replace('%20', ' ')}</a></li>
		{/each}
	</ul>
</nav>

<style type="scss">
	nav {
		margin: 50px auto;

		ul {
			display: flex;
			justify-content: space-evenly;
			list-style: none;

			a {
				text-decoration: none;
				color: var(--primary);
				background-color: var(--dark-background);
				padding: 10px 20px;
				border-radius: 25%;
				box-shadow: 0 5px 10px 10px var(--primary), 0 6px 11px 11px var(--white);

				:hover {
					background-color: var(--white);
				}
			}
		}
	}
</style>
