<script lang="ts">
  import {link, Route, Router} from 'svelte-navigator';
  import GuardRedirect from './components/navigator/GuardRedirect.svelte';
  import RouteGuard from './components/navigator/RouteGuard.svelte';
  import {currentUser, login, logout} from './stores/currentUser';

  // login({user: 'I am a logged in user'});
</script>

<Router>
  <header class="px-2 w-screen bg-slate-500 text-white">
    <nav class="h-10 flex items-center">
      <a class="font-bold" href={$currentUser ? '/app' : '/'} style="color: white" use:link>Hello World</a>
      <div class="flex-1"></div>
      {#if $currentUser}
        <a class="font-bold" href={void(0)} style="color: white" on:click={logout}>log out</a>
      {:else}
        <a class="font-bold" href="/login" style="color: white" use:link>log in</a>
      {/if}
    </nav>
  </header>
  <main>
    <Route path="/">
      <div class="h-[calc(100vh-2.5rem)] w-screen bg-slate-200 flex flex-col justify-center items-center">
        <h1 class="text-3xl">Hello World</h1>
        <p class="text-xl">
          This is a simple Svelte app.
        </p>
      </div>
    </Route>
    <Route path="/login">
      <div class="h-[calc(100vh-2.5rem)] w-screen bg-slate-200 flex flex-col justify-center items-center">
        <h1 class="text-3xl">Login to enable '/app'</h1>
        <button on:click={() => login({user: 'I am a logged in user'})}>
          Login
        </button>
      </div>
    </Route>
    <RouteGuard {currentUser}>
      <Route path="/app">
        <div class="h-[calc(100vh-2.5rem)] w-screen bg-slate-200 flex flex-col justify-center items-center">
          <h1 class="text-3xl">This page ('/app') is for logged in users only</h1>
          <p class="text-xl">
            logging out will redirect you to '/login'
          </p>
        </div>
      </Route>
    </RouteGuard>
    <Route>
      {#if $currentUser}
        <div class="h-[calc(100vh-2.5rem)] w-screen bg-slate-200 flex flex-col justify-center items-center">
          <h1 class="text-3xl">404</h1>
          <p class="text-xl">
            This page does not exist.
          </p>
        </div>
      {:else}
        <GuardRedirect {currentUser}/>
      {/if}
    </Route>
  </main>
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    @apply bg-cover bg-center bg-no-repeat p-0;
  }
</style>