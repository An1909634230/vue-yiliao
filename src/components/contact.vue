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
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                         aria-expanded="false">首页</a>
                      <ul class="dropdown-menu">
                        <li><router-link to="/">主页</router-link></li>
                      </ul>
                    </li>
                    <li><router-link to="about">关于我们</router-link></li>
                    <li class="dropdown submenu">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                         aria-expanded="false">服务</a>
                      <ul class="dropdown-menu">
                        <li><router-link to="service">服务详情</router-link></li>
                      </ul>
                    </li>
                    <li><router-link to="doctors">医生</router-link></li>
                    <li class="dropdown submenu">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                         aria-expanded="false">画廊</a>
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
          <h3>联系</h3>
          <router-link to="/">首页</router-link>
          <span>/</span>
          <router-link to="about" class="active">联系</router-link>

        </div>
      </section>
      <section class="contact-area">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="contact-info">
                <div class="section-header">
                  <h3>联系</h3>
                  <h2>给我们发信息</h2>
                </div>
                <div class="row m0 touch_top">
                  <ul class="nav">
                    <li class="item">
                      <div class="media">
                        <div class="media-left">
                          <a href="#">
                            <i class="lnr lnr-map-marker"></i>
                          </a>
                        </div>
                        <div class="media-body">
                          <h3><a href="#">地址</a></h3>
                          西安市南窑国际<br>
                        </div>
                      </div>
                    </li>
                    <li class="item">
                      <div class="media">
                        <div class="media-left">
                          <a href="#">
                            <i class="lnr lnr-phone-handset"></i>
                          </a>
                        </div>
                        <div class="media-body">
                          <h3><a href="#">电话</a></h3>
                          17762247670 <br>
                        </div>
                      </div>
                    </li>
                    <li class="item">
                      <div class="media">
                        <div class="media-left">
                          <a href="#">
                            <i class="icon_mail_alt"></i>
                          </a>
                        </div>
                        <div class="media-body">
                          <h3><a href="#">E-mail</a></h3>
                          1909634230@qq.com<br>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="best_contact_form">
                  <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <input type="text" placeholder="姓名">
                    </div>
                    <div class="col-sm-6">
                      <input type="text" placeholder="医生名字">
                    </div>
                    <div class="col-sm-6">
                      <input type="text" placeholder="电话">
                    </div>
                    <div class="col-sm-6">
                      <input type="email" placeholder="邮箱">
                    </div>
                    <div class="col-sm-6">
                      <input type="date" placeholder="日期">
                    </div>
                    <div class="col-sm-6 wow animated pulse" data-wow-delay="0.3s">
                      <a class="best_contact_btn" href="#">联系我们</a>
                    </div>
                  </div>
                  <textarea class="form-control" rows="3" placeholder="症状"></textarea>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="contact-img">
                <img class="img-responsive" src="/static/image/contact-bg-right-img.png" alt="">
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
