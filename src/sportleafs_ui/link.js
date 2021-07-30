import React, { PropTypes } from 'react';
import history from '../../core/history';
import s from './Link.css';
import cx from 'classnames';

class Link extends React.Component {

  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onClick: PropTypes.func,
  }

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (event.button !== 0 /* left click */) {
      return;
    }

    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    // event.persist();
    // console.log(event);
    if (this.props.to) {
      history.push(this.props.to);
    } else {
      history.push({
        pathname: event.currentTarget.pathname,
        search: event.currentTarget.search,
      });
    }
  }

  render() {
    const { to, ...props } = this.props; // eslint-disable-line no-use-before-define


    return <a {...props} className={cx(s.root, this.props.className)} href={history.createHref(to)} onClick={this.handleClick.bind(this)} />;
  }

}

export default Link;
