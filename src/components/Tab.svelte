<script>
  import { getContext } from 'svelte'

  export let tabName = "Tab";

  const { config } = getContext('tabbar');
  config(tabName);

</script>

<div>
  <slot/>
</div>