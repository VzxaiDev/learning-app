<script>
	import Tab from '../components/Tab.svelte'
	import Tabbar from '../components/Tabbar.svelte'
</script>

<!--
	<Tabbar>
		<Tab tabName="Info"><element></element></Tab>
</Tabbar>
-->

<Tabbar>
	<Tab tabName="Info"><p>Click a mode to start practcing.</p></Tab>
	<Tab tabName="Match"><p>Match</p></Tab>
	<Tab tabName="Quiz"><p>Quiz</p></Tab>
	<Tab tabName="Flashcards"><p>Flashcards</p></Tab>
</Tabbar>

<style>
	p{
		font-size: 32px;
	}
</style>