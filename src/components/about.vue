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
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">成功案例</a>
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
    <!--==========Banner area==========-->
    <section class="banner_area">
      <div class="banner_content">
        <h3>关于我们</h3>
        <router-link to="/">首页</router-link>
        <span>/</span>
        <router-link to="about" class="active">关于我们</router-link>
        </div>

    </section>

    <div class="content">
      <div class="container">
        <div class="col-top" id="about">
          <h3>小豪牙科 </h3>
          <p>选择牙科，小豪就够了
          </p>
        </div>
        <!---->
        <div class="tab-head">
          <nav class="col-md-6 nav-sidebar wow fadeInLeft animated" data-wow-delay=".5s">
            <ul class="nav tabs">
              <li class="active"><a href="#" data-toggle="tab"><span class="glyphicon glyphicon-home"
                                                                         aria-hidden="true"></span>公司资质</a></li>
              <li class=""><router-link to="gallery"  data-toggle="tab"><span class="glyphicon glyphicon-heart-empty"
                                                                                aria-hidden="true"></span>客户案例</router-link></li>
              <li class=""><router-link to="service"  data-toggle="tab"><span class="glyphicon glyphicon-heart-empty"
                                                                              aria-hidden="true"></span>医生技术</router-link></li>
            </ul>
          </nav>
          <div class="col-md-6 tab-content wow fadeInRight animated" data-wow-delay=".5s">
            <div class="tab-pane active text-style" id="tab1">
              <div class="facts">
                <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                <h4>公司</h4>
                <p> 公司具有独立法人，注册资金1000万元，是中国牙科优秀会员单位，信用AAA级，拥有数百万人的好评</p>

              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div class="portfolio" id="gallery">
      <div class="portfolio-top wow fadeInDown animated" data-wow-delay=".5s">

        <div class="col-md-4 grid slideanim">
          <figure class="effect-jazz">
            <a href="#" data-toggle="modal">

              <img src="/static/imagess/pi1.jpg" alt="img25" class="img-responsive"/>
              <figcaption>
                <h4>关于小豪牙科</h4>
                <p>西安雁塔小豪口腔门诊部是一家超五星级高端口腔诊疗机构,
                  于2013年闪耀落户于古城西安，坐拥悠远历史与发展经济时代。
                  先后聘请欧美、日韩数十位牙科博士、教授、
                  医生等顶尖人才进行牙科技术的创新研发与临床诊疗，
                  并引入标准的VIP贵宾服务模式，
                  为全国中高端牙病患者提供高品质的口腔医学服务。
                  自小豪牙科注入西安以来，始终作为一块净土为广大患者服务。
                </p>
              </figcaption>
            </a>
          </figure>
        </div>
        <div class="col-md-4 grid slideanim">
          <figure class="effect-jazz">
            <a href="#" data-toggle="modal">

              <img src="/static/image/timg.jpg" alt="img25" class="img-responsive"/>
              <figcaption>
                <h4>客户反馈</h4>
                <p>牙齿美容让小雅圆了梦
                  　 患者：小雅
                  　　症状：门牙前突且不齐
                  　　治疗方案：Trios智能牙美容
                  　　主治医生：姚月玲教授</p>
              </figcaption>
            </a>
          </figure>
        </div>
        <div class="col-md-4 grid slideanim">
          <figure class="effect-jazz">
            <a href="#" data-toggle="modal">

              <img src="/static/imagess/pi2.jpg" alt="img25" class="img-responsive"/>
              <figcaption>
                <h4>强大的设计团队</h4>
                <p>每个时代，都会诞生一位美学领袖，他通过言、行、动、
                  静来引导大家奔赴自信的殿堂，
                  小豪口腔之于中国牙科界，便是这样的灵魂所在。
                  小豪口腔始终坚持“为你而生，因爱而在”的精神理念，
                  融合古城悠久之历史，结合美丽与科技，
                  不断创新的医疗美容体系和高品质个性化服务，
                  引领前沿技术，受到社会各界的广泛赞誉与认可！</p>
              </figcaption>
            </a>
          </figure>
        </div>

        <div class="clearfix"></div>
      </div>
      <div class="portfolio-top wow fadeInUp animated" data-wow-delay=".5s">
        <div class="col-md-3 grid grid-wi slideanim">
          <figure class="effect-jazz">
            <a href="#" data-toggle="modal">

              <img src="/static/imagess/pi3.jpg" alt="img25" class="img-responsive"/>
              <figcaption>
                <h4 class="effcet-text"> 设计价格</h4>
                <p> 免费获取靠谱预算</p>
              </figcaption>
            </a>
          </figure>
        </div>
        <div class="col-md-3 grid grid-wi slideanim">
          <figure class="effect-jazz">
            <a href="#" data-toggle="modal">

              <img src="/static/imagess/11.jpg"  style="width: 700px; height: 310px;" alt="img25" class="img-responsive"/>
              <figcaption>
                <h4 class="effcet-text"> 医疗装备</h4>
                <p>使用全国顶尖设备</p>
              </figcaption>
            </a>
          </figure>
        </div>
        <div class="col-md-3 grid grid-wi slideanim">
          <figure class="effect-jazz">
            <a href="#" data-toggle="modal">

              <img src="/static/imagess/22.png"  style="width: 700px; height: 310px;" alt="img25" class="img-responsive"/>
              <figcaption>
                <h4 class="effcet-text">公益事业</h4>
                <p>
                  　10月21日，农历九月初九是我国传统的节日-重阳节，俗称“老人节”。
                  同时，今年10月，是我国第六个全国“敬老月”。
                  为进一步弘扬中华民族尊老、爱老、敬老的传统美德，树立爱老助老的风气，
                  小豪牙科于10月21日重阳节当天在王寺敬老院和育华社区同时
                  开展了重阳节关爱老人义诊活动。</p>
              </figcaption>
            </a>
          </figure>
        </div>
        <div class="col-md-3 grid grid-wi slideanim">
          <figure class="effect-jazz">
            <a href="#" data-toggle="modal">

              <img src="/static/imagess/33.png"  style="width: 700px; height: 310px;" alt="img25" class="img-responsive"/>
              <figcaption>
                <h4 class="effcet-text">本价格分析表</h4>
                <p> 本价格分析表以《治疗一颗牙齿可能会经历的过程》为例，并非每个流程都要收费。
                  西安小豪牙科以最严格的流程，为您提供最高性价比的诊疗服务。</p>
              </figcaption>
            </a>
          </figure>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!---->
    <div class="container">
      <div class="services" id="services">
        <h3>服务</h3>
        <div class="ser-grid ">
          <div class="col-md-4 ser-top wow fadeInLeft animated" data-wow-delay=".5s">
            <h5>我们要的是心意</h5>
            <p>能让客户省心，省力，又满意的公司可能就少之又少了</p>
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </div>
          <div class="col-md-4 ser-top wow fadeInUp animated" data-wow-delay=".5s">
            <h5>质量保障</h5>
            <p>公司始终坚持以优质服务质量服务于客户 </p>
            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
          </div>
          <div class="col-md-4 ser-top wow fadeInRight animated" data-wow-delay=".5s">
            <h5>顶尖的设计</h5>
            <p>公司凭借严格的管理、顶尖的设计、赢得好评</p>
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!---->
    <div class="event" id="events">
      <div class="container">

        <div class="top-event">
          <h3>公司理念</h3>
          <p>每个时代，都会诞生一位美学领袖，他通过言、行、动、
            静来引导大家奔赴自信的殿堂，
            小豪口腔之于中国牙科界，
            便是这样的灵魂所在。
            小豪口腔始终坚持“为你而生，因爱而在”的精神理念，
            融合古城悠久之历史，结合美丽与科技，
            不断创新的医疗美容体系和高品质个性化服务，
            引领前沿技术，受到社会各界的广泛赞誉与认可！</p>
        </div>
        <div class="event-grid ">
          <div class="event-left wow fadeInLeft animated" data-wow-delay=".5s">
            <a href="#"><img src="/static/imagess/44.jpg" style="height: 302px;width: 342px;" class="img-responsive" alt=""></a>
            <div class="event-top">
              <div class="event-gr">
                <h4><a href="#">创新精神</a></h4>
                <p> 公司注重传统与潮流的结合，勇于挑战，敢于创新，善于学习，以顶尖的创意、顶尖的制作、
                  顶尖的施工和顶尖的服务为使命，为您打造一流的商业空间环境。</p>
              </div>
            </div>
          </div>
          <div class="event-right wow fadeInRight animated" data-wow-delay=".5s">
            <a href="#"><img src="/static/imagess/pc1.jpg" class="img-responsive" alt=""></a>
            <div class="event-top event-top1">
              <div class="event-gr">
                <h4><a href="#">管理严格</a></h4>
                <p>　公司凭借严格的管理、先进的技术设备及精湛的施工工艺和完善的售后服务赢得了广大客户的一致好评。
                  在社会各界人士的大力支持下，我们将以更加骄人的业绩回报社会，服务大众！</p>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="event-grid">
          <div class="event-left event-left1 wow fadeInRight animated" data-wow-delay=".5s">
            <a href="#"><img src="/static/imagess/55.jpg"   style="height: 302px;width: 342px;"class="img-responsive" alt=""></a>
            <div class="clearfix"></div>
            <div class="event-top event-t">
              <div class="event-gr">
                <h4><a href="#">有很多成功案例</a></h4>
                <p>作为一个有责任心的医疗牙科机构，诺贝尔配备了专业的技术设备、正规的牙科材料以及医疗厂商的严格授权，从根源上确保美齿项目的每一步安全性，加之严格的术前身体检查，术中的的严控把关以及术后的跟踪服务，确保每一位患者的身心健康，以及做牙后的效果。</p>
              </div>
            </div>
          </div>
          <div class="event-right event-right1 wow fadeInLeft animated" data-wow-delay=".5s">
            <a href="#"><img src="/static/imagess/66.jpg"  style="height: 302px;width: 342px;" class="img-responsive" alt=""></a>
            <div class="clearfix"></div>
            <div class="event-top event-t1">
              <div class="event-gr">
                <h4><a href="#">检验室</a></h4>
                <p> 检验室诺贝尔牙科聘用的检验室工作人员全部都是持有有效证件的检验师证的，从业都是处以5年以上的专业人员，所用检验器械都是一次性的，不会出现感染事件发生。</p>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="event-grid ">
          <div class="event-left wow fadeInLeft animated" data-wow-delay=".5s">
            <a href="#"><img src="/static/imagess/77.jpg" style="height: 302px;width: 342px;" class="img-responsive" alt=""></a>
            <div class="event-top">
              <div class="event-gr">
                <h4><a href="#">手术室</a></h4>
                <p>小豪牙科采用德国千层流无菌手术室，应对空气洁净技术对微生物污染采取不同程度的控制，让空气洁净度满足手术要求，营造一个具有适宜温度、洁净的手术环境。</p>
              </div>
            </div>
          </div>
          <div class="event-right wow fadeInRight animated" data-wow-delay=".5s">
            <a href="#"><img src="/static/imagess/88.jpg"  style="height: 302px;width: 342px;" class="img-responsive" alt=""></a>
            <div class="event-top event-top1">
              <div class="event-gr">
                <h4><a href="#">咨询室</a></h4>
                <p>独立空间，患者与医生一对一的直面交流，避免了患者信息被偷听以及泄露，也可以让患者更好的了解自己的病情，而制定更加精准的治疗方案</p>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!---->
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
  export default {}
</script>

<style scoped>


</style>
