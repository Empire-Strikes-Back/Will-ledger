
import React from 'react';
require('adwen-ui/css/flexbox.css');
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
import s from './Tweet.css';
import cx from 'classnames';


class Tweet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }


  render() {
    const tweet = this.props.tweet;
    return (
            <blockquote className={cx(s.twittertweet)}>
                <img style={{ maxWidth: '48px', maxHeight: '48px' }} src={tweet.user.profile_image_url} />
                <p>{tweet.text}</p>
                - {tweet.user.name} ( @{tweet.user.screen_name})
            </blockquote>
        );
  }
}

export default Tweet;
