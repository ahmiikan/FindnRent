import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRental } from "../../Context/RentalContext";
import "../CSS/Housecard.css";

const Housecard = ({ filters }) => {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const { setSelectedHouse } = useRental();
  const navigate = useNavigate();

  // Fetch houses from backend
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/houses");
        const data = await res.json();

        // pick 12 random houses initially
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setHouses(data);
        setFilteredHouses(shuffled.slice(0, 12));
      } catch (err) {
        console.error("Error fetching houses:", err);
      }
    };
    fetchHouses();
  }, []);

  // Apply filters whenever filters change
  useEffect(() => {
    let results = houses;

    if (filters.city) {
      results = results.filter(
        (h) => h.city.toLowerCase() === filters.city.toLowerCase()
      );
    }

    if (filters.location) {
      results = results.filter(
        (h) => h.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    if (filters.propertyType) {
      results = results.filter(
        (h) =>
          h.propertyType?.toLowerCase() === filters.propertyType.toLowerCase()
      );
    }

    if (filters.priceRange) {
      if (filters.priceRange === "20k") {
        results = results.filter((h) => h.rent <= 20000);
      } else if (filters.priceRange === "50k") {
        results = results.filter((h) => h.rent <= 50000);
      } else if (filters.priceRange === "100k") {
        results = results.filter((h) => h.rent <= 100000);
      }
    }

    if (filters.area) {
      results = results.filter((h) => h.area === filters.area);
    }

    if (filters.rooms) {
      results = results.filter((h) => h.rooms === Number(filters.rooms));
    }

    if (
      !filters.city &&
      !filters.location &&
      !filters.propertyType &&
      !filters.priceRange &&
      !filters.area &&
      !filters.rooms
    ) {
      const shuffled = [...houses].sort(() => 0.5 - Math.random());
      setFilteredHouses(shuffled.slice(0, 12));
    } else {
      setFilteredHouses(results);
    }
  }, [filters, houses]);

  // Handle Rent Now button click
  const onRentClick = (house) => {
    setSelectedHouse(house); // store the selected house in context
    navigate("/billing"); // redirect to billing page
  };

  return (
    <div className="houses-container">
      {filteredHouses.length > 0 ? (
        filteredHouses.map((house) => (
          <div key={house._id} className="house-card">
            <img
              src={
                house.images?.[0] ||
                "https://via.placeholder.com/400x250.png?text=House"
              }
              alt={house.title}
              className="house-image"
            />
            <div className="house-info">
              <h3>{house.title}</h3>
              <p>
                <strong>City:</strong> {house.city} |{" "}
                <strong>Location:</strong> {house.location}
              </p>
              <p>
                <strong>Rent:</strong> PKR {house.rent} |{" "}
                <strong>Rooms:</strong> {house.rooms} |{" "}
                <strong>Bathrooms:</strong> {house.bathrooms}
              </p>
              <p>
                <strong>Area:</strong> {house.area} Marla |{" "}
                <strong>Type:</strong> {house.propertyType}
              </p>
              <button
                onClick={() => onRentClick(house)}
                className="rent-btn"
              >
                Rent Now
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No houses found for your search.</p>
      )}
    </div>
  );
};

export default Housecard;
