import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function AdminPanel() {
  const [name, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [instructor, setInstructor] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
      const newCourse = {
        name,
        description,
        startDate,
        endDate,
        instructor,
        location,
      };
    try {
      const res = await axios.post("http://localhost:4000/courses", newCourse);
      console.log(res.data);
      alert("Course added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name:</label>
        <input type="text" id="courseName" value={name} onChange={(e) => setCourseName(e.target.value)} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

        <label htmlFor="instructor">Instructor:</label>
        <input type="text" id="instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />

        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AdminPanel;
