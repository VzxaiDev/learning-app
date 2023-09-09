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
	<Tab tabName="Info"><p>Hello</p></Tab>
	<Tab tabName="Match"><p>Hello</p></Tab>
	<Tab tabName="Quiz"><p>Hello</p></Tab>
</Tabbar>