"use client";

import React, { useState } from "react";

function Form() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleform = (e) => {
    e.preventDefault();
    console.log(formdata);

    alert(`
      Name: ${formdata.name}
      Email: ${formdata.email}
      Password: ${formdata.password}
      Confirm Password: ${formdata.confirmPassword}
    `);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Form</h1>
      <form onSubmit={handleform} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formdata.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
