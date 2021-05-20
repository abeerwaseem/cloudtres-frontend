<template>
  <div class="project-overview">
    <transition name="fade" mode="out-in">
      <router-view
        v-if="parentRouteLoaded"
        :key="$route.fullPath"
      ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "invoice.listing",
  components: {},
  data() {
    return {
      parentRouteLoaded: false
    };
  },
  mounted() {
    this.parentRouteLoaded = true;
  }
};
</script>
