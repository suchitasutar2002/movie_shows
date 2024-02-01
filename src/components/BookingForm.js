import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingForm = () => {
  const API_URL = "https://api.tvmaze.com/search/shows?q=all";

  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setShows(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    // Add other form fields as needed
    show: "",
    name: "",
    email: "",
    seat:"",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your Booking is successfully!");
  };

  return (
    <div>
      <h2>Book Ticket </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Show Name:
          <select name="show" onChange={handleChange}>
            <option value="select">--select option--</option>
              {shows.map((show) => (
                <option key={show.show.id}>
                  {show.show.name}
                  {/* <p>{show.show.genres.join(", ")}</p> */}
                </option>
              ))}
          </select>
        </label>
        <br />
        <label>
          Show Type:
          <select name="show" onChange={handleChange}>
          <option value="select">--select option--</option>
              {shows.map((show) => (
                <option key={show.show.id}>
                  {/* <h2>{show.show.name}</h2> */}
                  {show.show.genres.join(", ")}
                </option>
              ))}
          </select>
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Seat:
          <input
            type="number"
            name="seat"
            placeholder="Enter No. of seats for book"
            value={formData.seat}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
