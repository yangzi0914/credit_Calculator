import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import weChat from '../../assets/weChat.png';
import app from '../../assets/app.png';
import sina from '../../assets/sina.png';
import weChat_QR from '../../assets/weChat_QR.png';
import app_QR from '../../assets/app_QR.png';
import logo_footer from '../../assets/logo_footer.png';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;

    return (<div
      {...props}
      className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
    >
      <OverPack
        playScale={0.05}
        className={`content-template ${props.className}`}
      >
        <QueueAnim
          className={`${props.className}-content`}
          key="footer-left"
          ease={['easeOutCubic', 'easeInCubic']}
          id={`${props.id}-left`}
        >
          <h5 className="footer_h5">联系我们</h5>
          <div className="footer_div">
            <ul key="img" id={`${props.id}-img`} className="footer-ul">
              <li>
                <img src={weChat} />
                <img src={weChat_QR} style={{ left: '-47px' }} />
              </li>
              <li>
                <img src={app} />
                <img src={app_QR} />
              </li>
              <li>
                <a href="http://weibo.com/p/1006065665302995/home?from=page_100606&mod=TAB#place" target="_blank"><img src={sina} /></a>
              </li>
            </ul>
            <p key="p1" id={`${props.id}-content1`}>电话(010)65721860</p>
            <p key="p2" id={`${props.id}-content2`}>传真(010)65415821</p>
            <p key="p3" id={`${props.id}-content3`}>business@iskating.cn</p>
            <p key="p4" id={`${props.id}-content4`}>北京市朝阳区平房村70号院</p>
          </div>
          <p className="footer_p">© 爱滑冰</p>
        </QueueAnim>
        <QueueAnim
          className={`${props.className}-content`}
          key="footer-center"
          ease={['easeOutCubic', 'easeInCubic']}
          id={`${props.id}-center`}
        >
          <h5 className="footer_h5">艺术培训</h5>
          <div className="footer_div">
            <img src={logo_footer} style={{ width: '94px', verticalAlign: 'middle' }} />
          </div>
          <p className="footer_p">© 庞清佟健冰上艺术中心</p>
        </QueueAnim>
        <QueueAnim
          className={`${props.className}-content`}
          key="footer-right"
          ease={['easeOutCubic', 'easeInCubic']}
          id={`${props.id}-right`}
        >
          <h5 className="footer_h5">文化演出</h5>
          <div className="footer_div" style={{ opacity: '0.8', fontFamily: 'SourceHanSerifSC-Bold', padding: '30px 0' }}>
            <p className="last_p">Magic on ice</p>
            <p className="last_p">Dream on ice</p>
          </div>
          <p className="footer_p">© Magic on ice 表演团</p>
        </QueueAnim>
        <div key="clearfix" className="clearfix" />
        <TweenOne
          animation={{ y: '-=30', opacity: 0, type: 'from' }}
          component="p"
          key="text"
          reverseDelay={300}
          className={`${props.className}-text`}
        >
          北京翼翔冰雪
        </TweenOne>
      </OverPack>
    </div>
    );
  }
}

export default Footer;
