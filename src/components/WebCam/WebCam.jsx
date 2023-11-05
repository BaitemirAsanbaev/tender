import React, { useContext, useRef, useState } from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";
import axios from "axios";
import classes from "./WebCam.module.scss";
import { Context } from "../..";
import { useNavigate } from "react-router-dom";
import BlueButton from "../BlueButton/BlueButton";
export default function WebCam() {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  let mediaRecorder = null;
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const videoConstraints = {
    width: 1280,
    height: 720,
  };
  function generateRandomGmailEmail() {
    // Characters that can be used in the username
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
    // Generate a random username with a length between 6 and 10 characters
    const usernameLength = Math.floor(Math.random() * 5) + 6;
    let username = '';
    for (let i = 0; i < usernameLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      username += characters.charAt(randomIndex);
    }
  
    // Combine username with "gmail.com" to form the email address
    const email = `${username}@gmail.com`;
  
    return email;
  }
  function register(){
    const email = generateRandomGmailEmail()
    store.register({ email, password: "123123", role: "User" })
  }
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
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 1000);
    });
  };

  const sendVideoToServer = (videoBlob) => {
    const formData = new FormData();
    formData.append("video", videoBlob);
    console.log("sending...");
    axios
      .post("http://localhost:8000", formData)
      .then((response) => {
        console.log("Video uploaded successfully");
        console.log('res', response);
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
        <button className={classes.btn} onClick={startRecording}>
          Start
        </button>
      ) : (
        <div className={classes.rec}></div>
      )}

      {recordedVideo && <video controls src={recordedVideo} />}
      <button className={classes.register_btn} onClick={register}>Register</button>
    </div>
  );
}
