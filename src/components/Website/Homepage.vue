<template>
  <div id="homepage">
    <transition name="fade">
    <nav v-if="menu">
      <ul class="nav__menu">
        <li v-if="mobileMenu" class="nav__menu-item">Documentation</li>
        <li v-if="mobileMenu" class="nav__menu-item">Community</li>
        <li v-if="mobileMenu" class="nav__menu-item">Updates</li>
        <li @click="toggleMenu" class="nav__menu-item"><i class="fa fa-bars" aria-hidden="true"></i></li>
      </ul>
    </nav>
    </transition>
    <header>
      <img class="homepage__logo" :src="logoSrc" alt="">
      <div class="header__content">
      <h1>{{logo}}</h1>
      <h2>{{subheader}}</h2>
      <div class="btn--group">
      <a class="btn btn--large btn--blue" href="">documentation</a>
      <a class="btn btn--large btn--white" href="">
        <i class="btn--icon fa fa-github" aria-hidden="true"></i>Github</a>
        </div>
        </div>
    </header>
    <section class="releases">
      <p class="text--white">v 1.0 beta has been released!
        <a href="" class="btn btn--small btn--white">1.0 docs</a>
        <a href="" class="btn btn--small btn--white">learn more</a>
      </p>
    </section>
    <main>
       <section class="features">
      <div class="container">
        <ul class="features__list">
          <li class="features__list-item">
            <img class="features__list-img" :src="templates" alt="">
            <h3>TamiatCMS Templates</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptate, pariatur veritatis
              cum quam soluta sit consequatur vero voluptatibus.</p>
          </li>
          <li class="features__list-item">
            <img class="features__list-img" :src="layout" alt="">
            <h3>TamiatCMS Templates</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptate, pariatur veritatis
              cum quam soluta sit consequatur vero voluptatibus.</p>
          </li>
          <li class="features__list-item">
            <img class="features__list-img" :src="material" alt="">
            <h3>TamiatCMS Templates</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptate, pariatur veritatis
              cum quam soluta sit consequatur vero voluptatibus.</p>
          </li>
        </ul>
      </div>
        </section>
   <section class="sponsors">
       <div class="container">
        <ul class="sponsors__list">
          <li>
            <img class="sponsors__logo" :src="placeholder" alt="">
          </li>
          <li>
            <img class="sponsors__logo" :src="placeholder" alt="">
          </li>
          <li>
            <img class="sponsors__logo" :src="placeholder" alt="">
          </li>
        </ul>
            <a href="" class="btn btn--small btn--white">become a backer <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
      </div>
      </section>
<div class="support">
      <div class="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, numquam!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, assumenda?</p>
      <ul class="support__brands">
        <li><h4>Patreon</h4><img class="support__img" :src="patreon" alt=""></li>
        <li><h4>PayPal</h4><img class="support__img" :src="paypal" alt=""></li>
      </ul>
        </div>
</div> 
<section class="slogan">    
      <div class="trans--container">
        <img class="slogan__logo" :src="logoSrc" alt="">
        <h2 class="slogan__content text--white">Lorem ipsum dolor sit amet consectetur</br> adipisicing elit Lorem ipsum dolor sit amet. Cupiditate, error!</h2>
        </div>
        </section>   
    </main>
<footer>
  <div class="footer__body">
    <div class="footer__wrapper">
  <div class="footer__aside">
<ul>
  <li><img class="footer__logo" :src="logoSrc" alt=""></li>
  <li class="footer__body-item">Documentation</li>
  <li class="footer__body-item"> <i class="btn--icon fa fa-github" aria-hidden="true"></i> GitHub</li>
  <li class="footer__body-item"> <i class="btn--icon fa fa-twitter" aria-hidden="true"></i>Twitter</li>
  <li class="footer__body-item"> <i class="btn--icon fa fa-facebook" aria-hidden="true"></i>Facebook</li>
</ul>
  </div>
  <div class="footer__donate">
<ul>
  <li class="footer__body-item">Donate</li>
  <li class="footer__body-item">Patreon</li>
  <li class="footer__body-item">PayPal</li>
</ul>
</div>
</div>
<div class="footer__wrapper">
<div class="footer__sponsors">
<ul>
  <li class="footer__body-item">Sponsors</li>
  <li class="footer__body-item">XYZ</li>
  <li class="footer__body-item">XYZ</li>
  <li class="footer__body-item">XYZ</li>
</ul>
</div>
<div class="footer__links">
<ul>
  <li class="footer__body-item">Links</li>
  <li class="footer__body-item">Vue.js</li>
  <li class="footer__body-item">Material</li>
  <li class="footer__body-item">Design</li>
</ul>
</div>
</div>
</div>
  <div class="footer__bottom">
   <p class="text--white"> &copy; 2018 TamiatCMS under the MIT License</p>
  </div>
</footer>

  </div>
