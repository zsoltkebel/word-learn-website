<script>
	import { onSnapshot, collection } from 'firebase/firestore';
	import { db } from '../../lib/firebaseConfig';
	import DeckItem from '../components/DeckItem.svelte';

	/** @type {import('firebase/firestore').DocumentSnapshot[]} */
	let decks = [];

	const unsub = onSnapshot(collection(db, 'folders'), (snapshot) => {
		console.log(snapshot.docs);
		decks = snapshot.docs;
	});
</script>

<h1>Welcome to All Decks</h1>
<div class="grid grid-cols-2 md:grid-cols-5 gap-3">
	{#each decks as deck}
		<a href="/decks/{deck.id}">
			<DeckItem docSnap={deck} />
        </a>
	{/each}
</div>
