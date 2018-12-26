import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Link } from 'dva/router';
import artCenter1 from '../../assets/artCenter1.png';
import artCenter2 from '../../assets/artCenter2.png';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content7',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <div key='div1' style={{height: `${isMode ? '60px' : '240px'}`}}></div>
          <TweenOne
            animation={{ x: '+=30', opacity: 0, type: 'from' }}
            key="img"
            reverseDelay={300}
            className={`${props.className}-leftImg`}
          >
            <img src={artCenter1} key="img1"/>
          </TweenOne>
          {isMode ? (<TweenOne
            animation={{ x: '-=30', opacity: 0, type: 'from' }}
            key="img3"
            reverseDelay={300}
            className={`${props.className}-rightImg`}
          >
            <img src={artCenter2} key="img2"/>
          </TweenOne>) : undefined}
          <TweenOne
            animation={{ x: '+=30', opacity: 0, type: 'from' }}
            component="div"
            key="div"
            reverseDelay={300}
            className={`${props.className}-main`}
          >
            <h3 key="h3"><span>PANGQING TONGJIAN Skating&Art Center </span><br/>庞清佟健冰上艺术中心</h3>
            <p key="p1">庞清佟健冰上艺术中心旨在提供高端优质的花样滑冰课程培训，由国际顶级选手和前国家队选手倾情打造体育加文化的冰上盛宴。每位学员均将得到国家级高水平教练的指导，同时提供陆地训练、舞蹈培训、体制测评等服务，满足学员的各方面需求。</p>
            <p key="p2">展现行业DNA，为高端客群做好系统服务；与总局合作培训专业教练人才；研发统一教材、教学视频，建立标准化规模化培训模式。</p>
            <p key="p3"><Link to={{ pathname: '/service', state: {type: 'sub1'} }}>了解更多</Link></p>
            {isMode ? undefined : (<img key="img2" src={artCenter2} />)}
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
