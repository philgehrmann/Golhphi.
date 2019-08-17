<template>
  <div class="instagram">
    <vue-instagram token="8302753692.1677ed0.b474a13a0310406a81914c125a51e23e" :count="4" :tags="['golf', 'golfing']" mediaType="image"  class="instagram__wrapper">
    <template slot="feeds" slot-scope="props">
     <div class="instagram__item"> <img :src="props.feed.images.standard_resolution.url"/></div>
    </template>
  </vue-instagram>
  </div>
</template>

<script>
import Vue from 'vue'
import VueInstagram from 'vue-instagram'

export default {
  name: 'Instagram',
    components: {
      VueInstagram
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";
.instagram {
  width: 100%;
  &__wrapper {
  display:grid;
  width:100%;
  grid-template-columns: 1fr;
      overflow: hidden;

  @include sm {
     grid-template-columns: 1fr 1fr; 
  }
    @include md {
     grid-template-columns: 1fr 1fr;
  }
  @include lg {
  grid-template-columns: 1fr 1fr 1fr 1fr;    
    max-height:250px;
    overflow: hidden;
  }
    @include xl {
 max-height:350px;
    }
  }
  &__item{
    img {
      width: 100%;
      height: auto;
      max-height:350px;
          @include sm {
              max-height:310px; 
          }
    }
  }
}
</style>