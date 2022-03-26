<script lang="ts">
  import {useLocation, useNavigate} from 'svelte-navigator';

  const navigate = useNavigate();
  const location = useLocation();

  navigate('/login', {
    state: {from: $location.pathname},
    replace: true,
  });
</script>