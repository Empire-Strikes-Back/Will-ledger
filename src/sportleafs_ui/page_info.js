import React from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Layout';

import { title, html } from './index.md';

import s from './info.css';
import cx from 'classnames';
require('adwen-ui/css/flexbox.css');

class InfoPage extends React.Component {

  componentDidMount() {
    document.title = 'info';
  }

  render() {
    return (
      <Layout>
        <section className={cx('flexbox column nowrap', s.root)}>
          <div >
            powered by: &nbsp;
            <span className={s.name}>
              <i className="fa fa-battery-full" />
              <i className="fa fa-battery-full" />
              <i className="fa fa-battery-full" />
            </span>
          </div>
          <div >
            contact: &nbsp;
          </div>
        </section>
      </Layout>
    );
  }

}

export default InfoPage;
