<template lang="">
  <div>
    <footer
      class="section footer-classic context-dark bg-image"
      style="background: #0a2b1294;"
    >
      <div class="container">
        <div class="row row-30">
          <div class="col-md-4 col-xl-5">
            <div class="pr-xl-4 mt-2">
              <a class="brand" href="#"
                ><img
                  class="brand-logo-light"
                  src="https://s.gravatar.com/avatar/057640eed356995cca728684158b3ccd?s=140"
                  alt=""
                  width="140"
                  height="140"
              /></a>
              <p>
                AniGroup - Newbie
              </p>
              <!-- Rights-->
              <p class="rights">
                <span>© </span><span class="copyright-year">2021</span
                ><span> </span><span>Ani</span><span>. </span
                ><span>Take me energy</span>
              </p>
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <h5>Contacts</h5>
            <dl class="contact-list">
              <dt>Address:</dt>
              <dd>Thai Binh, Viet Nam</dd>
            </dl>
            <dl class="contact-list">
              <dt>Email:</dt>
              <dd><a href="mailto:#">aniibibi1999@gmail.com</a></dd>
            </dl>
            <dl class="contact-list">
              <dt>Phone:</dt>
              <dd>
                <a href="tel:#">000-000-000</a> <span>or </span>
                <a href="tel:#">000x000x000</a>
              </dd>
            </dl>
          </div>
          <div class="col-md-4 col-xl-3 mt-2">
            <h5>Links</h5>
            <ul class="nav-list">
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row no-gutters social-container">
        <div class="col">
          <a class="social-inner" href="https://www.facebook.com/anivia.1999"
            ><span class="icon mdi mdi-facebook"></span><span>Facebook</span></a
          >
        </div>
        <div class="col">
          <a class="social-inner" href="https://github.com/Phamconghai1999"
            ><span class="icon mdi mdi-instagram"></span><span>Github</span></a
          >
        </div>
        <div class="col">
          <a class="social-inner" href="#"
            ><span class="icon mdi mdi-twitter"></span><span>Twitter</span></a
          >
        </div>
        <div class="col">
          <a class="social-inner" href="#"
            ><span class="icon mdi mdi-youtube-play"></span
            ><span>Google+</span></a
          >
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="css">
.context-dark,
.bg-gray-dark,
.bg-primary {
  color: rgba(255, 255, 255, 0.8);
}

.footer-classic a,
.footer-classic a:focus,
.footer-classic a:active {
  color: #ffffff;
}
.nav-list li {
  padding-top: 5px;
  padding-bottom: 5px;
}

.nav-list li a:hover:before {
  margin-left: 0;
  opacity: 1;
  visibility: visible;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 23px;
  font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}
.social-container .col {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.nav-list li a:before {
  content: "\f14f";
  font: 400 21px/1 "Material Design Icons";
  color: #4d6de6;
  display: inline-block;
  vertical-align: baseline;
  margin-left: -28px;
  margin-right: 7px;
  opacity: 0;
  visibility: hidden;
  transition: 0.22s ease;
}
</style>
