
import React from 'react';

import flexbox from 'adwen-ui/css/flexbox.css';
import s from './switches.css';
import cx from 'classnames';
import Button from 'adwen-ui/button';

class Switches extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: {
        nba: true,
        football: true,
        nhl: true,
        nfl: true,
        tennis: true,
      },
    };
  }

  componentDidMount() {
        // console.log("did mount")
  }
  componentWillReceiveProps() {
        // this.setState({ opacity: 0 })
  }
  componentDidUpdate() {
        // this.setState({ opacity: 1 })
  }

  onClick(button, evt) {
    this.setState({
      selected: { ...this.state.selected, [button]: this.refs[button].state.pressed },
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(Object.keys(this.state.selected).filter(p => this.state.selected[p]));
      }
    });
  }

  render() {
    return (
        <div className={cx('flexbox row wrap justify-content-center', s.root, this.props.className)} >
            <Button switch ref={'nba'} text={'nba'} icon={'soccer-ball-o'} colorName={'red'} onClick={this.onClick.bind(this, 'nba')} />
            <Button switch ref={'football'} text={'football'} icon={'soccer-ball-o'} colorName={'green'} onClick={this.onClick.bind(this, 'football')} />
            <Button switch ref={'nhl'} text={'nhl'} icon={'soccer-ball-o'} colorName={'blue'} onClick={this.onClick.bind(this, 'nhl')} />
            <Button switch ref={'tennis'} text={'tennis'} icon={'soccer-ball-o'} colorName={'orange'} onClick={this.onClick.bind(this, 'tennis')} />
            <Button switch ref={'nfl'} text={'nfl'} icon={'soccer-ball-o'} colorName={'navy'} onClick={this.onClick.bind(this, 'nfl')} />
        </div>
    );
  }

}

export default Switches;
