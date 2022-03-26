<script lang="ts">
  import {useLocation, useNavigate} from 'svelte-navigator';
  import type {Readable} from 'svelte/store';

  const navigate = useNavigate();
  const location = useLocation();

  // todo: developer should replace unknown with own UserType
  //                               vvvvvvv
  export let currentUser: Readable<unknown | null>;

  $: {
    if ($currentUser == null) {
      navigate('/login', {
        state: {from: $location.pathname},
        replace: true,
      });
    }
  }
</script>

<slot/>