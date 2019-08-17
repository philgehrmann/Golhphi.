<template>
<div class="footer">
  <div class="footer__newsletter">
    <h2>Newsletter</h2>
    <p>Du möchtest immer über neue Beiträge informiert werden und an Gewinnspielen und Aktionen teilnehmen? Trage einfach deine Emailadresse ein und bekomme schon bald alle tollen Infos zu meinen Golfbeiträgen.</p>
    <p><input class="row-block" type="email" placeholder="Deine E-Mailadresse ..."><a class="btn btn--normal btn--inline">Anmelden</a></p>
  </div>
  <div class="footer__navigation">
    <div class="footer__item">
      <h3> Navigation </h3>
      <ul>
        <li><a href="/impressum">Home</a></li>
        <li><a href="/impressum">Blog</a></li>
        <li><a href="/impressum">Artikel</a></li>
        <li><a href="/impressum">Kontakt</a></li>
        <li><a href="/impressum">Podcast</a></li>
        <li><a href="/impressum">Impressum</a></li>
      </ul>
    </div>
      <div class="footer__item">
        <h3> Artikel </h3>
      <ul>
        <li><a href="/impressum">Home</a></li>
        <li><a href="/impressum">Blog</a></li>
        <li><a href="/impressum">Artikel</a></li>
        <li><a href="/impressum">Kontakt</a></li>
        <li><a href="/impressum">Podcast</a></li>
        <li><a href="/impressum">Impressum</a></li>
      </ul>
    </div>
        <div class="footer__item">
        <h3> Social Media </h3>
      <ul>
        <li><a href="/impressum">Instagram</a></li>
      </ul>
    </div>
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
    width: 100vw;
    background: $white;

    &__newsletter {
      padding-top: 2rem;
      padding-left: 2rem;
      background: $white;
      padding-right: 2rem;
      h2 {
        color: $tuerkis;
         font-family: $textFont;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 1rem;
        @include lg {
         margin-bottom: 2rem;
        }
      }
      p {
        color:$lightdark;
        width: 100%;
        margin: 0 auto;
        @include font-size(0.9);
          @include lg {
            @include font-size(0.9);
              width: 40%;   
        }
      }
    }
  &__navigation{
    display: grid;
    background: $white;
    padding: 1rem;
    grid-template-columns:1fr;
    @include lg {
      grid-template-columns: 1fr 1fr 1fr ;
        padding: 2rem;
        grid-gap: 2rem;
        padding-left:12rem;
        padding-right: 12rem;
      align-items: top;
    }

  }
  &__item {
    padding: 1rem;
     @include font-size(0.7);
     @include lg {
        @include font-size(0.7);
     }

     h3 {
        @include font-size(1);
        padding-bottom: 1rem;
        width: auto;
        border-bottom: 1px solid $tuerkis;;
        font-family: $textFont;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        color: $lightdark;
        padding-bottom: 10px;
     }
    ul {
      li {
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
      
        a {
          color: $tuerkis;
          position: relative;
           @include font-size(0.9);
             @include lg {
                @include font-size(0.9);
           
          }
             &:before {
              content: "";
              position: absolute;
              height:1px;
              width: 0;
              margin: 0 auto;
              bottom: 0;
              left: 0;
              background: $tuerkis;
              transition: all 0.5s ease;
          }
          &:hover {
             &:before {
             width: 100%;
             transition: all 0.5s ease;
           }
          }
        }
      }
    }
  }
  .equalizer {
       float:right;
       margin-left: 20px;
       align-self: center;
       justify-self: center;
      @include lg {
        margin-left: 20px;
        margin-top: 3px;
        display:block;
      }
    .eq-bar {
      display:inline-block;
      width: 1px;
      height: 12px;
      background: $white;
      margin-right: 2px;
        @include lg {
          width: 2px;
          height: 15px;
      }
    }
  }
}
</style>
