import React from 'react';
import { Carousel } from 'antd';
import { Tabs, WhiteSpace, Badge, SwipeAction, List, PullToRefresh } from 'antd-mobile';
import { StickyContainer } from 'react-sticky';
import './index.less';
import 'antd-mobile/dist/antd-mobile.css';
import CardList from '../../components/CardList'
import { request } from 'https';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight - 83.5,
      data: [],
      index: 0
    };
  }

  smallBtn = (i) => {
    console.log(this.scrollDom)
    this.setState({index: i});
  }

  onScroll = () => {
    let scrollTop = document.getElementById('content').scrollTop;
    if (scrollTop > 10) {
      this.setState({down: false})
    } else {
      this.setState({down: true})
    }
  }

  onTabClick = (e) => {
    console.log('点击tab', e);
  }
  
  onRefresh = () => {
    const { down } = this.state;
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
    if (down) {
      console.log('down-loding...');
    } else {
      console.log('up-loding...');
    }
  }

  render() {
    const tabs = [
      { title: '全部', type: 'all'},
      { title: '审批中', type: 'approval'},
      { title: '审批通过', type: 'through'},
      { title: '审批未通过', type: 'noThrough'}
    ];
    return (
      <Tabs onTabClick={this.onTabClick} tabs={tabs} initialPage={0} swipeable={false}>
        <div>
          <div className="small-btn">
            <span onClick={() => this.smallBtn(0)} className={this.state.index === 0 ? "btn" : ""}>待提交</span>
            <span onClick={() => this.smallBtn(1)} className={this.state.index === 1 ? "btn" : ""}>已撤回</span>
          </div>
          <PullToRefresh
            damping={60}
            id="content"
            ref={e => (this.scrollDom = e)}
            onScroll={this.onScroll}
            style={{
              height: this.state.height,
              overflow: 'auto',
              marginTop: '40px',
              backgroundColor: '#eee'
            }}
            indicator={this.state.down ? {deactivate: '刷新中'} : { deactivate: '加载更多...' }}
            direction={this.state.down ? 'down' : 'up'}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          >
            <SwipeAction
              style={{ backgroundColor: 'gray', margin: '0 5px 5px'}}
              autoClose
              right={[
                {
                  text: '删除',
                  onPress: () => console.log('delete'),
                  style: { backgroundColor: '#F4333C', color: 'white', width: '80px' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <div className="item-box">
                <div className="parts-name">名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称</div>
                <div className="labor-name">劳务队伍：<span>接触网一对</span></div>
                <div className="materials-Time">用料时间：<span>2020.01.01</span></div>
                <div className="prepare-people">编制人：<span>哈哈哈</span> 编制日期：<span>2020.01.01 10:30</span></div>
              </div>
            </SwipeAction>
            <SwipeAction
              style={{ backgroundColor: 'gray', margin: '0 5px 5px'}}
              autoClose
              right={[
                {
                  text: 'Delete',
                  onPress: () => console.log('delete'),
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <div className="item-box">
                <div className="parts-name">名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称</div>
                <div className="labor-name">劳务队伍：<span>接触网一对</span></div>
                <div className="materials-Time">用料时间：<span>2020.01.01</span></div>
                <div className="prepare-people">编制人：<span>哈哈哈</span> 编制日期：<span>2020.01.01 10:30</span></div> 
              </div>
            </SwipeAction><SwipeAction
              style={{ backgroundColor: 'gray', margin: '0 5px 5px'}}
              autoClose
              right={[
                {
                  text: 'Delete',
                  onPress: () => console.log('delete'),
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <div className="item-box">
                <div className="parts-name">名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称</div>
                <div className="labor-name">劳务队伍：<span>接触网一对</span></div>
                <div className="materials-Time">用料时间：<span>2020.01.01</span></div>
                <div className="prepare-people">编制人：<span>哈哈哈</span> 编制日期：<span>2020.01.01 10:30</span></div> 
              </div>
            </SwipeAction><SwipeAction
              style={{ backgroundColor: 'gray', margin: '0 5px 5px'}}
              autoClose
              right={[
                {
                  text: 'Delete',
                  onPress: () => console.log('delete'),
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <div className="item-box">
                <div className="parts-name">名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称</div>
                <div className="labor-name">劳务队伍：<span>接触网一对</span></div>
                <div className="materials-Time">用料时间：<span>2020.01.01</span></div>
                <div className="prepare-people">编制人：<span>哈哈哈</span> 编制日期：<span>2020.01.01 10:30</span></div> 
              </div>
            </SwipeAction><SwipeAction
              style={{ backgroundColor: 'gray', margin: '0 5px 5px'}}
              autoClose
              right={[
                {
                  text: 'Delete',
                  onPress: () => console.log('delete'),
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <div className="item-box">
                <div className="parts-name">名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称</div>
                <div className="labor-name">劳务队伍：<span>接触网一对</span></div>
                <div className="materials-Time">用料时间：<span>2020.01.01</span></div>
                <div className="prepare-people">编制人：<span>哈哈哈</span> 编制日期：<span>2020.01.01 10:30</span></div> 
              </div>
            </SwipeAction>
          </PullToRefresh>
        </div>
        <div className="tab-content-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          审批中
        </div>
        <div className="tab-content-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          审批通过
        </div>
        <div className="tab-content-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          审批未通过
        </div>
      </Tabs>
    );
  }
}
