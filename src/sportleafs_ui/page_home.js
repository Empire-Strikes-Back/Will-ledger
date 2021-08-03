
import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import { title, html } from './index.md';
require('adwen-ui/css/flexbox.css');


// require('./scss/main.scss');

class HomePage extends React.Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      //           <div className="app">
      //         <section id="main-content">
      // <div id="home">
      //     <header className="title">
      //       <h2>flip move</h2>
      //     </header>

      //     <section>
      //       <p>This module was built to tackle the common but arduous problem of animating a list of items when the list's order changes. </p>

      //       <p>DOM nodes can't actually reorder themselves; brand new nodes are created instead. Because of this, simple CSS transitions don't work.</p>

      //       <p><em>Flip move</em> uses the <a href="https://github.com/joshwcomeau/react-flip-move/blob/master/docs/how-it-works.md">FLIP technique</a> to work out what such a transition would look like, and fakes it using hardware-accelerated CSS transforms.</p>

      //       <p>Oh, and it does some other cool stuff too.</p>
      //     </section>


      //     <div className="text-right">
      //       <a href='https://github.com/joshwcomeau/react-flip-move' className="button-toggle large">
      //         <i className="fa fa-fw fa-code" />
      //         View the Source
      //       </a>

      //     </div>
      //   </div>
      //         </section>
      //       </div>
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>


    );
  }

}

export default HomePage;
