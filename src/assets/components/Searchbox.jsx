import React, { useState } from "react";
import "../CSS/Searchbox.css"

const SearchBox = ({ setFilters }) => {
  // city → location mapping
  const cityLocations = {
    lahore: ["Gulberg", "DHA", "Johar Town"],
    islamabad: ["F-6", "F-7", "G-10"],
    peshawar: ["Hayatabad", "University Town", "Saddar"],
    faisalabad: ["Peoples Colony", "Madina Town", "Johar Colony"],
    karachi: ["Clifton", "Gulshan-e-Iqbal", "DHA", ]
  };

  // component state
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [showMore, setShowMore] = useState(false);

  // handle Find button click
const handleFind = () => {
  setFilters({
    city: selectedCity,
    location: selectedLocation,
    propertyType,
    priceRange,
    area,
    rooms,
  });
};

  return (
    <div className="search-wrapper">
      <div className="search-box">
        
        {/* -------- Row 1 -------- */}
        <div className="search-row">
          {/* City Select */}
          <select
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedLocation(""); // reset location when city changes
            }}
          >
            <option value="">Select City</option>
            {Object.keys(cityLocations).map((city) => (
              <option key={city} value={city}>
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </option>
            ))}
          </select>

          {/* Location Select */}
          <select
            value={selectedLocation}
            disabled={!selectedCity}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">
              {selectedCity ? "Select Location" : "Select City First"}
            </option>
            {selectedCity &&
              cityLocations[selectedCity].map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
          </select>

          {/* Find Button */}
          <button onClick={handleFind}>Find</button>
        </div>

        {/* -------- Show More Toggle -------- */}
        <span
          className="show-more"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less options" : "Show more options"}
        </span>

        {/* -------- Row 2 (Hidden by Default) -------- */}
        {showMore && (
          <div className="more-options">
            <div className="search-row">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Property Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="">Price Range</option>
                <option value="20k">20k</option>
                <option value="50k">20k-50k</option>
                <option value="100k">20k-100k</option>
              </select>

              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
                <option value="">Area</option>
                <option value="1-3">1 - 3 Marla</option>
                <option value="3-5">3 - 5 Marla</option>
                <option value="5-10">5 - 10 Marla</option>
              </select>

              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              >
                <option value="">Rooms</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default SearchBox;
