import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as getActions from '../../../../store/action/getQuestion';

import classes from './video.module.css';
class Video extends Component {
  v = () => {


    navigator.mediaDevices.getUserMedia(
      {
        video: {
          height: 200,
          width: 300
        }
      }
    ).then(stream => {
      console.log(stream);
      this.videoHandler("TRUE");

      document.getElementById("videoo").srcObject = stream;

    }).catch((err) => {
      console.log('permissioon hanlder will ne her')
      this.videoHandler(null)
    })
  }
  videoHandler = (value) => {
    this.props.vhandler(value);
  }

  render() {

    return (
      <div className={classes.Booth}>
        <video id="videoo" autoPlay />
        {this.v()}
        {/* hell(); */}

      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // ansSubmitter: (response) => dispatch(getActions.ansSubmiter(response)),

    vhandler: (payload) => dispatch(getActions.videoHandler(payload)),
  };
};

// export default Video;
export default connect(null, mapDispatchToProps)(Video);