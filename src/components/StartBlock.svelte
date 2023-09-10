<script>
  export let active = false;
  export let head = '';
  export let subhead = '';
</script>


{#if active}
  <div>
    <h1>Sorry, This mode isn't avalible at the momment</h1>
    <h3> We are working on bringing it back as soon as possible</h3>
  </div>
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