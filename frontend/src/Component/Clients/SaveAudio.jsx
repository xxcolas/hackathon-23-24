import React from 'react';
import { ReactMic } from 'react-mic';

export class SaveAudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blobURL: null
    }
  }

  startRecording = () => {
    this.setState({ record: true });
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

  onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    this.setState({ blobURL: URL.createObjectURL(recordedBlob.blob) });
  }

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
        {this.state.blobURL && (
          <div>
            <h3>Écouter l'enregistrement :</h3>
            <audio src={this.state.blobURL} controls="controls" />
          </div>
        )}
      </div>
    );
  }
}
