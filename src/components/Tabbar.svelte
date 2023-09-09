<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store';

  const tabs = [];

  const currentTab = writable('n/a');

  setContext('tabbar', {
    config: tabName => {
      tabs.push(tabName);
      currentTab.set(tabName);
    },
    currentTab
  });
</script>

<div class="tabbar">
  <ul>
    {#each tabs as tab}
      <li>{tab}</li>
    {/each}
  </ul>
</div>


<slot />
<h1>Tabs: {tabs}, Current Tab: {$currentTab} </h1>