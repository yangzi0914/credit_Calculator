import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import champion from '../../assets/champion.png';

class Content extends React.Component {
  static defaultProps = {
    className: 'content3',
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
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
              key="text"
              animation={{ y: '-=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
              className={`${props.className}-text`}
              reverseDelay={300}
            >
              <div style={{height: `${isMode ? '60px' : '120px'}`}}></div>
              <img key="img" src={champion} />
              <h3 key="h3">世界冠军</h3>
              <p key="p1">庞清、佟健</p>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
