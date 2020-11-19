<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CV />
  </div>
</template>
<script>
// @ is an alias to /src
import CV from '@/components/CV.vue'
export default {
  name: 'About',
  components: {
    CV
  }
}

</script>
