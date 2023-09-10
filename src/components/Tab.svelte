<script>
  import { getContext } from 'svelte'

  export let tabName = "Tab";
  export let active = false;

  const { config, currentTab } = getContext('tabbar');
  config(tabName);

  active ? currentTab.set(tabName) : null;
</script>

{#if $currentTab === tabName}
  <slot/>
{/if}