<template>
<div>
  <div class="slick-navigator">
    <p class="categorie-badge categorie-badge--video">Artikel</p>
    <h1 class="anim-headline">Die Golfreise</h1>
    <div class="anim--line"></div>
    <div class="slick-navigator--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
      ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea t
      akimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
       magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

  </div>
 
  <slick
    ref="slick"
    :options="slickOptions"
    @afterChange="handleAfterChange"
    @beforeChange="handleBeforeChange"
    @breakpoint="handleBreakpoint"
    @destroy="handleDestroy"
    @edge="handleEdge"
    @init="handleInit"
    @reInit="handleReInit"
    @setPosition="handleSetPosition"
    @swipe="handleSwipe"
    @lazyLoaded="handleLazyLoaded"
    @lazyLoadError="handleLazeLoadError">
    <div class="slick--image" style="background-image:url('https://picsum.photos/2000/1000?random=1')" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500" data-headline="Was ein Schlag" data-subtext=""></div>
    <div class="slick--image" style="background-image:url('https://picsum.photos/id/237/2000/1000')"   data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500" data-headline="Hammer Aussicht" data-subtext=""></div>
    <div class="slick--image" style="background-image:url('https://picsum.photos/2000/1000?random=1')" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500" data-headline="Auch mal Kultur" data-subtext=""></div>
    <div class="slick--image" style="background-image:url('https://picsum.photos/2000/1000?random=1')" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500" data-headline="Jetzt reicht es" data-subtext=""></div>
    <div class="slick--image" style="background-image:url('https://picsum.photos/2000/1000?random=1')" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500" data-headline="Driver vs Eisen" data-subtext=""></div>
  </slick>
</div>
</template>

<script>
import $ from "jquery";
import Slick from 'vue-slick';

export default {
  name: 'Maincontent',
  props: {
    msg: String
  },
  components: {
    Slick
  },
  data() {
        return {
            slickOptions: {
                slidesToShow: 1,
                infinite: true,
                speed: 200,
                autoplay: true,
                fade: true,
                autoplaySpeed: 8000
            },
        };
    },

    // All slick methods can be used too, example here
    methods: {
        animateAnimLine() {
          this.$contentful
            .getEntries()
            .then((res) => {
              console.log("Moin Jo Moin");
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
          });
         $( ".anim--line" ).animate({
          width: '100%'
        }, 8000, function() {
         $( ".anim--line" ).width(0);
        });
        },
        animateAnimLineReset() {
         $( ".anim--line" ).stop();
         $( ".anim--line" ).width(0);
        },
        next() {
            this.$refs.slick.next();
            this.animateAnimLineReset();
            this.animateAnimLine();
        },

        prev() {
            this.$refs.slick.prev();
            this.animateAnimLineReset();
            this.animateAnimLine();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            this.animateAnimLineReset();
            this.animateAnimLine();
            let newheadline = document.querySelector('.slick-active .slick--image').getAttribute('data-headline');
            document.querySelector('.anim-headline').textContent = newheadline;
        },
        handleInit(event, slick) {
          this.animateAnimLineReset();
          this.animateAnimLine();
        },
        handleSwipe(event, slick, direction) {
            this.animateAnimLineReset();
            this.animateAnimLine();
        }
    },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/_variables.scss";
@import "../scss/slick.min.css";
.maincontent {
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;
    overflow: hidden;

  .slick-navigator {
    position:absolute;
    top: 50%;
    z-index:2;
    padding: 1rem;
      &--text {
        width: 75%;
        height: 150px;
        background: -webkit-linear-gradient($white,transparent );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @include font-size(0.8);
        line-height: 1.2rem;
      }

      h1 {
        font-size: 2rem;
        text-transform: uppercase;
      }
    .anim--line {
      width:0;
      margin-top: 10px;
      margin-bottom: 30px;
      display:block;
      background: $white;
      height: 4px;

      &::after {
      content: "";
      position:absolute;
      left:0;
      width:75%;
      display:block;
      background: rgba(255,255,255,0.5);
      height: 4px;
      }
    }
    .categorie-badge {
      padding: 5px;
      border-radius: 5px;
      @include font-size(0.6);
      &--video {
        background: rgba(0,0,0,0.3);
        width: auto;
        display:inline;
      }
    }
  }
  .slick--image {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right:0;
      width: 100%;
      height: 100vh;
      background-size:cover;
    }
    .slick-slider {
      top: 0;
      left: 0;
      bottom: 0;
      right:0;
      height: 100vh;
      width: 100vw;
      .slick-list {
        position:absolute;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        width: 100vw; 
        .slick-slide {
          height:100vh;
          width: 100vw;
          position:relative;
        }
      }
    }
  @include lg {
    padding:0;
    .slick-navigator {
      position:absolute;
      top: 50%;
      left: 3rem;
      z-index:2;
      &--text {
        width: 500px;
        height: 200px;
        @include font-size(0.9);
        line-height: 1.5rem;
        display:block;
        text-align: justify;
        position: relative;
        color: $tuerkis;
        background: -webkit-linear-gradient($white,transparent );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &::after {
          content:"";
          position:absolute;
          bottom:0;
          left:0;
          width: 100%;
          height:120px;
        }
      }

      h1 {
        font-size: 5rem;
        text-transform: uppercase;
      }
      .anim--line {
        width:20px;
        margin-top: 10px;
        margin-bottom: 10px;
        display:block;
        background: $white;
        height: 7px;
        position: relative;

        &::after {
        content: "";
        position:absolute;
        left:0;
        width:100%;
        display:block;
        background: rgba(255,255,255,0.5);
        height: 7px;
        }
      }
    }
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;
    .slick--image {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right:0;
      width: 100vw;
      height: 100vh;
      background-size:cover;
    }
    .slick-slider {
      top: 0;
      left: 0;
      bottom: 0;
      right:0;
      height: 100vh;
      width: 100vw;
      .slick-list {
        position:absolute;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        width: 100vw; 
        .slick-slide {
          height:100vh;
          width: 100vw;
          position:relative;
        }
      }
    }
  }
}
</style>
