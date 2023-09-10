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

<div class="content glass">
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
    border-radius: 40px;
    background: white;
    cursor: pointer;
    font-size: 25px;
    transition: all 0.3s;
    
    backdrop-filter: blur(5px);
    box-shadow: 0 0 1rem 0 rgb(0 0 0 / 49%);
    user-select: none;
  }

  .content{
    border-radius: 10px;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .glass{
    backdrop-filter: blur(5px);
    background-color: rgb(255 255 255 / 15%);
    box-shadow: 0 0 1rem 0 rgb(0 0 0 / 49%);
  }

  .tabbar-tab:hover{
   /* box-shadow: none; */
  }

  .tabbar-tab-active{
    color: white;
    background-color: rgb(0 0 0 / 15%);
  }

</style>