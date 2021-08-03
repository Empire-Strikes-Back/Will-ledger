import React from 'react';

import config from '../../config.js';

import Link from '../Link';
import cx from 'classnames';
import s from './header.css';
import logo from '../../img/sportleafs-1009 -396.png';

require('adwen-ui/css/flexbox.css');
require('adwen-ui/css/sizes.css');
import Nav from '../navigation';

class Header extends React.Component {

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


    //

    return (
      <div className={cx('flexbox column nowrap', s.header)}>
        <div className="flexbox row nowrap">
          <Link to="/" className={s.logo}><img className={s.img} src={logo} /></Link>
          <div className={cx('flexbox row nowrap', s.rhs)}>
          </div>
        </div>
        <hr className={s.hr} />
        <Nav className={cx('flexbox row wrap justify-content-space-around', s.nav)} />
        <hr className={s.hr} />
      </div>
    );
  }

}

export default Header;
