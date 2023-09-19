<script>
  let showingTerm = true;
  let term = "123";
  let def = "321";

  let props = {
    term,
    def
  }
</script>

<div class="card-wrapper">
  <slot {props} {showingTerm} />
  <div class="buttons glass">
    <button class="last">
      <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 12H3m0 0l8.5-8.5M3 12l8.5 8.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
    <button on:click={() => showingTerm = !showingTerm} class="flip">
      <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21.888 13.5C21.164 18.311 17.013 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2c4.1 0 7.625 2.468 9.168 6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 8h4.4a.6.6 0 00.6-.6V3" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
    <button class="next">
      <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
  </div>
  
</div>


<style>
  .card-wrapper{
    width: 100%;
    gap: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .glass{
    backdrop-filter: blur(5px);
    background-color: rgba(66, 23, 162, 0.32);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.21)
  }

  .buttons{
    border-radius: 10px;
    gap: 20px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons button{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 20px;
    cursor: pointer;

    background: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>