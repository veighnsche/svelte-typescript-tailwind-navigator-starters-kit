<script lang="ts">
  import {useLocation, useNavigate} from 'svelte-navigator';
  import type {Readable} from 'svelte/store';

  const navigate = useNavigate();
  const location = useLocation();

  // todo: developer should replace unknown with own UserType
  //                               vvvvvvv
  export let currentUser: Readable<unknown | null>;

  $: {
    if ($currentUser) {
      const from = $location.state?.from ?? '/app';
      navigate(from, {replace: true});
    }
  }
</script>

{#if $currentUser}
  <slot/>
{/if}
