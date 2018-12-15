import React from 'react';
import { Menu } from 'antd';
import enquire from 'enquire.js';
import './css/service.css';

import Nav from './../common/Nav';
import Footer from './../common/Footer';
import Download from './../common/Download';

import wechatQR from '../../assets/service_wechatQR.png';
import AppQR from '../../assets/service_AppQR.png';
import serviceMoc1 from '../../assets/service_moc1.jpg';
import serviceMoc2 from '../../assets/service_moc2.jpg';
import serviceDoc from '../../assets/service_doc.jpg';
import serviceZX1 from '../../assets/serviceZX1.png';
import serviceZX2 from '../../assets/serviceZX2.jpg';
import serviceZX3 from '../../assets/serviceZX3.jpg';
import serviceZX4 from '../../assets/serviceZX4.jpg';

const SubMenu = Menu.SubMenu;
export default class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
      openKeys: [props.location.state ? props.location.state.type : 'sub1'],
      flag: true,
      selectedKeys: [`${props.location.state ? props.location.state.type : 'sub1'}-1`],
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
        selectedKeys: latestOpenKey ? [`${latestOpenKey}-1`] : [],
      });
    }
  }

  onSelect = (selectKey) => {
    this.setState({
      selectedKeys: selectKey.selectedKeys,
    });
  }

  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    return (
      <div className="templates-wrapper">
        <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode} selectedKeys="1" />
        <div className="serviceWidth">
          <div className="service_menu">
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              selectedKeys={this.state.selectedKeys}
              onOpenChange={this.onOpenChange}
              onSelect={this.onSelect}
              defaultOpenKeys={[this.props.location.state ? this.props.location.state.type : 'sub1']}
              defaultSelectedKeys={[`${this.props.location.state ? this.props.location.state.type : 'sub1'}-1`]}
            >
              <SubMenu key="sub1" title={<span><span>冰上培训</span></span>}>
                <Menu.Item key="sub1-1">专业培训</Menu.Item>
                <Menu.Item key="sub1-2">企业活动</Menu.Item>
                <Menu.Item key="sub1-3">公关活动</Menu.Item>
                <Menu.Item key="sub1-4">展览展示</Menu.Item>
                <Menu.Item key="sub1-5">拍摄</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><span>冰上表演</span></span>}>
                <Menu.Item key="sub2-1">Magic On Ice</Menu.Item>
                <Menu.Item key="sub2-2">Dream on ice</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><span>新媒体</span></span>}>
                <Menu.Item key="sub3-1">关于爱滑冰新媒体</Menu.Item>
                <Menu.Item key="sub3-2">新浪微博</Menu.Item>
                <Menu.Item key="sub3-3">微信平台</Menu.Item>
                <Menu.Item key="sub3-4">App</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><span>冰场规划咨询</span></span>}>
                <Menu.Item key="sub4-1">冰场建设/设计咨询</Menu.Item>
                <Menu.Item key="sub4-2">冰场管理/运营咨询</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub1-1' ? 'service_main_selected' : ''}`} >
            <h3 className="service_h3">PT 冰上中心</h3>
            <h4 className="service_h4">专业培训</h4>
            <p className="service_content">高端培训：庞清佟健冰上艺术中心旨在提供高端优质的花样滑冰课程培训，由国际顶级选手和前国家队选手亲情打造体系化教学。每位学员均将得到国家级高水平教练的指导，同时提供舞蹈课、礼仪课、体能课程等，满足学员各方面的需求，为学员提供最专业最高端的体系化培训服务。与总局合作培训行业专业人才；为行业发展培养人才，为未来冰雪发展夯实基础。</p>
            <p className="service_content">校园培训：为助力冰雪运动进校园，共筑冰雪强国梦，庞清佟健冰上艺术中心会定期走进校园开办冰雪知识讲堂。同时已为校园冰雪发展提供成套的教学体系，从多媒体教学到校内基础训练，从冰上体验到人员选拔，从校队建立到参赛比拼等。希望通过体教结合的方式，让更多孩子喜欢冰雪，爱上冰雪，希望能帮助更多的青少年实现属于他们的冰雪梦想。</p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub1-2' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">PT 冰上中心</h3>
            <h4 className="service_h4">企业活动</h4>
            <p className="service_content">庞清佟健冰上艺术中心，特有的冰场+空间+休闲+餐饮⼀应俱全，一站式服务能适用于多样的企业活动。无论是提高团队凝聚力的团建活动，还是需使用高端会场以先发制人的新品发布会活动，亦或是需要高级别专业配套服务的行业论坛活动，我们都能以最优质的服务全⽅位满⾜您的各式需求。</p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub1-3' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">PT 冰上中心</h3>
            <h4 className="service_h4">公关活动</h4>
            <p className="service_content">庞清佟健冰上艺术中心配套设施服务完备，适合媒体或企业进行公关活动。冰上艺术中心成熟的商业模式可提供多种商业合作方式，而爱滑冰®自有新媒体完善的运行机制也为公关活动保驾护航。</p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub1-4' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">PT 冰上中心</h3>
            <h4 className="service_h4">展览展示</h4>
            <p className="service_content">庞清佟健冰上艺术中心完善的配套设施加专业的管理服务，以简洁现代的装修风格为产品展示活动提供别具一格的活动场所。冰上艺术中心集高端、优雅、品质、专业为一身，是您开办展览活动的不二之选。</p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub1-5' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">PT 冰上中心</h3>
            <h4 className="service_h4">拍摄</h4>
            <p className="service_content">庞清佟健冰上艺术中心是亚洲单体面积最大的冰上艺术中心，陆地与冰上区域占地7000平方米，精致的装潢与专业的冰场为广告拍摄、影视拍摄等活动提供独特而优质的拍摄条件。专业的配套服务为您的拍摄过程提供全程最舒适最省心的环境。</p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub2-1' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">冰上演出</h3>
            <h4 className="service_h4">Magic On Ice</h4>
            <p className="service_content">“Magic On Ice”是庞清佟健冰上艺术中心的首个“On Ice”系列冰演。该项表演是一通过精湛冰上技术令人眼睛为之一亮的的高端商业演出</p>
            <p className="service_content service_center">
              <img alt="service_moc1" className="contentImg" src={serviceMoc1} key="img3" />
            </p>
            <p className="service_content service_center">
              <img alt="service_moc2" className="contentImg" src={serviceMoc2} key="img4" />
            </p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub2-2' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">冰上演出</h3>
            <h4 className="service_h4">Dream On Ice</h4>
            <p className="service_content">“Dream On Ice”是庞清佟健冰上艺术中心的第二个“On Ice”系列冰演，是一通过互动体验的冰上亲子剧场，让孩子们可以在冰场上完成梦想</p>
            <p className="service_content service_center">
              <img alt="service_doc" className="contentImg" src={serviceDoc} key="img5" />
            </p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub3-1' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">新媒体</h3>
            <h4 className="service_h4">关于爱滑冰新媒体</h4>
            <p className="service_content">专业的花样滑冰新媒体平台，主要发布爱滑冰®的活动资讯，同时提供花滑近期资讯，行业动态，赛事信息，人物介绍，项目科普等内容。用美妙的软文承载更多爱滑冰的心。</p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub3-2' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">新媒体</h3>
            <h4 className="service_h4">新浪微博</h4>
            <p className="service_content">爱滑冰®新浪微博专注于赛事资讯和爱滑冰®活动新闻等内容，为冰迷提供最丰富最及时的花样滑冰新动态，开放的平台为广大冰迷搭建了交流学习的空间。</p>
            <p className="service_content">爱滑冰官博链接：<a href="https://weibo.com/iskating?is_hot=1#place" target="_blank" rel="noopener noreferrer">https://weibo.com/iskating?is_hot=1#place</a></p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub3-3' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">新媒体</h3>
            <h4 className="service_h4">微信平台</h4>
            <p className="service_content">专业的花样滑冰新媒体平台，主要发布爱滑冰®的活动资讯，同时提供花滑近期资讯，行业动态，赛事信息，人物介绍，项目科普等内容。用美妙的软文承载更多爱滑冰的心。</p>
            <p className="service_content service_center">
              <img alt="service_wechatQR" className="serviceQR" src={wechatQR} key="img1" /><br /><span className="QR_name">爱滑冰官方微信</span>
            </p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub3-4' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">新媒体</h3>
            <h4 className="service_h4">App</h4>
            <p className="service_content">国内首个花样滑冰专业APP，提供资讯、教学、社交等多项服务，为广大冰雪运动爱好者开启体育文化相结合的健康生活方式。为庞清佟健冰上艺术中心的学员提供俱乐部信息渠道，同时也为大众提供花滑资讯、独家教学视频和约课约滑社交平台。</p>
            <p className="service_content service_center">
              <img alt="service_AppQR" className="serviceQR" src={AppQR} key="img2" /><br /><span className="QR_name">爱滑冰官方App</span>
            </p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub4-1' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">冰场规划咨询</h3>
            <h4 className="service_h4">冰场建设/设计咨询</h4>
            <p className="service_content">团队创始人拥有30余年行业辉煌成就，以及无与伦比的海外职业经历，甄选行业优质供应商，在空间规划、建筑结构、制冷、照明等领域，提供专业冰场建置与设计谘询，协助您打造专业冰场</p>
            <p className="service_content service_center">
              <img alt="service_ZX" className="contentImg" src={serviceZX1} key="img6" />
            </p>
            <p className="service_content service_center">
              <img alt="service_ZX" className="contentImg" src={serviceZX4} key="img9" />
            </p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub4-2' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">冰场规划咨询</h3>
            <h4 className="service_h4">冰场管理/运营咨询</h4>
            <p className="service_content">团队提供专业冰场运营、维护、教练团队谘询，协助您管理冰场或为您培训专业的冰场运营管理团队</p>
            <p className="service_content">咨询请洽 邮箱：business@iskating.cn</p>
            <p className="service_content service_center">
              <img alt="service_ZX" className="contentImg" src={serviceZX2} key="img7" />
            </p>
            <p className="service_content service_center">
              <img alt="service_ZX" className="contentImg" src={serviceZX3} key="img8" />
            </p>
          </div>
        </div>
        <div key="clearfix" className="clearfix" />
        <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode} />
        {this.state.isMode ? (<Download id="download_0_0" key="download_0_0" />) : undefined}
      </div>
    );
  }
}
