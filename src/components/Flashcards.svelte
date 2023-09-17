<script>
  let showingTerm = true;
  let term = "une pomme";
  let def = "a apple";
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
  <div class="buttons">
    <button class="last glass"></button>
    <button class="flip glass"></button>
    <button class="next glass"></button>
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
    background-color: rgba(23, 84, 162, 0.31);
    box-shadow: 0 0 1rem 0 rgb(0 0 0 / 49%);
  }

  .buttons{
    width: 100%;
    gap: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons button{
    width: 2rem;
    height: 2rem;
    border-radius: 20px;
    cursor: pointer;

    border: none;
  }

  .r180{
    transition: 0.5s;
    transform: rotateX(180deg);
  }

  .r0{
    transition: 0.5s;
    transform: rotateX(0deg);
  }
</style>