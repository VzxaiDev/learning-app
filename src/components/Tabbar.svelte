<script>
  import { setContext, writeable } from 'svelte'

  const tabs = [];

  const currentTab = writeable();

  setContext('tabbar', {
    config: tabName => {
      tabs.push(tabName);
      currentTab(tabName);
    },
    currentTab
  })
</script>

<slot />
<h1>Tabs: {tabs}, Current Tab: {currentTab}</h1>