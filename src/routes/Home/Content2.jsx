import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import perform1 from '../../assets/perform1.png';
import perform2 from '../../assets/perform2.png';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <div key='div1' style={{height: `${isMode ? '60px' : '200px'}`}}></div>
        <OverPack
          className={`content-template ${props.className}`}
          id={`${props.id}-content1`}
        >
          <div key="div2" style={{height: `${isMode ? '222px' : '485px'}`, position: 'relative'}}>
            <TweenOne
                animation={{ x: '-=30', opacity: 0, type: 'from' }}
                component="img"
                key="img1"
                reverseDelay={300}
                src={perform1}
                className={`${props.className}-leftImg`}
              >
            </TweenOne>
            <TweenOne
                animation={{ x: '+=30', opacity: 0, type: 'from' }}
                component="img"
                key="img2"
                reverseDelay={300}
                src={perform2}
                className={`${props.className}-rightImg`}
              >
            </TweenOne>
          </div>
        </OverPack>
        <OverPack
          className={`content-template ${props.className}`}
          id={`${props.id}-content`}
        >
          {isMode ? undefined : (<div style={{height: '120px'}} key="div3"></div>)}
          <TweenOne
                animation={{ y: '-=30', opacity: 0, type: 'from' }}
                key="text"
                reverseDelay={300}
                className={`${props.className}-text`}
              >
              <h3 key="h3"><span>Magic on ice Show </span><br/>Magic on ice 表演团</h3>
              <p key="p1">由世界冠军佟健领衔，成员包括多位全国冠军等前国家队选手及教练，并且吸纳优秀学员及花样滑冰爱好者加入表演团，致力于打造体验式驻场演出、剧目形式演出、晚会形式演出。</p>
              <p key="p2">
                <span>•</span>体验式驻场演出：体验式的驻场，以娱乐体验为主；<br/>
                <span>•</span>剧目形式演出：市场需求驱动，进行商业巡回演出；<br/>
                <span>•</span>晚会形式演出：展示中国文化，宣传2022全球巡演。
              </p>
              <p key="p3"><a>了解更多</a></p>
            </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
