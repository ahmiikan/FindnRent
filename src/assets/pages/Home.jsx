import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../components/Searchbox";
import Housecard from "../components/Housecard";
import { useRental } from "../../Context/RentalContext";

function Home() {
  const [filters, setFilters] = useState({});
  const { setSelectedHouse } = useRental();
  const navigate = useNavigate();

  // Function to handle rent button click
  const handleRentClick = (house) => {
    setSelectedHouse(house); // Save house in context
    navigate("/billing"); // Redirect to billing page
  };

  return (
    <div>
      {/* Hero Section with full background */}
      <section className="hero-section">
        <div className="hero-content">
          <SearchBox setFilters={setFilters} />
        </div>
      </section>

      {/* Houses Section */}
      <section className="houses-section">
        <h1 className="available-houses">Available Houses</h1>
        {/* Pass handleRentClick to Housecard for each house */}
        <Housecard filters={filters} onRentClick={handleRentClick} />
      </section>
    </div>
  );
}

export default Home;
