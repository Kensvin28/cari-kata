<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Cari Kata</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="A simple tool to find Indonesian words based on specific criteria like prefix, length, and required letters." />
</svelte:head>
{@render children()}
