<template>
  <div class="blog">
    blog
  </div>
</template>

<script>
export default {
  name: 'Blog',
    components: {
  },
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">
@import "../scss/_variables.scss";
.blog {
  width: 50%;
  position: absolute;
  right:0;
  top:0;
  background: $white;
  height: 100vh;
}
</style>
