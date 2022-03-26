<script lang="ts">
  import {useLocation, useNavigate} from 'svelte-navigator';
  import {login} from '../stores/currentUser';

  const navigate = useNavigate();
  const location = useLocation();

  function handleLogin() {
    const from = $location.state?.from ?? '/app';
    navigate(from, {replace: true});
  }
  // todo: developer should replace unknown with own UserType
  //              vvvvvvv
  const userCred: unknown = {user: 'I am a logged in user'}
</script>

<div class="h-[calc(100vh-2.5rem)] w-screen bg-slate-200 flex flex-col justify-center items-center">
  <h1 class="text-3xl">Login to enable '/overview'</h1>
  <button on:click={() => login(userCred).then(handleLogin)}>
    Login
  </button>
</div>