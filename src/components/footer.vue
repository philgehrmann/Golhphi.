<template>
<div class="footer">
  <div class="footer__item">Copyright © 2019 Golfphi.</div>
  <div class="footer__item">
    <ul>
      <li><a href="/impressum">Impressum</a></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_variables.scss";
.footer {
    position: absolute;
    width: 100vw;
    height: 60px;
    bottom:0;
    display: grid;
    grid-template-columns: 50% 50%;
  @include lg {
    grid-template-columns: 20% 80%;
    padding: 2rem;
    align-items: center;
  }
  &__item {
    @include font-size(0.9);
    ul {
      padding-right: 2rem;
      float: right;
      li {
        display: inline-block;
        a {
          color: $white;
           @include font-size(0.9);

        }
      }
    }
  }
}
</style>
