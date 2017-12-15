import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import newMedia_web from '../../assets/newMedia_web.png';
import newMedia_sina from '../../assets/newMedia_sina.png';
import newMedia_wechat from '../../assets/newMedia_wechat.png';
import newMedia_app from '../../assets/newMedia_app.png';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };
  constructor(props) {
    super(props);
    this.state = {
      typeIdx: 0
    };
  }

  render() {
    const props = { ...this.props };
    delete props.isMode;
    // const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const type = [newMedia_web, newMedia_sina, newMedia_wechat, newMedia_app];
    const children = ['爱滑冰网站', '爱滑冰官博', '爱滑冰 App', '爱滑冰微信公众号'].map((item, index) => {
      return (<li key={index}
      style={{opacity: `${this.state.typeIdx == index ? '.8' : '.6' }`}}
        onMouseOver={() => {
          this.setState({
            typeIdx: index,
          });
        }}
      >{item}</li>);
    })
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={{ y: '-=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            className={`${props.className}-text`}
            reverseDelay={300}
          >
            <h3 key="h3">新媒体线上平台</h3>
            <p key="p1">依托爱滑冰微信服务号及爱滑冰 app ，搭建最专业的花样滑冰项目新媒体平台，普及冰上运动相关资讯、知识与文化，为广大冰雪运动爱好者开启体育文化相结合的健康生活方式。</p>
            <p key="p2"><a>了解更多</a></p>
          </TweenOne>
          <div key="div">
            <TweenOne
              key="img1"
              animation={{ x: `-=${this.state.typeIdx + 30}`, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
              className={`${props.className}-img ${this.state.typeIdx == 0 ? 'one' : ''}`}
              updateReStart
              resetStyleBool
              reverseDelay={300}
            >
              <img src={type[this.state.typeIdx]} />
            </TweenOne>
            <TweenOne
              key="text2"
              animation={{ x: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
              className={`${props.className}-rightText`}
              id={`${props.id}-imgWrapper`}
              reverseDelay={300}
            >
              {children}
            </TweenOne>
          </div>
        </OverPack>
      </div>
    );
  }
}


export default Content;
