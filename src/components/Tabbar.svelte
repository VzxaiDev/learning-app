<script>
  import { setContext } from 'svelte'

  const tabs = [];

  setContext('tabbar', {
    config: tabName => {
      tabs.push(tabName);
    }
  })
</script>

<slot />
<h1>Tabs: {tabs}</h1>