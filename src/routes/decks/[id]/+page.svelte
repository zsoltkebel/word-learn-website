<script>
	import WordItem from '../../components/WordItem.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Welcome to Deck</h1>
{#each data.words as word}
	<WordItem docSnap={word} />
{/each}