</template>




<script>
export default {
  name: "Homepage",
  data() {
    return {
      logo: "TiamatCMS",
      subheader: "Vuejs and Firebase based CMS",
      logoSrc: "https://vuetifyjs.com/static/doc-images/logo.svg",
      templates: "../../../static/img/templates.svg",
      layout: "../../../static/img/layouts.svg",
      material: "../../../static/img/material.svg",
      patreon: "../../static/img/patreon.png",
      paypal: "../../static/img/paypal.png",
      github: "../../../static/img/GitHub.png",
      placeholder: "../../../static/img/placeholder.svg",
      menu: false,
      mobileMenu: true
    };
  },
  created() {
    window.addEventListener("scroll", this.showHideMenu);
    window.addEventListener("resize", this.showDesktopMenu);
    window.matchMedia();
    if (window.matchMedia("(min-width: 445px)").matches) {
      this.mobileMenu = true;
    } else {
      this.mobileMenu = false;
    }
   
  },
  methods: {
    showHideMenu() {
      window.scrollY > 250 ? (this.menu = true) : (this.menu = false);
    },
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
    showDesktopMenu() {
      if (window.matchMedia("(min-width: 445px)").matches) {
      this.mobileMenu = true;
    } else {
      this.mobileMenu = false;
    }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");
/*
Table of contents
=====================
// 1. Variables
// 2. Placeholders
// 3. Functions
// 4. Font Faces
// 5. Base
// 6. Layout
// 7. Block + element
// 8. Modifier
// 9. State
// 10. Animations
// 11. Media Queries
=====================
*/

// 1. Variables
$main__color: #2196f3;

$active__color: #14ffe3;

$white: #ffffff;

$p__font: #959595;
$h2__font: #767676;
$h3__font: #666;

$main__footer: #37424b;
$aside__footer: #303c42;
$bottom__footer: #2c363a;
$font__footer: #cfd8dc;
// 2. Placeholders

%text--center {
  text-align: center;
}

%box--center {
  margin: 0 auto;
}

%flex {
  display: flex;
}

%pointer {
  cursor: pointer;
}

%transition {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

// 3. Functions

@function prc($el,
  $target) {
  @return (100% * $el) / $target;
}
// 4. Font Faces
// 5. Base
* {
  box-sizing: border-box;
}
#homepage {
  font: 400 62.5% "Roboto", sans-serif;
  overflow-x: hidden;
  background: #ffffff;
  width: 100%;
  min-height: 100vh;
  @extend %text--center;
}
h1 {
  font: 400 3rem/3.6rem "Roboto", sans-serif;
  color: $main__color;
  padding-top: 30px;
  margin: 0;
}
h2 {
  font: 300 1.8rem/2rem "Roboto", sans-serif;
  color: $h2__font;
  margin-top: 10px;
}
h3 {
  font: 500 1.2rem/1rem "Roboto", sans-serif;
  color: $h3__font;
}
h4 {
  font: 500 1.6rem "Roboto", sans-serif;
  color: $main__color;
}
p {
  font: normal 1rem/26px "Roboto", sans-serif;
  color: $p__font;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
}
// 6. Layout
header {
  @extend %flex;
  flex-flow: column wrap;
  align-items: center;
  padding-bottom: 30px;
}
.releases {
  background: $main__color;
  display: flex;
  padding: 0 2%;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font: 400 1.6rem "Roboto", "sans-serif";
  min-height: 90px;
}
nav {
  min-height: 50px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  background: $white;
  position: fixed;
  z-index: 1;
}
main {
  background: url("../../../static/img/body-background.svg") no-repeat top,
    url("../../../static/img/background-repeat.svg") repeat 100%;
  // url("../../../static/img/background-footer.svg") no-repeat bottom;
  background-size: 100% 100% 100%;
}
footer {
  @extend %flex;
  flex-direction: column;
  font: 400 1rem "Roboto", sans-serif;
  color: $font__footer;
}
// 7. Block + element
.homepage__logo {
  max-width: 100px;
  margin-top: 100px;
  filter: blur(2px);
}
.header__content {
  @extend %flex;
  flex-direction: column;
  min-width: 100px;
  max-width: 500px;
  width: 100%;
}
.nav__menu {
  display: flex;
  margin: 0 50px 0 auto;
  max-width: 300px;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 10px;
}
.nav__menu-item {
  display: block;
  font: 300 1.5rem "Roboto", sans-serif;
  display: block;
  padding: 5px 10px;
  margin-right: -40px;
  color: $h2__font;
}
.nav__menu-item:not(:last-child) {
  width: 100%;
  text-align: left;
  padding: 8px 3%;
  @extend %pointer;
}
.nav__menu-item:last-child {
  margin-left: auto;
  line-height: 50px;
  order: -1;
  @extend %pointer;
}
.features__list-item {
  margin: 30px 10px 60px 10px;
}
.features__list-img {
  margin-bottom: 10px;
}
.sponsors__logo {
  max-width: 500px;
  min-width: 100px;
  width: 100%;
}
.btn {
  border-radius: 3px;
  height: 36px;
  font: 700 0.9rem "Roboto", "sans-serif";
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
  vertical-align: middle;
  user-select: none;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 0 16px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.support__img {
  width: 125px;
  margin: 5px 10px;
}
.support__brands {
  @extend %flex;
  flex-direction: column;
  justify-content: center;
}
.slogan__content {
  font: 300 2rem/3rem "Roboto", sans-serif;
  text-align: left;
}
.slogan__logo {
  max-width: 100px;
  display: block;
  filter: blur(2px);
}
.footer__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  min-height: 300px;
}
.footer__logo {
  filter: blur(2px);
  max-width: 50px;
  height: auto;
  margin-bottom: 10px;
}
.footer__aside i {
  font-size: 1rem;
}
.footer__body {
  @extend %flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer__body-item {
  padding-bottom: 3px;
}
.footer__body-item:first-child {
  color: $white;
  font-weight: 500;
  padding-bottom: 10px;
}
.footer__aside {
  background: $aside__footer;
  flex: 1 1 100%;
  padding: 10px 4%;
}
.footer__donate {
  background: $main__footer;
  flex: 1 1 100%;
  padding: 10px 4%;
}
.footer__sponsors {
  background: $main__footer;
  flex: 1 1 100%;
  padding: 10px 4%;
}
.footer__links {
  background: $main__footer;
  flex: 1 1 100%;
  padding: 10px 4%;
}
.footer__bottom {
  background: $bottom__footer;
}
// 8. Modifier
.container {
  margin: 49px auto;
  width: 90%;
  background: $white;
  border-radius: 4px;
  padding: 40px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}
.trans--container {
  margin: 0 auto;
  width: 90%;
  border-radius: 4px;
  padding: 40px 40px 40px 40px;
}
.btn--group {
  @extend %flex;
  flex-direction: column;
  justify-content: space-between;
}
.btn--large {
  height: 44px;
  min-width: 88px;
  margin: 20px 2%;
  @extend %flex;
}
.btn--small {
  height: 44px;
  min-width: 100px;
  display: inline-block;
  line-height: 44px;
  margin: 10px 10px;
}
.btn--blue {
  background-color: $main__color;
  border-color: $main__color;
  color: #ffffff;
}
.btn--white {
  background-color: #fff;
  border-color: #fff;
  color: $main__color;
}
.text--white {
  color: $white;
}
// 9. State
// CORRECT LINKS //
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
  color: $font__footer;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
  color: lighten($active__color, 20%);
}
.btn--blue:hover {
  background: lighten($main__color, 10%);
}
.btn--white:hover {
  background: lighten($main__color, 40%);
}
.btn--icon {
  margin-right: 10px;
  font-size: 2rem;
}
.nav__menu-item:hover {
  background: #f2f2f2;
  @extend %transition;
}
// 10. Animations
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  @extend %transition;
}
// 11. Media Queries
@media screen and (min-width: 445px) {
  .footer__body {
    flex-wrap: nowrap;
  }
  .nav__menu {
    display: flex;
    flex-direction: row;
    margin: 0 70px 0 auto;
    max-width: 300px;
    padding: 0;
    justify-content: space-between;
  }
  .nav__menu-item:not(:last-child) {
    font: 300 1rem/70px "Roboto", sans-serif;
    padding: 5px 10px;
    width: auto;
    color: $h2__font;
    cursor: pointer;
  }
  .nav__menu-item:last-child {
    display: none;
  }
  .support__brands {
    flex-direction: row;
  }
  .footer__wrapper {
    min-height: 440px;
  }
}
@media screen and (min-width: 650px) {
  .footer__wrapper {
    flex-direction: row;
    min-height: 210px;
  }
}
@media screen and (min-width: 910px) {
  .header__content {
    text-align: left;
    max-width: 600px;
    min-width: 200px;
    width: 100%;
  }
}
@media screen and (min-width: 810px) {
  header {
    flex-flow: row wrap;
    height: 70vh;
    justify-content: center;
    align-items: flex-end;
  }
  .btn--group {
    flex-direction: row;
  }
  .btn--large {
    margin-left: 0;
    width: 100%;
  }
  .homepage__logo {
    max-width: 100%;
    height: 300px;
    margin-right: 20px;
    margin-top: -20px;
  }
}
@media screen and (min-width: 1000px) {
  .sponsors__list {
    display: flex;
  }
  .homepage__logo {
    max-width: 100%;
    height: 340px;
    margin-right: 50px;
    margin-top: -20px;
  }
}
@media screen and (min-width: 1100px) {
  .features__list {
    display: flex;
  }
}
</style>
