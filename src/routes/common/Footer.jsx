import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import weChat from '../../assets/weChat.png';
import app from '../../assets/app.png';
import sina from '../../assets/sina.png';
import weChatQR from '../../assets/weChat_QR.png';
import appQR from '../../assets/app_QR.png';
import logoFooter1 from '../../assets/logo_footer1.png';
import logoFooter2 from '../../assets/logo_footer2.png';
import logoFooter3 from '../../assets/logo_footer3.png';
import dreamonice from '../../assets/Dreamonice.png';
import addFooter from '../../assets/add_footer.png';
import telFooter from '../../assets/tel_footer.png';

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
          <h5 className="footer_h5">冰场运营</h5>
          <div className="footer_div">
            <img src={logoFooter1} style={{ width: '60px' }} />
          </div>
            
            {/* <p key="p1" id={`${props.id}-content1`}>电话(010)65721860</p>
            <p key="p2" id={`${props.id}-content2`}>传真(010)65415821</p>
            <p key="p3" id={`${props.id}-content3`}>business@iskating.cn</p>
            <p key="p4" id={`${props.id}-content4`}>北京市朝阳区平房村70号院</p> */}
          <p className="footer_p">© 翼翔冰雪</p>
        </QueueAnim>
        <QueueAnim
          className={`${props.className}-content`}
          key="footer-center"
          ease={['easeOutCubic', 'easeInCubic']}
          id={`${props.id}-center`}
        >
          <h5 className="footer_h5">艺术培训</h5>
          <div className="footer_div">
            <img src={logoFooter2} style={{ width: '54px' }} />
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
          <div className="footer_div">
            <img src={dreamonice} style={{ width: '98px' }} />
          </div>
          <p className="footer_p">© Magic on ice 表演团</p>
        </QueueAnim>
        <QueueAnim
          className={`${props.className}-content`}
          key="footer-last"
          ease={['easeOutCubic', 'easeInCubic']}
          id={`${props.id}-last`}
        >
          <h5 className="footer_h5">数字媒体</h5>
          <div className="footer_div">
            <img src={logoFooter3} style={{ width: '110px' }} />
          </div>
          <p className="footer_p">© 爱滑冰</p>
        </QueueAnim>
        <div key="clearfix" className="clearfix" />
        <div className="line">
          <ul key="img" id={`${props.id}-img`} className="footer-ul">
            <li>
              <img src={weChat} />
              <img src={weChatQR} style={{ left: '-47px' }} />
            </li>
            <li>
              <img src={app} />
              <img src={appQR} />
            </li>
            <li>
              <a href="http://weibo.com/p/1006065665302995/home?from=page_100606&mod=TAB#place" target="_blank"><img src={sina} /></a>
            </li>
          </ul>
          <p className="iconFooter"><img src={telFooter} />010-65721860 18610660088</p>
          <p className="iconFooter"><img src={addFooter} />北京市朝阳区平房村70号院</p>
        </div>
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
