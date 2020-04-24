<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        TheTVDB
      </router-link>
      <span class="attribution">
        <br />
        <!-- An interactive learning project from Thinkster.io.  -->
        Code & design licensed under MIT.
        <br />
        TV information and images are provided by TheTVDB.com, but we are not
        endorsed or certified by TheTVDB.com or its affiliates.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>
