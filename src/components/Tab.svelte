<script>
  import { getContext } from 'svelte'

  export let tabName = "Tab";

  const { config, currentTab } = getContext('tabbar');
  config(tabName);
</script>

{#if $currentTab === tabName}
  <slot/>
{/if}