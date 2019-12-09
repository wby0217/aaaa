import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer'
import './common.less';
import NavRight from './components/NavRight';
export default class Admin extends React.Component {
  render() {
    return (
      <div className="app">
        {/* <Header /> */}
        <div className="app-content">
          {this.props.children}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
