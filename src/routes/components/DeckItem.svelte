<script>
	/** @type {import('firebase/firestore').DocumentSnapshot}*/
	export let docSnap;

	$: data = docSnap.data();
</script>

{#if data}
	<div class="card bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">{data.name}</h2>
			<div class="flex justify-between">
				<h1>{data['lang-1']}</h1>
				<h2>{data['lang-2']}</h2>
			</div>
		</div>
	</div>
{/if}
