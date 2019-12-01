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
                  <li class="dropdown submenu active">
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
    <!--幻灯片-->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner silder-top" role="listbox">
        <div class="item active">
          <img src="/static/image/slider1.jpg" style="width: 1920px;height: 600px;">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="/static/image/img19.jpg" style="width: 1920px;height: 600px;">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="/static/image/slider2.jpg" style="height: 600px;width: 1920px;">
          <div class="carousel-caption">
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--==========start about us area==========-->
    <section class="about-us-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <img class="img-responsive" src="/static/image/about-us1.jpg" alt="">
          </div>
          <div class="col-sm-6">
            <div class="about-us">
              <div class="section-header">
                <h3>关于我们</h3>
                <h2>你应该知道什么</h2>
                <p>一些牙病患者在牙痛的急性症状缓解后，不按时复诊（好了伤疤忘了疼），待又疼时再来就诊，往往延误了病情。有的医生给安排了预约时间不准时，来了就着急，给医生的工作造成了很多麻烦。
                  建议：牙齿是您身体的一部分，希望您能象对待眼睛一样的对待它们。一定按照医生给你预约的时间就诊，如果有事，也要事先给医生一个电话咨询是不是可以选择其它的时间，这样既是尊重别人也是方便自己。 </p>
              </div>
              <div class="about-timeline row m0">
                <ul>
                  <li class="wow fadeIn" data-wow-delay="0.3s">
                    <div class="icon">
                      <a href="#">
                        <img src="/static/image/about-us-icon1.png" alt="">
                        <h5>优质的服务</h5>
                      </a>
                    </div>
                  </li>
                  <li class="wow fadeIn" data-wow-delay="0.6s">
                    <div class="icon">
                      <a href="#">
                        <img src="/static/image/about-us-icon2.png" alt="">
                        <h5>750客户</h5>
                      </a>
                    </div>
                  </li>
                  <li class="wow fadeIn" data-wow-delay="0.8s">
                    <div class="icon">
                      <a href="#">
                        <img src="/static/image/about-us-icon3.png" alt="">
                        <h5>我们关心你</h5>
                      </a>
                    </div>
                  </li>
                  <li class="wow fadeIn" data-wow-delay="1.1s">
                    <div class="icon">
                      <a href="#">
                        <img src="/static/image/about-us-icon4.png" alt="">
                        <h5>25个奖励</h5>
                      </a>
                    </div>
                  </li>
                  <li class="wow fadeIn" data-wow-delay="1.6s">
                    <div class="icon">
                      <a href="#">
                        <img src="/static/image/about-us-icon5.png" alt="">
                        <h5>合格医生</h5>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--==========End about us area==========-->
    <!--==========Start appointment area==========-->
    <section class="appointment-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="appointment-content">
              <div class="text">
                <h3>我们 是</h3>
                <h2>乐意 效劳</h2>
                <h3 class="app-1">您的</h3>
              </div>
            </div>
          </div>
          <div class="col-sm-6 appointment-forms">
            <div class="appointment-form">
              <h3>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                特定</h3>
              <h2> &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;预约</h2>
              <form class="row">
                <div class="col-sm-6">
                  <input type="text" class="form-control" placeholder="您的姓名">
                </div>
                <div class="col-sm-6">
                  <input type="text" class="form-control" placeholder="您的邮箱">
                </div>
                <div class="col-sm-6">
                  <input type="tel" class="form-control" placeholder="您的电话">
                </div>
                <div class="col-sm-6">
                  <input type="text" class="form-control" placeholder="预约的医生">
                </div>
                <div class="col-sm-6">
                  <div class="input-group">
                    <input type="date" class="form-control datepicker" placeholder="日期">
                    <div class="input-group-addon">
                      <i class="fa fa-calendar-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <textarea name="message" class="form-control" cols="30" rows="10"
                            placeholder="填写您的症状"></textarea>
                </div>
                <div class="col-sm-12">
                  <div class="appointment-btn wow animated pulse" data-wow-delay="0.3s">
                    <a href="#"><i class="lnr lnr-calendar-full"></i>约个时间</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="service-icon-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="section-header">
              <h3>服务</h3>
              <h2>我们提供的服务</h2>
              <p>1、对患者进行严格、认真的检查、观察、诊疗和手术的治疗，如有需要的会给患者拍摄牙片（x光片）从而全方位了解患者的口腔环境。
                2、询问患者有关牙科医疗历史、生活习惯等与疾病有关的情况，保证治疗的质量。
                3、牙科医生在治疗过程中会告知患者作业流程，适当消除患者的紧张感，以利于治疗的进一步进行。
                4、按照要求严格控制治疗适应症。根据患者相关情况制定严密的治疗方案，遵循相关法则，认真负责。
                5、做好消毒防范，避免治疗时的交叉感染。严格监督消毒和卫生程序，进行医疗保健、口腔保健等宣传教育工作。
                6、保持相关医疗器皿的清洁，注意医疗器具的消毒和护理，保证医疗环境的卫生。
                7、进行相关医疗学术研究，对相关口腔疾病进行预防、开发新疗法 </p>
            </div>
          </div>
        </div>
        <div class="row service-items">
          <div class="col-lg-9 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-sm-4 col-xs-6 wow fadeOut" data-wow-delay="0.3s">
                <div class="service-icon">
                  <div class="icon">
                    <img src="/static/image/services-icon/4.png" alt="">
                  </div>
                  <h3>种植牙</h3>
                  <p>诺贝尔种植牙技术突破传统种植理念，采用先进的口腔CT及3D导板技术制定种植牙方案</p>
                  <a href="#" class="read-btn">Read more <i class="fa fa-angle-right"></i></a>
                </div>
              </div>
              <div class="col-sm-4 col-xs-6 wow fadeOut" data-wow-delay="0.6s">
                <div class="service-icon">
                  <div class="icon">
                    <img src="/static/image/services-icon/5.png" alt="">
                  </div>
                  <h3>牙齿矫正</h3>
                  <p>它是将矫治器全部安装于牙齿的舌侧面进行正畸治疗，外观上看不到任何正畸治疗装置的方案 </p>
                  <a href="#" class="read-btn">Read more <i class="fa fa-angle-right"></i></a>
                </div>
              </div>
              <div class="col-sm-4 col-xs-6 wow fadeOut" data-wow-delay="0.9s">
                <div class="service-icon">
                  <div class="icon">
                    <img src="/static/image/services-icon/2.png" alt="">
                  </div>
                  <h3>隐形矫正</h3>
                  <p>治疗方案包括一系列每两周更换一副的无托槽隐形矫治器,逐个生产以便逐步将牙齿矫正到理想位置。 </p>
                  <a href="#" class="read-btn">Re ad more <i class="fa fa-angle-right"></i></a>
                </div>
              </div>
              <div class="col-sm-4 col-xs-6 wow fadeOut" data-wow-delay="1s">
                <div class="service-icon">
                  <div class="icon">
                    <img src="/static/image/services-icon/4.png" alt="">
                  </div>
                  <h3>美容冠</h3>
                  <p>NobelTrios智能牙美容冠是口腔医生结合整形美容大师颜面部设计方案采用5S标准根据颜面部五官比例分析进行搭配</p>
                  <a href="#" class="read-btn">Read more <i class="fa fa-angle-right"></i></a>
                </div>
              </div>
              <div class="col-sm-4 col-xs-6 wow fadeOut" data-wow-delay="1.2s">
                <div class="service-icon">
                  <div class="icon">
                    <img src="/static/image/services-icon/5.png" alt="">
                  </div>
                  <h3>烤瓷牙</h3>
                  <p>烤瓷牙又称烤瓷冠或美容冠，诺贝尔烤瓷牙主要包括全瓷牙和金属烤瓷牙两种材料特点是能恢复牙体的形态功能</p>
                  <a href="#" class="read-btn">Read more <i class="fa fa-angle-right"></i></a>
                </div>
              </div>
              <div class="col-sm-4 col-xs-6 wow fadeOut" data-wow-delay="1.4s">
                <div class="service-icon">
                  <div class="icon">
                    <img src="/static/image/services-icon/2.png" alt="">
                  </div>
                  <h3>全瓷牙</h3>
                  <p>诺贝尔牙科将传统需要一周完成的繁琐过程精简为备牙、光学取模、设计、研磨、戴牙等五个步骤</p>
                  <a href="#" class="read-btn">Read more <i class="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
    </section>
    <!--==========Start video area==========-->
    <section class="video-area">
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane" id="content-1">
          <div class="row m0 section_header tab_inn_cont_1 ">
            <video class="video-js" controls preload="auto" poster="/static/image/video-poster1.jpg" data-setup="{}">
              <source src="/static/image/mov_aaa.mp4" type='video/mp4'>
            </video>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane active" id="content-2">
          <div class="row m0 section_header tab_inn_cont_1 ">
            <video class="video-js" controls preload="auto" poster="/static/image/video-poster.jpg" data-setup="{}">
              <source src="/static/image/mov_aac.mp4" type='video/mp4'>
            </video>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="content-3">
          <div class="row m0 section_header tab_inn_cont_1 ">
            <video class="video-js" controls preload="auto" poster="/static/image/video-poster1.jpg" data-setup="{}">
              <source src="/static/image/mov_abc.mp4" type='video/mp4'>
            </video>
          </div>
        </div>
      </div>
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation">
          <a href="#content-1" aria-controls="content-1" role="tab" data-toggle="tab" aria-expanded="true">
            See doctor advice
          </a>
        </li>
        <li role="presentation" class="active">
          <a href="#content-2" aria-controls="content-2" role="tab" data-toggle="tab" aria-expanded="false">
            Video title here
          </a>
        </li>
        <li role="presentation">
          <a href="#content-3" aria-controls="content-3" role="tab" data-toggle="tab">
            Take care of your teeth
          </a>
        </li>
      </ul>
    </section>

    <!--==========start team area==============-->
    <section class="team-area">
      <div class="container">
        <div class="section-header">
          <h3>医生</h3>
          <h2>牙科权威专家</h2>
          <p>为帮助更多的牙齿患者享受健康的生活，及进一步推动口腔技术的发展，诺贝尔牙科特邀四医大医生以及国内临床经验丰富的医生，旨在为更多的患者解决牙齿烦恼与困惑。同时，将会分享成功案例，为患者带来更多的新技术。</p>
        </div>
        <div class="team-slider">
          <div id="wrapper_bu">
            <div id="bu1">
              <img src="/static/image/aa1.jpg" style="height: 550px;width: 579px;" alt="">
              <div class="social-icon">
                <div class="text">
                  <h3>姚月玲</h3>
                  <p>第四军医大学口腔医学院修复科主任、博士生导师</p>
                </div>
                <ul class="icon">
                  <li><a href="#"><i class="fa fa-rss"></i></a></li>
                  <li><a href="#"><i class="fa fa-skype"></i></a></li>
                  <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="social_googleplus"></i></a></li>
                </ul>
              </div>
            </div>
            <div id="bu2">
              <img src="/static/image/aa2.jpg" style="height: 550px;width: 579px;" alt="">
              <div class="social-icon">
                <div class="text">
                  <h3>赵和平</h3>
                  <p>诺贝尔激光种植牙创始人
                    北京军区口腔专业委员会常委</p>
                </div>
                <ul class="icon">
                  <li><a href="#"><i class="fa fa-rss"></i></a></li>
                  <li><a href="#"><i class="fa fa-skype"></i></a></li>
                  <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="social_googleplus"></i></a></li>
                </ul>
              </div>
            </div>
            <div id="bu3">
              <img src="/static/image/aa3.jpg" style="height: 550px;width: 579px;" alt="">
              <div class="social-icon">
                <div class="text">
                  <h3>赵虎</h3>
                  <p>美国隐适美隐形矫治国际认证专家</p>
                </div>
                <ul class="icon">
                  <li><a href="#"><i class="fa fa-rss"></i></a></li>
                  <li><a href="#"><i class="fa fa-skype"></i></a></li>
                  <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="social_googleplus"></i></a></li>
                </ul>
              </div>
            </div>
            <div id="bu4">
              <img src="/static/image/aa4.jpg" style="height: 550px;width: 579px;" alt="">
              <div class="social-icon">
                <div class="text">
                  <h3>校华</h3>
                  <p>西安交通大学口腔学硕士</p>
                </div>
                <ul class="icon">
                  <li><a href="#"><i class="fa fa-rss"></i></a></li>
                  <li><a href="#"><i class="fa fa-skype"></i></a></li>
                  <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="social_googleplus"></i></a></li>
                </ul>
              </div>
            </div>
            <div id="bu5">
              <img src="/static/image/aa5.jpg" style="height: 550px;width: 579px;" alt="">
              <div class="social-icon">
                <div class="text">
                  <h3>张媛</h3>
                  <p>诺贝尔牙科正畸科医师
                    毕业于西安医学院</p>
                </div>
                <ul class="icon">
                  <li><a href="#"><i class="fa fa-rss"></i></a></li>
                  <li><a href="#"><i class="fa fa-skype"></i></a></li>
                  <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="social_googleplus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--==========End team area==============-->

    <!--======start gallery area=====-->
    <section class="gallery-area">
      <div class="container-fluid">
        <div class="gallery">
          <div class="gallery-item">
            <img src="/static/image/1.jpg" alt="">
            <div class="gallery-icon">
              <div class="overlay">
                <a href="#"><i class="fa fa-link"></i></a>
                <a href="/static/image/1.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
              </div>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/static/image/2.jpg" alt="">
            <div class="gallery-icon">
              <div class="overlay">
                <a href="#"><i class="fa fa-link"></i></a>
                <a href="/static/image/2.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
              </div>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/static/image/3.jpg" alt="">
            <div class="gallery-icon">
              <div class="overlay">
                <a href="#"><i class="fa fa-link"></i></a>
                <a href="/static/image/3.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
              </div>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/static/image/4.jpg" alt="">
            <div class="gallery-icon">
              <div class="overlay">
                <a href="#"><i class="fa fa-link"></i></a>
                <a href="/static/image/4.jpg" data-lightbox="example-set"><i class="fa fa-search"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--======End gallery area=====-->
    <!--公共底部-->
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
