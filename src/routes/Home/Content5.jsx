import React from 'react';
import QueueAnim from 'rc-queue-anim';
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
          <QueueAnim
            className={`${props.className}-text`}
            type="top"
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <img key="img" src={champion} />
            <h3 key="h3">世界冠军</h3>
            <p key="p1">庞清、佟健</p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
