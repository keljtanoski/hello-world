<template>
  <div class="resume">
    <h1>This is a resume page</h1>
    <CV />
  </div>
</template>
<script>
// @ is an alias to /src
import CV from '@/components/CV.vue'
export default {
  name: 'Resume',
  components: {
    CV
  }
}

</script>
