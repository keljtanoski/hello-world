<template>
  <div id="app">
    <div class="main">
      <div class="flex flex-row h-full">
        <!-- Sidebar -->
        <sidebar/>
        <div class="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
          <router-view/>
          <!-- Content -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Sidebar from "@/components/Sidebar";

export default {
  components: {Sidebar}
}
</script>