<script>
  import { page } from '$app/stores';
  export let title;
  export let href;
</script>

<li>
  <a href={href} class:notactive={$page.url.pathname != href}>
    {title}
  </a>  
</li>

<style>
  .notactive{
    color: #fff;
  }
</style>