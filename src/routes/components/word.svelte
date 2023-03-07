<script>
	/** @type {import('firebase/firestore').DocumentSnapshot}*/
	export let docSnap;

	$: data = docSnap.data();
</script>

{#if data}
	<div class="card bg-base-100 shadow-xl m-2">
		<div class="card-body">
			<h1>{data.word}</h1>
			<h2>{data.translation}</h2>
		</div>
	</div>
{/if}
