
import React from 'react';
import Layout from '../../components/Layout';
import { connectToTwitterStream, changeFeed } from '../../data/twitter-openshift.js';
import { connect } from 'react-redux';
// import { title, html } from './index.md';
require('adwen-ui/css/flexbox.css');
// import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
// import Animate from 'rc-animate';
// import velocity from 'velocity-animate';
// import FlipMove from 'react-flip-move';

import TwitterFlow from 'adwen-ui/twitter-flow';
import Switches from '../../components/switches';
import Message from '../../components/message';

import s from './tweets.css';
import cx from 'classnames';
import Button from 'adwen-ui/button';

const title = 'Sport';

class TweetsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      sports: {},
    };
  }

  static propTypes = {

  };

  static contextTypes = {
    store: React.PropTypes.object,
  };

  componentDidMount() {
    document.title = title;
    connectToTwitterStream();
   // console.log("did mount")

    this.setState({
      sports: this.context.store.getState().sports || {},
    }, () => {
      this.changeFeed();
    });

    // twttr.widgets.createTimeline({
    //   sourceType: "list",
    //   slug: "nba"
    // }, document.getElementById("twitter"));
  }
  componentWillReceiveProps(nextProps) {
    // console.log('will receive props');

    // console.log(this.props.params.sport);
    // console.log(nextProps.params.sport);


  }
  componentWillUpdate(nextProps, nextState) {
    // connect(this);
   // console.log('will update');
  }
  componentWillUnmount(nextProps, nextState) {
    // console.log('will unmount');
  }


  onClick(button, evt) {
    this.setState({
      sports: { ...this.state.sports, [button]: this.refs[button].state.pressed },
    }, () => {
      this.context.store.dispatch({ type: 'localStorage', sports: this.state.sports });
      this.changeFeed();
    });
  }

  onKeyUp(e) {
    // const value = e.target.value;
    // const filtered = this.state.omdba.filter(function(e,i,a){
    //   return e.Title.match(new RegExp(`^${value}.*$`,'gi'));
    // })
    // this.setState({omdbaf: filtered.length ?filtered:null})
  }

  changeFeed() {
    // console.log('changin sports',this.state.sports)
    changeFeed({ sport: Object.keys(this.state.sports).filter(p => this.state.sports[p]) });
  }

  render() {
    const tweets = this.props.tweets || this.state.tweetsf || this.state.tweets || [];
    // <li key={i} className={Box.s.flexbox} >

    //   </li>
    function runAnimation(i, evt) {
      this.refs[`velocity${i}`].runAnimation({ stop: true });
    }
    const anim = {
      enter: this.animateEnter,
      leave: this.animateLeave,
    };
    return (
      <Layout>
        <div className={cx('flexbox row wrap justify-content-center', s.buttons, this.props.className)} >
          <Button pressed={this.state.sports.nba} ref={'nba'} text={'nba'} icon={'soccer-ball-o'} colorName={'red'} onClick={this.onClick.bind(this, 'nba')} />
          <Button pressed={this.state.sports.football} ref={'football'} text={'football'} icon={'soccer-ball-o'} colorName={'green'} onClick={this.onClick.bind(this, 'football')} />
          <Button pressed={this.state.sports.nhl} ref={'nhl'} text={'nhl'} icon={'soccer-ball-o'} colorName={'blue'} onClick={this.onClick.bind(this, 'nhl')} />
          <Button pressed={this.state.sports.tennis} ref={'tennis'} text={'tennis'} icon={'soccer-ball-o'} colorName={'orange'} onClick={this.onClick.bind(this, 'tennis')} />
          <Button pressed={this.state.sports.nfl} ref={'nfl'} text={'nfl'} icon={'soccer-ball-o'} colorName={'navy'} onClick={this.onClick.bind(this, 'nfl')} />
        </div>
        <TwitterFlow tweets={tweets} />
      </Layout>
    );

    // return (
    //   <Layout>
    //     <h1>{title}</h1>
    //     <h3>{this.props.params.sport}</h3>
    //     <input type="text" placeholder="search..." ref="search" onKeyUp={this.onKeyUp.bind(this) } />
    //     <div  className="flexbox row nowrap" >
    //       <VelocityTransitionGroup
    //         runOnMount
    //         enter={{ animation: 'slideDown' }}
    //         leave={{ animation: 'slideUp' }}
    //         duration={7000}
    //         component={'div'}
    //         className="flexbox column nowrap"
    //         >
    //         {
    //           tweets.map((el, i, a) => {
    //             return (
    //               // <div key={i} className="flexbox column nowrap" >
    //               //   <VelocityComponent animation="callout.tada" duration={500} ref={"velocity" + i}>
    //               //     <Tweet tweet={el}/>
    //               //   </VelocityComponent>
    //               // </div>
    //               <div key={el.id_str} className="flexbox column nowrap" >
    //                 <Tweet tweet={el}/>
    //               </div>
    //             );
    //           })
    //         }
    //       </VelocityTransitionGroup>
    //       <div id="twitter" style={{ width: "200px", height: "500px" }}></div>
    //     </div>
    //   </Layout>
    // );
  }

}

export default connect((state) => { return { tweets: state.tweets }; })(TweetsPage);
