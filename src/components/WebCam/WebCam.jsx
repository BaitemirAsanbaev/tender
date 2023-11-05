import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";
import axios from "axios";
import classes from "./WebCam.module.scss";
export default function WebCam() {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  let mediaRecorder = null;

  const videoConstraints = {
    width: 1280,
    height: 720,
  };

  const startRecording = () => {
    mediaRecorder = new RecordRTC(webcamRef.current.stream, {
      type: "video",
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
      setTimeout(()=>window.scrollTo(0, document.body.scrollHeight), 1000)
    });
  };

  const sendVideoToServer = (videoBlob) => {
    const formData = new FormData();
    formData.append("video", videoBlob);
    console.log("sending...");
    axios
      .post("http://192.168.0.100:8000", formData)
      .then((response) => {
        console.log("Video uploaded successfully");
        console.log(response);
      })
      .catch((error) => {
        console.error("Error uploading video:", error);
      });
  };
  return (
    <div className={classes.WebCam}>
      <div className={classes.face}></div>
      <div className={classes.pass}></div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />

      {!recording ? (
        <button className={classes.btn} onClick={startRecording}>Start</button>
      ) : (
        <div className={classes.rec}></div>  
      )}

      {recordedVideo && <video controls src={recordedVideo} />}
    </div>
  );
}
