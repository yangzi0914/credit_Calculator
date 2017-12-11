import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
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
            animation={{ x: '-=30', opacity: 0, type: 'from' }}
            key="img"
            reverseDelay={300}
            className={`${props.className}-leftImg`}
          >
            <img src={artCenter1} />
          </TweenOne>
          <TweenOne
            animation={{ x: '+=30', opacity: 0, type: 'from' }}
            component="div"
            key="div"
            reverseDelay={300}
            className={`${props.className}-main`}
          >
            <h3><span>PANGQING TONGJIAN Skating&Art Center </span><br/>庞清佟健冰上艺术中心</h3>
            <p>庞清佟健冰上艺术中心旨在提供高端优质的花样滑冰课程培训，由国际顶级选手和国家队选手亲情打造体育加文化，冰上盛宴。每位学员均将得到国家级高水平教练的指导，同时提供陆地训练、舞蹈课程等，满足学员各方面的需求。</p>
            <p>展现行业DNA，为高端客群做好系统服务；与总局合作培训，专业教练人才；研发统一教材、视频教学、标准化规模化培训。</p>
            <p><a>了解更多</a></p>
            <img src={artCenter2} />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
