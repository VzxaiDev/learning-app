<script>
	import Tab from '../components/Tab.svelte'
	import Tabbar from '../components/Tabbar.svelte'
	import StartBlock from '../components/StartBlock.svelte'
	import { page } from '$app/stores';
  import { goto } from "$app/navigation";	

	let myquery = new URLSearchParams($page.url.searchParams.toString());
	let count = Number(myquery.get('word'));

	$: count ? myquery.set('word', count + 1) : myquery.set('word', 1);
</script>

<Tabbar>
	<Tab tabName="Info" active><p>Click a mode to start practcing.</p></Tab>
	<Tab tabName="Match">
		<StartBlock head="Mathing Game" subhead="Try to match terms with their difention">
			<h1>This mode is not avalible at the momment</h1>
			<h2>[ERROR] This mode is disabled. <br><br> [MESSAGE] Match Mode is not working at the momment.</h2>
			<button on:click={() =>{ goto(`?${myquery.toString()}`).then(console.log("done")); count++;}}>Click me!</button>
		</StartBlock>
	</Tab>
	<Tab tabName="Quiz"><p>Quiz</p></Tab>
	<Tab tabName="Flashcards"><p>Flashcards</p></Tab>
</Tabbar>

<style>
	p{
		font-size: 32px;
	}
</style>