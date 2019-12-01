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
                      <li class="dropdown submenu active">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">服务</a>
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
          <h3>服务</h3>
          <router-link to="/">首页</router-link>
          <span>/</span>
          <router-link to="service" class="active">服务</router-link>
        </div>
      </section>
      <section class="services-info-area">
        <div class="container">
          <div class="row services-group">
            <div class="col-sm-6 wow animated fadeInLeft" data-wow-delay="0.3s">
              <div class="services-img">
                <div class="img">
                  <img class="img-responsive" src="/static/image/service/1.jpg" alt="">
                  <div class="overlay"></div>
                </div>
                <div class="r-icon">
                  <img src="/static/image/services-icon/4.png" alt="">
                </div>
              </div>
            </div>
            <div class="col-sm-6 services-content wow animated fadeInRight" data-wow-delay="0.6s">
              <h2>诺贝尔种植牙技术</h2>
              <p>诺贝尔种植牙技术突破传统种植理念，采用先进的口腔CT及3D导板技术制定种植牙方案，并结合微创无痛技术精准植入种植体，创口微小，是目前全球公认的、先进的牙齿种植技术。 </p>
              <router-link to="contact" class="read-btn">预约 <i class="fa fa-angle-right"></i></router-link>

            </div>
          </div>
          <div class="row services-group services1">
            <div class="col-sm-6 services-content wow animated fadeIn" data-wow-delay="0.9s">
              <h2>美容冠</h2>
              <p>.Nobel Trios智能牙美容冠通过高清数码光学取模，对“取模”这一繁琐工序进行了大幅“瘦身”。整个就诊过程，诊断、建模、设计、制作、试戴等多个环节，都可以在一间诊室、一张牙椅上一次,一次就诊，当天治疗，雕刻一颗美牙仅需30分钟。 </p>
              <router-link to="contact" class="read-btn">预约 <i class="fa fa-angle-right"></i></router-link>
            </div>
            <div class="col-sm-6 wow animated fadeIn" data-wow-delay="1s">
              <div class="services-img">
                <div class="img">
                  <img class="img-responsive" src="/static/image/service/2.jpg" alt="">
                  <div class="overlay"></div>
                </div>
                <div class="r-icon">
                  <img src="/static/image/services-icon/5.png" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="row services-group">
            <div class="col-sm-6 wow animated fadeInLeft" data-wow-delay="0.3s">
              <div class="services-img">
                <div class="img">
                  <img class="img-responsive" src="/static/image/service/3.jpg" alt="">
                  <div class="overlay"></div>
                </div>
                <div class="r-icon">
                  <img src="/static/image/services-icon/10.png" alt="">
                </div>
              </div>
            </div>
            <div class="col-sm-6 services-content wow animated fadeInRight" data-wow-delay="0.3s">
              <h2>牙齿矫正</h2>
              <p>了解详情 咨询费用
                摒弃传统牙箍，牙齿在悄然间改变
                治疗方案包括一系列每两周更换一副的无托槽隐形矫治器，每个矫治器均在精确计算后逐个生产以便逐步将牙齿矫正到理想位置。
                高满意度：全球尖端隐形矫正产品，满意度超过96%
                自行摘戴：随时取下矫治器以便正常进食和喝水
                完全隐形：采用纳米技术，透明光滑，舒适美观
                方便省时：复诊次数少，仅需4-6周复诊一次</p>
              <router-link to="contact" class="read-btn">预约 <i class="fa fa-angle-right"></i></router-link>
            </div>
          </div>
          <div class="row services-group services1">
            <div class="col-sm-6 services-content wow animated fadeInUp" data-wow-delay="0.3s">
              <h2>全瓷牙</h2>
              <p>lava 全瓷 CAD/CAM研究应用

                lava 在欧美成熟修复技术的基础上，采用新兴口腔修复工艺CAD/CAM系统，根据个人牙齿结构，精确设计，取得固位力并提高美感，成型后的修复体边缘、邻接、形态、咬合、颜色均达到最佳。

                lava 全瓷 诺贝尔牙科自主开展

                诺贝尔牙科将传统需要一周完成的繁琐过程精简为备牙、光学取模、设计、研磨、戴牙等五个步骤，将原本由人工操作的核心工作改为电脑设计和执行，具有自动、高效、稳定的特点，仅需2天，一次性完成全瓷修复体制作过程。</p>
              <router-link to="contact" class="read-btn">预约 <i class="fa fa-angle-right"></i></router-link>
            </div>
            <div class="col-sm-6">
              <div class="services-img wow animated fadeInUp" data-wow-delay="0.3s">
                <div class="img">
                  <img class="img-responsive" src="/static/image/service/4.jpg" alt="">
                  <div class="overlay"></div>
                </div>
                <div class="r-icon">
                  <img src="/static/image/services-icon/1.png" alt="">
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
