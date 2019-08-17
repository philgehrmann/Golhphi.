<template>
  <div id="app">
      <div class="header">
      <a href="/" @click.prevent="activeView = 'home'"><h1>GOLFPHI.</h1></a>
      <div class="navigation">
      <ul>
        <li class="is--active"><a href="/">Home</a></li>
        <li><a href="#" >Blog</a></li>
        <li><a href="/videos">Videos</a></li>
        <li><a href="/podcast">Podcast</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
  </div>
  </div>
    <div class="maincontent">
      <Maincontent></Maincontent>
    </div>
    <Instagram></Instagram>
    <Footer></Footer>
  </div>

</template>

<script>
import Footer from './components/footer.vue'
import Instagram from './components/instagram.vue'
import Maincontent from './components/maincontent.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Maincontent,
    Instagram
  },
  data(){
    return {
      activeView: 'home'
    }; 
  }
}
</script>

<style lang="scss">
@import "./scss/_reset.scss";
@import "./scss/_variables.scss";
@import "./scss/_globals.scss";
.navigation {
  display:none;
  @include lg {
  display:block;
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
          height:2px;
          width: 0;
          margin: 0 auto;
          bottom: 0;
          left: 0;
          background: $white;
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
          @include font-size(0.9);
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
          height: 2px;
          width: 100%;
          margin: 0 auto;
          bottom:0;
          background: $white;
          transition: all 0.3s ease;
       }
      }
    }
    }
  }
}
.header {
    position: absolute;
    z-index:25;
    width: 100vw;
    height: 60px;
    top:0;
    padding:1rem;
    padding-top:0;
    display: grid;
    grid-template-columns: 50% 50%;
    h1 {
    position: relative;
    transform: skew(-15deg);
  }
  @include lg {
    position: fixed;
    grid-template-columns: 20% 80%;
    padding:1rem;
    height: 130px;
    padding-left: 3rem;
    padding-right: 3rem;
    align-items: center;
  }
  h1 {
    position: relative;
    transform: skew(-15deg);
  }
}
</style>
