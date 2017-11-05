import React from 'react';
// import PropTypes from 'prop-types';
// import { routerRedux } from 'dva/router';
// import { connect } from 'dva';
import { Pagination } from 'antd';
import { Link } from 'dva/router';
import styles from './css/information.css';
// import fetch from 'dva/fetch';

import Nav from './../common/Nav';
import Footer from './../common/Footer';
import infoList from './../common/inforData/inforData';
// import Download from './../common/Download';

// temp.news.content.replace(/<img[^>]+>/gi,'')
const PAGE_SIZE = 6;
const TOTAL = infoList.length;

export default class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      inforData: infoList.slice(0, 5),
    };
  }
  pageChangeHandler = (page) => {
    this.setState({
      current: page,
      inforData: infoList.slice((page - 1) * 6, ((page - 1) * 6) + 5),
    });
  };
  render() {
    // const inforData = infoList.splice(((this.state.current - 1) * 6) + 1, 6);
    const children = this.state.inforData.map((key, index) => {
      return (<li key={index}>
        <Link to={`/inforDetail/${index}`}>
          <div className={styles.news_img} style={{ backgroundImage: `url(${key.image})` }} />
          <div className={styles.news}>
            <h3>{key.news.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: key.news.content.replace(/<img[^>]+>/gi, '') }} />
          </div>
        </Link>
      </li>);
    });
    return (
      <div className={styles.normal}>
        <Nav id="nav_0_0" key="nav_0_0" />
        <div>我是资讯</div>
        <ul>
          {children}
        </ul>
        <Pagination
          current={this.state.current}
          pageSize={PAGE_SIZE}
          total={TOTAL}
          onChange={this.pageChangeHandler}
        />
        <Footer id="footer_0_0" key="footer_0_0" />
      </div>
    );
  }
}
