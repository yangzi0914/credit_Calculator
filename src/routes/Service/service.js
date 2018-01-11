import React from 'react';
import { Menu } from 'antd';
import enquire from 'enquire.js';
import './css/service.css';

import Nav from './../common/Nav';
import Footer from './../common/Footer';
import Download from './../common/Download';

import wechatQR from '../../assets/service_wechatQR.png';
import AppQR from '../../assets/service_AppQR.png';

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

  rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

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
      <div>
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
              <SubMenu key="sub1" title={<span><span>冰上中心</span></span>}>
                <Menu.Item key="sub1-1">专业培训</Menu.Item>
                <Menu.Item key="sub1-2">企业活动</Menu.Item>
                <Menu.Item key="sub1-3">公关活动</Menu.Item>
                <Menu.Item key="sub1-4">展览展示</Menu.Item>
                <Menu.Item key="sub1-5">拍摄</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><span>Magic On Ice</span></span>} />
              <SubMenu key="sub3" title={<span><span>新媒体</span></span>}>
                <Menu.Item key="sub3-1">新浪微博</Menu.Item>
                <Menu.Item key="sub3-2">微信平台</Menu.Item>
                <Menu.Item key="sub3-3">App</Menu.Item>
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
            <h3 className="service_h3">Magic On Ice</h3>
            <p className="service_content">Magic On Ice是由世界冠军庞清佟健领衔主演，前国家队队员参演的首个“On Ice”系列冰演。在选派强大阵容的同时还吸纳优秀学员及花样滑冰爱好者加入表演团，致力于打造体验式驻场演出、晚会形式演出、剧目形式演出，为大众提供零距离接触花样滑冰的平台，通过精彩纷呈的节目和丰富有趣的活动让大众感受到花滑之美与花滑之魅力。</p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub3-1' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">新媒体</h3>
            <h4 className="service_h4">新浪微博</h4>
            <p className="service_content">爱滑冰®新浪微博专注于赛事资讯和爱滑冰®活动新闻等内容，为冰迷提供最丰富最及时的花样滑冰新动态，开放的平台为广大冰迷搭建了交流学习的空间。</p>
            <p className="service_content">爱滑冰官博链接：<a href="https://weibo.com/iskating?is_hot=1#place" target="_blank" rel="noopener noreferrer">https://weibo.com/iskating?is_hot=1#place</a></p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub3-2' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">新媒体</h3>
            <h4 className="service_h4">微信平台</h4>
            <p className="service_content">专业的花样滑冰新媒体平台，主要发布爱滑冰®的活动资讯，同时提供花滑近期资讯，行业动态，赛事信息，人物介绍，项目科普等内容。用美妙的软文承载更多爱滑冰的心。</p>
            <p className="service_content service_center">
              <img alt="service_wechatQR" className="serviceQR" src={wechatQR} key="img1" /><br /><span className="QR_name">爱滑冰官方微信</span>
            </p>
          </div>
          <div className={`service_main ${this.state.selectedKeys[0] === 'sub3-3' ? 'service_main_selected' : ''}`}>
            <h3 className="service_h3">新媒体</h3>
            <h4 className="service_h4">App</h4>
            <p className="service_content">国内首个花样滑冰专业APP，提供资讯、教学、社交等多项服务，为广大冰雪运动爱好者开启体育文化相结合的健康生活方式。为庞清佟健冰上艺术中心的学员提供俱乐部信息渠道，同时也为大众提供花滑资讯、独家教学视频和约课约滑社交平台。</p>
            <p className="service_content service_center">
              <img alt="service_AppQR" className="serviceQR" src={AppQR} key="img2" /><br /><span className="QR_name">爱滑冰官方App</span>
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
