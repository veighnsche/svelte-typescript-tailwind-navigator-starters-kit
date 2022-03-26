<script lang="ts">
  import {Link, Route, Router} from 'svelte-navigator';
  import GuardRedirect from './components/navigator/GuardRedirect.svelte';
  import ScreenPage from './components/ScreenPage.svelte';
  import LoginPage from './pages/LoginPage.svelte';
  import {currentUser, logout} from './stores/currentUser';
</script>

<Router>
  <header class="px-2 w-screen bg-slate-500 text-white">
    <nav class="h-10 flex items-center">
      <Link to={$currentUser ? '/app' : '/'}>
        <span class="font-bold text-white">Hello World</span>
      </Link>
      {#if $currentUser}
        <div class="w-8"></div>
        <Link to="/page1">
          <span class="text-white">Page1</span>
        </Link>
        <div class="w-4"></div>
        <Link to="/page2">
          <span class="text-white">Page2</span>
        </Link>
      {/if}
      <div class="flex-1"></div>
      {#if $currentUser}
        <a class="font-bold cursor-pointer" href={void(0)} style="color: white" on:click={logout}>log out</a>
      {:else}
        <Link to="/login">
          <a class="font-bold text-white">log in</a>
        </Link>
      {/if}
    </nav>
  </header>
  <main>
    <Route path="/">
      <ScreenPage>
        <h1 class="text-3xl">Hello World</h1>
        <p class="text-xl">
          This is a simple Svelte app.
        </p>
      </ScreenPage>
    </Route>
    <Route path="/login">
      <ScreenPage>
        <LoginPage/>
      </ScreenPage>
    </Route>
    {#if $currentUser}
      <Route path="/app">
        <ScreenPage>
          <h1 class="text-3xl">This page is for logged in users only</h1>
          <p class="text-xl">
            logging out will redirect you to '/login'
          </p>
        </ScreenPage>
      </Route>
      <Route path="/page1">
        <ScreenPage>
          <h1 class="text-3xl">Page 1</h1>
          <p class="text-xl">
            This is page 1.
          </p>
        </ScreenPage>
      </Route>
      <Route path="/page2">
        <ScreenPage>
          <h1 class="text-3xl">Page 2</h1>
          <p class="text-xl">
            This is page 2.
          </p>
        </ScreenPage>
      </Route>
    {/if}
    <Route>
      {#if $currentUser}
        <ScreenPage>
          <h1 class="text-3xl">404</h1>
          <p class="text-xl">
            This page does not exist.
          </p>
        </ScreenPage>
      {:else}
        <GuardRedirect/>
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