<script>
	import Tab from '../components/Tab.svelte'
	import Tabbar from '../components/Tabbar.svelte'
	import StartBlock from '../components/StartBlock.svelte'
</script>

<!--
	<Tabbar>
		<Tab tabName="Info"><element></element></Tab>
</Tabbar>
-->

<Tabbar>
	<Tab tabName="Info" active><p>Click a mode to start practcing.</p></Tab>
	<Tab tabName="Match">
		<StartBlock head="Mathing Game" subhead="Try to match terms with their difention">
			<p>am i big?</p>
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