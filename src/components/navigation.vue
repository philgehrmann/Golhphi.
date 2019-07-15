<template>
  <div class="navigation">
      <ul>
        <li class="is--active"><a href="/">Home</a></li>
        <li><a href="#" @click.prevent="activeView = 'blog'" >Blog</a></li>
        <li><a href="/videos">Videos</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/_variables.scss";
.navigation {
  text-align: right;
  padding: 2rem;
  ul {
    li {
        display:inline-block;
        padding: 1rem;
        position: relative;
       &:before {
          content: "";
          position: absolute;
          height:100%;
          width: 0;
          margin: 0 auto;
          top: 0;
          left: 0;
          background: $tuerkis;
          transition: all 0.5s ease;
       }
        &:hover {
          a {
            color: $white;
            transition: all 0.4s ease;
            transition-delay: 0.1s;
          }
           &:before {
             width: 100%;
             transition: all 0.5s ease;
           }
        }
      a {
          font-family: $textFont;
          position:relative;
          @include font-size(1.2);
          z-index: 1;
          color: $white;
          text-decoration: none;
      }
      &.is--active {
         a {
            color: $white;
            transition: all 0.4s ease;
            transition-delay: 0.1s;
          }
        &:before {
          content: "";
          position: absolute;
          height:2px;
          width: 100%;
          margin: 0 auto;
          bottom:0;
          background: $tuerkis;
          transition: all 0.3s ease;
       }
      }
    }
  }
}
</style>
