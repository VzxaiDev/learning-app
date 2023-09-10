<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store';

  let tabs = [];

  const currentTab = writable('n/a');

  setContext('tabbar', {
    config: tabName => {
      tabs = [...tabs, tabName]
      currentTab.set(tabName);
    },
    currentTab
  });
</script>

<!-- <h1>Tabs: {tabs}, Current Tab: {$currentTab} </h1> -->

<ul class="tabbar">
  {#each tabs as tab}
    <li on:click={() => currentTab.set(tab)} class:tabbar-tab-active={$currentTab === tab} class="tabbar-tab">{tab}</li>
  {/each}
</ul>

<div class="content">
  <slot />
</div>

<style>
  .tabbar{
    background: none;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0px;
  }

  .tabbar-tab{
    list-style-type: none;
    margin: 0;
    padding: 8px 24px 8px 24px;
    border-radius: 6px;
    background: white;
    cursor: pointer;
    font-size: 25px;
  }

  .tabbar-tab-active{
    background: black;
    color: white;
  }

  .content{
    background: white;
    border-radius: 10px;
    height: 100%;
    flex: 1;
  }
</style>