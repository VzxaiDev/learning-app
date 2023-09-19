<script>
  export let showingTerm = true;
  export let term = "une pomme";
  export let def = "an apple";

  let text = term;

  $:{
    setTimeout(()=> {
      showingTerm ? text = term : text = def;
    }, 250);
  }
</script>

<div class="card-wrapper">
  <button on:click={() => showingTerm = !showingTerm} class:r180={showingTerm} class:r0={!showingTerm}  class="card glass">
    <h1 class="term" class:r180={showingTerm} class:r0={!showingTerm}>
      {text}
    </h1>
  </button>
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

  .card{
    width: 32rem;
    height: 20rem;
    border-radius: 20px;
    user-select: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .glass{
    backdrop-filter: blur(5px);
    background-color: rgba(66, 23, 162, 0.32);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.21)
  }

  .r180{
    transition: 0.5s;
    transform: rotateX(180deg);
  }

  .r0{
    transition: 0.5s;
    transform: rotateX(360deg);
  }
</style>