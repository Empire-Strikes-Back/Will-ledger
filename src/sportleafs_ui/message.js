
import React from 'react';

import flexbox from 'adwen-ui/css/flexbox.css';
import s from './message.css';
import cx from 'classnames';
import FlipMove from 'react-flip-move';

class Message extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
  };

  static contextTypes = {
    store: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }
  componentDidMount() {
    if (this.context.store) {
      this.setState({
        style: this.context.store.getState().constructionMessageStyle,
      });
    }
  }

  onClick() {
    const style = {
      transition: 'transform 1s,padding-top 1s, padding-bottom 1s,height 1s',
      transformOrigin: 'top',
      transform: 'scaleY(0)',
      paddingTop: '0em',
      paddingBottom: '0em',
      height: '0em',
    };

    this.setState({
      style,
    });
    if (this.context.store) {
      this.context.store.dispatch({ type: 'default', constructionMessageStyle: style });
    }
  }

    // this.refs.root.style.transition = 'transform 1s,padding-top 1s, padding-bottom 1s,height 1s';
    // this.refs.root.style.transformOrigin = 'top';
    // this.refs.root.style.transform = 'scaleY(0)';
    // this.refs.root.style.paddingTop = '0';
    // this.refs.root.style.paddingBottom = '0';
    // this.refs.root.style.height = '0';


  render() {
    return (
            <div style={this.state.style} ref={'root'} className={cx('flexbox column nowrap justify-content-center align-items-center', s.root)} onClick={this.onClick.bind(this)}>
                <div className="flexbox row wrap justify-content-center align-items-center">
                    <span>the website is currently under</span>
                    <span>construction</span>
                    <i className="fa fa-code" />
                </div>
                <div className="flexbox row wrap justify-content-center align-items-center">
                    <span>some</span>
                    <i className="fa fa-twitter" />
                    <span>stream in the meanwhile...</span>
                </div>

            </div>
        );

        //   return (
        //     <FlipMove    leaveAnimation="accordianVertical" duration={1000} >
        //         {
        //             !this.state.hidden ? (
        //                 <div  className={cx("flexbox row wrap justify-content-center align-items-center", s.root) } onClick={this.onClick.bind(this) }>
        //                     <span>some</span>
        //                     <i className="fa fa-twitter"></i>
        //                     <span>stream in the meanwhile...</span>
        //                 </div>) : undefined
        //         }
        //     </FlipMove>
        // );
  }

}

export default Message;
