<script>
	import { onSnapshot, collection } from 'firebase/firestore';
	import { db } from '../lib/firebaseConfig';
	import WordItem from './components/WordItem.svelte';

	/** @type {import('firebase/firestore').DocumentSnapshot[]} */
	let words = [];

	const unsub = onSnapshot(collection(db, 'words'), (snapshot) => {
		console.log(snapshot.docs);
		words = snapshot.docs;
	});
</script>

<div class="hero min-h-screen bg-base-200" style="background-image: url(/IMG_9923.png);">
	<div class="hero-overlay bg-opacity-70"></div>
	<div class="hero-content text-center">
		<div class="max-w-md">
			<p>Welcome to</p>
			<h1 class="text-5xl font-bold py-6">Word Learn</h1>
			<a href="/decks" class="btn btn-primary">View Decks</a>
		</div>
	</div>
</div>
