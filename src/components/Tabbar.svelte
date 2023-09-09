<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store';

  const tabs = [];

  const currentTab = writable('n/a');

  setContext('tabbar', {
    config: tabName => {
      tabs.push(tabName);
    },
    currentTab
  });
</script>

<slot />
<h1>Tabs: {tabs}, Current Tab: {$currentTab} </h1>