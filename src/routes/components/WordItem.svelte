<script>
	/** @type {import('firebase/firestore').DocumentSnapshot}*/
	export let docSnap;

	$: data = docSnap.data();
</script>

{#if data}
	<div class="card bg-base-100 shadow-xl m-2">
		<div class="card-body">
			<h1>{data["text-1"]}</h1>
			<h2>{data["text-2"]}</h2>
		</div>
	</div>
{/if}
