<script>
  import { MakeImage } from "$lib/functions";
  import { lazyLoad } from "$lib/lazyLoad";
	import { onMount } from "svelte";
  import moment from "moment";

  let date = "";
  let list = [];
  let busy = false;
  let resposneImage = "";

  const handleSubmit = async() => {
    busy = true;
    resposneImage = await MakeImage(date);
    busy = false;

    let obj = {
      time:Date.now(),
      url:resposneImage,
    };

    list.push(obj);
    localStorage.setItem("images",JSON.stringify(list));
  };

  const myDate = (date) => {
    return moment(date).fromNow();
  }

  onMount(() => {
    if(localStorage.getItem("images")){
      list = JSON.parse(localStorage.getItem("images"));
      console.log(list);
    }
  })
</script>

<h1>Enter your birthday</h1>
<form aria-disabled={busy} on:submit|preventDefault={handleSubmit}>
  <input aria-disabled={busy} bind:value={date} type="date" id="start" name="date">
  {#if busy}
  <button aria-busy="true" disabled>Do Magic</button>
    {:else}
    <button>Do Magic</button>
  {/if}
</form>

{#if resposneImage && !busy}
<img style="width: 100%;" use:lazyLoad={resposneImage} src={resposneImage}/>  
{/if}

{#each list as card}
  <article style="overflow: hidden;">
    <span><small>Created at {myDate(card.time)}<br></small></span>
    Image Source
    <a  target=”_blank” class="truncate" href={card.url}>{card.url}</a>
  </article>
{/each}

<style>
  .truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
 
</style>