<script>
	import { onSnapshot, collection } from 'firebase/firestore';
	import { db } from '../lib/firebaseConfig';
	import Word from './components/word.svelte';

	/** @type {import('firebase/firestore').DocumentSnapshot[]} */
	let words = [];

	const unsub = onSnapshot(collection(db, 'words'), (snapshot) => {
		console.log(snapshot.docs);
		words = snapshot.docs;
	});
</script>

<h1>Welcome to SvelteKit</h1>
{#each words as word}
	<Word docSnap={word} />
{/each}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
