import React from 'react';
import enquire from 'enquire.js';
import './css/company.css';

import Nav from './../common/Nav';
import Footer from './../common/Footer';
import Download from './../common/Download';
// import serviceZX3 from '../../assets/serviceZX3.jpg';
import bmap from '../../assets/map.html';

export default class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

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
        <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode} selectedKeys="2" />
        <div className="company_banner" />
        <div className="width">
          <div className="company_main">
            <h2 className="company_title">公司简介</h2>
            <p className="service_content">
              {/* <img alt="companyImg" className="contentImg" src={serviceZX3} key="img1" /> */}
              <iframe src={bmap} frameBorder="0" width="100%" height="300px" />
            </p>
            <p className="company_content">翼翔冰雪® 由花样滑冰世界冠军佟健先生于 2015 年创办，经过近 3年的发展，依托庞清佟健冰上艺术中心为基地，现已形成了由体育 + 教育、体育 + 文化+娱乐和爱滑冰®新媒体构成的全面的冰雪运动优质内容服务平台。</p>
            <p className="company_content">佟健与庞清从事花样滑冰已30余年，上百场国际赛事和20余年海外职业运动经历使他们两位成为行业的旗帜。佟健与庞清配合多次曾获世锦赛冠军与奥运会奖牌， 2014年索契冬奥会成为运动员精神领袖，担当中国冰雪军团开幕式旗手，代表运动员向总书记汇报并赠送冬奥代表团服装。</p>
            <p className="company_content">庞清佟健冰上艺术中心目前拥有教练员均为前国家队队员，拥有全国最顶尖的教练员资源，并与国际组织合作聘请世界级顶尖选手担当技术总监，旨在打造中国顶级花样滑冰高端培训品牌，服务中国冰雪爱好者。</p>
            <p className="company_content">同时打造Magic On Ice演出团队，立志让中国新一代运动员在赛场下继续展现自己的价值，将花样滑冰与中国文化相结合，打造具有中国特色的冰上演出，让中国的花样演出从此自信，走出国门推广2022，宣扬中国文化。</p>
            <p className="company_content">此外，翼翔冰雪®在佟健先生的带领下用实际行动回馈大众，每月举办一次爱滑冰®公益课，现已成功举办36 场，而且积极响应国家号召推动冰雪进校园活动， 2016 年 11 月以独特的形式，携手清华附中打造国内首例大型校园冰上剧，用全新的推广方式在校园播下冰雪梦想，引领校园冰雪发展，把冰雪进校园推向新时代。</p>
            <p className="company_content short">联系电话：(010)65721860</p>
            <p className="company_content short">商务合作：business@iskating.cn</p>
            <p className="company_content short">投稿邮箱：iskating@foxmail.com</p>
            <p className="company_content">公司地址：北京市朝阳区平房村70号院</p>
          </div>
        </div>
        <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode} />
        {this.state.isMode ? (<Download id="download_0_0" key="download_0_0" />) : undefined}
      </div>
    );
  }
}
