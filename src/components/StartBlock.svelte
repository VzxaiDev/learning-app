<script>
  export let active = false;
  export let head = '';
  export let subhead = '';
</script>


{#if active}
  <slot />
{:else}
  <div class="message">
    <h1>{head}</h1>
    <h2>{subhead}</h2>
    <button on:click={() => active = true}>Start</button>
  </div>
{/if}

<style>
  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .message h1{
    margin: 0px;
  }

  .message button{
    background: blue;
    color: white;
    border-radius: 10px;
    padding: 4px 24px 4px 24px;
    border: none;
    font-size: 22px;
    cursor: pointer;
  }
</style>