import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ToDo() {
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.data.name()
    event.data.status()
    
    };


  const handleViewAllPosts = () => {
    navigate('/view-todos', {replace: true});
  };

  return (
    <div>
      <form onSubmit={() => handleSubmit()}>
        <label>
          Post Name:
          <input type="text" name="name" placeholder="Title" />
          <input type="text" name="status" placeholder="status"/>
        </label>
        <button type="submit">Add</button>
      </form>
      <button onClick={() => handleViewAllPosts()}>View All</button>
    </div>
  );

};

export default ToDo;
