import React from 'react';

import Link from '../Link';
import cx from 'classnames';
import s from './navigation.css';

require('adwen-ui/css/flexbox.css');

class Nav extends React.Component {

  componentDidMount() {
        // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
        // window.componentHandler.downgradeElements(this.root);
  }

  render() {
        // return (
        //   <header className="mdl-layout__header" ref={node => (this.root = node) }>
        //     <div className="mdl-layout__header-row" {...this.props} />
        //     <Login  />
        //   </header>
        // );

        // <Link to="/sport/nba">NBA</Link>
        // <Link to="/sport/football">Football</Link>
        // <Link to="/sport/nhl">NHL</Link>
        // <Link to="/sport/nfl">NFL</Link>
        // <Link to="/sport/tennis">Tennis</Link>
        // <Link to="/sport/olympics">Olympics</Link>

    return (
            <nav className={cx('', this.props.className)}>
                <Link to="/" className={cx('', s.link)}><i className="fa fa-home" /></Link>
                <Link to="/tweets" className={cx('', s.link)}><i className="fa fa-twitter" /></Link>
                <Link to="/sports" className={cx('', s.link)}><i className="fa fa-soccer-ball-o" /></Link>
                <Link to="/search" className={cx('', s.link)}><i className="fa fa-search" /></Link>
                <Link to="/info" className={cx('', s.link)}><i className="fa fa-info-circle" /></Link>
            </nav>
        );
  }

}

export default Nav;
