<template>
    <div>

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
          <h3>Doctors</h3>
          <router-link to="/">首页</router-link>
          <span>/</span>
          <a href="#">医生</a>
        </div>
      </section>
      <section class="doctors-details-area">
        <div class="container">
          <div id="doctor-slide" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#doctor-slide" data-slide-to="0" class="active">
                <img src="/static/image/aa1.jpg" alt="">
              </li>
              <li data-target="#doctor-slide" data-slide-to="1">
                <img src="/static/image/aa3.jpg" alt="">
              </li>
              <li data-target="#doctor-slide" data-slide-to="2">
                <img src="/static/image/bb.jpg" alt="">
              </li>
              <li data-target="#doctor-slide" data-slide-to="3">
                <img src="/static/image/aa2.jpg" alt="">
              </li>
              <li data-target="#doctor-slide" data-slide-to="4">
                <img src="/static/image/aa5.jpg" alt="">
              </li>
              <li data-target="#doctor-slide" data-slide-to="5">
                <img src="/static/image/aa4.jpg" alt="">
              </li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="doctors-img">
                      <img src="/static/image/aa1.jpg" style="width: 584px;height: 555px;" alt="" class="img-responsive">
                      <div class="social">
                        <ul>
                          <li><a href="#"><i class="fa fa-rss"></i></a></li>
                          <li><a href="#"><i class="fa fa-skype"></i></a></li>
                          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="social_googleplus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="slider-text">
                      <div class="section-header">
                        <h3>小豪牙科首席专家</h3>
                        <h2>姚月玲</h2>
                      </div>
                      <div class="content">
                        <h4>1930 - 至今</h4>
                        <h3>牙齿美容修复 -<span>Prident</span></h3>
                        <p>姚月玲自幼出生在江苏常熟市，17岁那一年她以全市第一名的好成绩考取了第四军医大学，那是第一批全国重点大学，这个高材生在那个年代轰动了整个县城。　　迈入大学校园的姚月玲对于自己的未来已经有了明确的方向，她立志要当一名牙科医生。希望通过自己的努力，提高大家的口腔保健意识。</p>
                      </div>
                      <div class="content">
                        <h4>1969 - 2003</h4>
                        <h3>刻苦钻研取得博士学位-<span>Carytos</span></h3>
                        <p>1969年，姚月玲开始从事口腔临床工作。她并非与生俱来就聪慧过人，她在时任医教部主任郭敬俊的劝说下，终于同意考博。就这样她白天上班，晚上通宵看书，她41岁考取了博士。她成为第四军医大学口腔医院第一位女博士。她说，我是一个农村长大的普通女孩，没有有钱有权的父母，我只有靠自己的努力、执着以及坚持，才取得了今天的成就与成绩。</p>
                      </div>
                      <div class="content">
                        <h4>2005 - 2019</h4>
                        <h3>育人无数桃李满天下 - <span>Prident</span></h3>
                        <p>同年，姚月玲还开始从事教学工作。她育人无数，如今的学生有的是医学院校领导、将军、博士生导师等等，有的作为出访学者足迹遍布台湾、香港、日本、美国，可谓桃李满天下，她的学生在各个专业领域都是卓有成就。　　姚月玲认为能够把掌握的知识传授于学生，能够让患者享受到更好的医疗资源，她这辈子无怨无悔。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="doctors-img">
                      <img src="/static/image/aa3.jpg"  style="width: 584px;height: 555px;" alt="" class="img-responsive">
                      <div class="social">
                        <ul>
                          <li><a href="#"><i class="fa fa-rss"></i></a></li>
                          <li><a href="#"><i class="fa fa-skype"></i></a></li>
                          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="social_googleplus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="slider-text">
                      <div class="section-header">
                        <h3>小豪牙科正畸医师</h3>
                        <h2>赵虎</h2>
                      </div>
                      <div class="content">
                        <h4>2009 - 至今</h4>
                        <h3>医生简介 - <span>Prident</span></h3>
                        <p>从事口腔正畸科临床工作20多年，曾先后赴第四军医大学、华西医科大学等参与口腔正畸学术研讨交流会，并多次与著名美容冠快速矫正专家、国内最具影响力的美牙专家进行学术交流，并在国内医学科技杂志发表各类学术论文10余篇。理论知识扎实，临床经验丰富。</p>
                      </div>
                      <div class="content">
                        <h4>2005 - 2019</h4>
                        <h3>擅长项目 - <span>Carytos</span></h3>
                        <p>各类复杂疑难错颌畸形的诊治，儿童和青少年早期骨性错颌畸形的矫治，成人及牙周病错颌畸形的矫治以及颜面部严重骨性畸形的正畸外科联合治疗等。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="doctors-img">
                      <img src="/static/image/bb.jpg"  style="width: 584px;height: 555px;" alt="" class="img-responsive">
                      <div class="social">
                        <ul>
                          <li><a href="#"><i class="fa fa-rss"></i></a></li>
                          <li><a href="#"><i class="fa fa-skype"></i></a></li>
                          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="social_googleplus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="slider-text">
                      <div class="section-header">
                        <h3>小豪牙科雁塔机构院长</h3>
                        <h2>李江</h2>
                      </div>
                      <div class="content">
                        <h4>2009 - 至今</h4>
                        <h3>医生简介 - <span>Prident</span></h3>
                        <p>中国人民解放军第四军医大学口腔临床医学(口腔修复学)博士。曾在第四军医大学口腔医院从事临床、教学、科研工作二十余年，参与多项国家重点科技项目研究，与北京清华大学合作完成多项临床应用研究。自主开展了口腔修复CAD/CAM技术的临床应用研究，并完成可切削玻璃陶瓷的计算机配色研究及相关软件的研发，在专业杂志发表论文十余篇。为人性格亲切、和蔼;在西安本地牙科行业内有较强知名度，行医常修从医之德，深得患者信赖。</p>
                      </div>
                      <div class="content">
                        <h4>2009 - 2019</h4>
                        <h3>擅长项目 - <span>Carytos</span></h3>
                        <p>　熟练掌握牙齿美容与微创修复临床操作技术和设计理念，精通全瓷修复及前牙美学修复等各种口腔修复疾病的诊断、方案设计及治疗；擅长单颗、多颗、半口、全口牙齿缺失的种植与修复治疗。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="doctors-img">
                      <img src="/static/image/aa2.jpg" style="width: 584px;height: 555px;" alt="" class="img-responsive">
                      <div class="social">
                        <ul>
                          <li><a href="#"><i class="fa fa-rss"></i></a></li>
                          <li><a href="#"><i class="fa fa-skype"></i></a></li>
                          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="social_googleplus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="slider-text">
                      <div class="section-header">
                        <h3>小豪牙科特约专家</h3>
                        <h2>赵和平</h2>
                      </div>
                      <div class="content">
                        <h4>2009 - 至今</h4>
                        <h3>医生简介 - <span>Prident</span></h3>
                        <p>　从事口腔临床医疗工作近40年。发表学术论文50余篇，获全军医疗成果奖两项，2013年1月被授予“太原市名特医学专家”荣誉称号。</p>
                      </div>
                      <div class="content">
                        <h4>2005 - 2019</h4>
                        <h3>中国种植牙先驱，开创激光无痛时代 - <span>Carytos</span></h3>
                        <p>上个世纪90年代，口腔医疗界迎来了“种植牙”热潮。赵和平埋头研究，掌握了国内外最先进的种植牙技术，并结合临床实践创新性的提出了“激光种植牙”概念，运用先进的激光技术，缓解种植过程中病患的痛苦，让牙齿种植更加不再“惧”痛!</p>
                      </div>
                      <div class="content">
                        <h4>2000 - 2005</h4>
                        <h3>奖项论文成果丰硕，引领种植牙新风尚 - <span>Prident</span></h3>
                        <p>赵和平三次获得全军医疗科技进步奖，多次获得全军医疗成果奖，并任北京军区口腔专业委员会常委。2000年凭借平阳霉素联合地塞米松治疗口腔颌面海绵状血管瘤获得全军医疗成果三等奖，2007年切口局部麻药灌注浸润法用于术后镇痛的临床研究又斩获全军医疗成果三等奖。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="doctors-img">
                      <img src="/static/image/aa5.jpg"  style="width: 584px;height: 555px;" alt="" class="img-responsive">
                      <div class="social">
                        <ul>
                          <li><a href="#"><i class="fa fa-rss"></i></a></li>
                          <li><a href="#"><i class="fa fa-skype"></i></a></li>
                          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="social_googleplus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="slider-text">
                      <div class="section-header">
                        <h3>小豪牙科正畸科医师</h3>
                        <h2>张媛</h2>
                      </div>
                      <div class="content">
                        <h4>2009 - 至今</h4>
                        <h3>医生简介 - <span>Prident</span></h3>
                        <p>　　从事牙齿正畸临床工作多年，曾多次到国内知名口腔医院进修。擅于沟通，技术精湛，深受患者好评，在儿童正畸、成人正畸等方面临床经验丰富。</p>
                      </div>
                      <div class="content">
                        <h4>2009 - 2019</h4>
                        <h3>擅长项目 - <span>Carytos</span></h3>
                        <p>儿童早期矫治，成人与儿童牙颌畸形矫治、各类错合畸形的综合治疗，修复前的正畸矫治、自锁低摩擦矫治技术及无托槽隐形矫治技术等。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="doctors-img">
                      <img src="/static/image/aa4.jpg"  style="width: 584px;height: 555px;" alt="" class="img-responsive">
                      <div class="social">
                        <ul>
                          <li><a href="#"><i class="fa fa-rss"></i></a></li>
                          <li><a href="#"><i class="fa fa-skype"></i></a></li>
                          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="social_googleplus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="slider-text">
                      <div class="section-header">
                        <h3>小豪牙科正畸医师</h3>
                        <h2>校华</h2>
                      </div>
                      <div class="content">
                        <h4>2009 - 至今</h4>
                        <h3>医生简介 - <span>Prident</span></h3>
                        <p>毕业于西安交通大学口腔学专业，后进修于第四军医大学，从事口腔正畸临床工作多年，积累了丰富的口腔诊疗经验。具有扎实的理论知识和丰富的临床经验。</p>
                      </div>
                      <div class="content">
                        <h4>2009 - 2019</h4>
                        <h3>擅长项目 - <span>Carytos</span></h3>
                        <p>　各类错牙合畸形的早期预防与矫治，儿童及青少年牙列不齐，成人复杂疑难病例的综合正畸治疗，牙颌面畸形的正畸治疗、矫形治疗，无托槽或舌侧隐形正畸治疗及自锁托槽低摩擦轻力矫治技术及隐形矫治技术。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
