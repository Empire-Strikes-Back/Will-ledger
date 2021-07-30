import store from '../core/store.js';

const io = require('socket.io-client');

let socket;

function connectToTwitterStream() {
  if (socket && socket.connected) {
    return;
  }

    // socket = io('https://46.188.58.225:2000',{secure:true});
    // socket = io.connect('https://localhost:2443/',{reconnection: true});

  socket = io.connect('https://twitterstream-.rhcloud.com:8443/', { transports: ['websocket', 'polling'], reconnection: true });

  socket.on('connect', () => {
    console.log('connected');
        // socket.emit("message", "some message");
        // socket.emit('themes', Object.keys(store.getState().sports).filter((p) => store.getState().sports[p]), function (tweets) {
        //     console.log(tweets);
        //     // console.log(Object.keys(tweets).reduce((p, c) => {
        //     //     return p.concat(tweets[c]);
        //     // }, []));
        //     const result = [...Object.keys(tweets).reduce((p, c) => {
        //             return p.concat(tweets[c].slice(-1));
        //         }, [])].filter((e, i, a) => {
        //             for (let t of a) {
        //                 if (t.id_str === e.id_str) {
        //                     return true;
        //                 }
        //             }
        //             return false;
        //         }).splice(0, 15);

        //     result.sort((a,b)=> a.timestamp_ms < b.timestamp_ms )

        //     store.dispatch({
        //         type: "tweets", tweets: result
        //     });
        // })
  });
  socket.on('message', (msg) => {
    console.log(msg);
        // context.setState({})
  });
  socket.on('tweet', (tweet) => {
        // console.log(tweet);
    for (const t of (store.getState().tweets || [])) {
      if (t.id_str === tweet.id_str) {
        return;
      }
    }
    store.dispatch({ type: 'tweets', tweets: [tweet, ...store.getState().tweets || []].splice(0, 15) });
        // context.setState({ tweets: [tweet, ...context.state.tweets].splice(0, 10) })
  });
}

function changeFeed(options) {
  if (options && options.sport) {
    socket.emit('themes', options.sport);
  }
}


module.exports = { changeFeed, connectToTwitterStream };
