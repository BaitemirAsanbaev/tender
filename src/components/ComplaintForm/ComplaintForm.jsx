import React, { useState } from "react";
import axios from "axios";
import { api } from "../../api";
import './ComplaintForm.scss'
const ComplaintForm = () => {
  const [complaint, setComplaint] = useState({
    title: "",
    author_role: "",
    text: "",
    image: null,
  });

  const token = localStorage.getItem('access')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaint({
      ...complaint,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setComplaint({
      ...complaint,
      image,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", complaint.title);
    formData.append("author_role", complaint.author_role);
    formData.append("text", complaint.text);
    formData.append("image", complaint.image);

    axios
      .post(api+'create/complaint', formData, {headers: {
        Authorization: `Bearer ${token}`, // Add the Bearer token with your JWT here
        "Content-Type": "multipart/form-data",
      }},)
      .then((response) => {
        console.log("Complaint submitted successfully");
        // Add your success handling logic here
      })
      .catch((error) => {
        console.error("Error submitting complaint: ", error);
        // Add your error handling logic here
      });
  };

  return (
    <div className={"complaint-form page"}>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={complaint.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Author Role:</label>
          <input
            type="text"
            name="author_role"
            value={complaint.author_role}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Text:</label>
          <textarea
            name="text"
            value={complaint.text}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
