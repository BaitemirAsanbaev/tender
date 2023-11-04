import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import RecordRTC from 'recordrtc';
import axios from 'axios';

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  let mediaRecorder = null;

  const startRecording = () => {
    mediaRecorder = new RecordRTC(webcamRef.current.stream, {
      type: 'video',
    });
    mediaRecorder.startRecording();
    setRecording(true);

    setTimeout(stopRecording, 5000); // Stop recording after 5 seconds
  };

  const stopRecording = () => {
    mediaRecorder.stopRecording(() => {
      const blob = mediaRecorder.getBlob();
      setRecordedVideo(URL.createObjectURL(blob));
      setRecording(false);

      // Now, you can send the recorded video to your server using Axios
      sendVideoToServer(blob);
    });
  };

  const sendVideoToServer = (videoBlob) => {
    const formData = new FormData();
    formData.append('video', videoBlob);
    console.log("sending...");
    axios.post('http://192.168.0.100:8000', formData)
      .then((response) => {
        console.log('Video uploaded successfully');
        console.log(response);
      })
      .catch((error) => {
        console.error('Error uploading video:', error);
      });
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />

      {recording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
      )}

      {recordedVideo && <video controls src={recordedVideo} />}

    </div>
  );
};

export default WebcamCapture;
