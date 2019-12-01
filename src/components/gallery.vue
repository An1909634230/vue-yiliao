<template>
    <div>

      <!--==========Start header area==========-->
      <header class="header">
        <div class="header-top">
          <div class="container">
            <div class="top-bar">
              <div class="row">
                <div class="col-sm-8">
                  <ul class="top-contact">
                    <li><a href="#"><i class="lnr lnr-map-marker"></i>西安市南窑国际</a></li>
                    <li><a href="#"><i class="lnr lnr-phone-handset"></i>17762247670</a></li>
                    <li><a href="#"><i class="icon_mail_alt"></i>1909634230@qq.com</a></li>
                  </ul>
                </div>
                <div class="col-sm-4">
                  <div class="appointment-btn">
                    <router-link to="contact"><i class="lnr lnr-calendar-full"></i>约个时间</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-bottom">
          <div class="container">
            <div class="navbar">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <router-link to="/" class="navbar-brand"><img src="/static/img/azh.png"
                                                              style="width: 172px;height: 130px;margin-top: -15px;"
                                                              alt=""></router-link>
              </div> <!-- /navbar-header -->
              <div class="navbar-collapse collapse navbar-right">
                <nav id="navigation" class="navbar-nav menu">
                  <ul class="nav">
                    <li class="dropdown submenu">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">首页</a>
                      <ul class="dropdown-menu">
                        <li><router-link to="/">主页</router-link></li>
                      </ul>
                    </li>
                    <li class="active"><router-link to="about">关于我们</router-link></li>
                    <li class="dropdown submenu">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                         aria-expanded="false">服务</a>
                      <ul class="dropdown-menu">
                        <li><router-link to="service">服务详情</router-link></li>
                      </ul>
                    </li>
                    <li><router-link to="doctors">医生</router-link></li>
                    <li class="dropdown submenu">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">成功案例</a>
                      <ul class="dropdown-menu">
                        <li><router-link to="gallery">画廊</router-link></li>
                      </ul>
                    </li>
                    <li><router-link to="contact">联系</router-link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="banner_area">
        <div class="banner_content">
          <h3>画廊</h3>
          <router-link to="/">首页</router-link>
          <span>/</span>
          <a class="active" href="#">画廊</a>
        </div>
      </section>

      <section class="gallery-area colums-3">
        <div class="container">
          <h2 class="gallery-title">
            成功案例
          </h2>
          <div class="row">
            <div class="col-sm-4 col-xs-6">
              <div class="gallery-item g-item">
                <img src="/static/image/gallery/1.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/1.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-6">
              <div class="gallery-item g-item">
                <img src="/static/image/gallery/2.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/2.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-6">
              <div class="gallery-item g-item">
                <img src="/static/image/gallery/3.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/3.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-6">
              <div class="gallery-item g-item">
                <img src="/static/image/gallery/4.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/4.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-6">
              <div class="gallery-item g-item">
                <img src="/static/image/gallery/5.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/5.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-6">
              <div class="gallery-item g-item">
                <img src="/static/image/gallery/6.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/6.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="gallery-area colums-3 colums-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-3 col-xs-6">
              <div class="gallery-item">
                <img src="/static/image/gallery/7.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/7.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="gallery-item">
                <img src="/static/image/gallery/8.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/8.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="gallery-item">
                <img src="/static/image/gallery/9.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/9.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="gallery-item">
                <img src="/static/image/gallery/10.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/10.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="gallery-item">
                <img src="/static/image/gallery/11.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/11.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="gallery-item">
                <img src="/static/image/gallery/12.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/12.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="gallery-item">
                <img src="/static/image/gallery/13.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/13.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="gallery-item">
                <img src="/static/image/gallery/14.jpg" alt="">
                <div class="gallery-icon">
                  <div class="overlay">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <a href="/static/image/gallery/14.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="footer">
        <div class="footerinner">
          <ul class="share">
            <li>
              <img class="weibo_icon" src="/static/img/share1.png" alt="">
            </li>
            <li>
              <img class="qq_icon" src="/static/img/share2.png" alt="">
            </li>
            <li>
              <img class="twitter_icon" src="/static/img/share3.png" alt="">
            </li>
            <li>
              <img class="wechat_icon" src="/static/img/share4.png" alt="">
            </li>
          </ul>
          <div class="footerinfo">
            <div class="footerinfoTop">
              <p>Telephone&Fax:&nbsp;+86(10)&nbsp;24336821&nbsp;;&nbsp;+86(22)&nbsp;24336822  </p>
              <p>Email：&nbsp;1909634230@qq.com</p>
              <p>西安市南窑国际C座401</p>
              <p>西安市丈八北路，科技四路南窑国际</p>
            </div>
            <div class="footerinfoBottom">
              <p>小豪牙科有限公司</p>
              <p class="min">XH&nbsp;Investment&nbsp;Company&nbsp;Limited</p>
              <p>小豪咨询有限公司</p>
              <p class="min">XH&nbsp;Enterprise&nbsp;Management&nbsp;Consulting&nbsp;Co.,&nbsp;Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
