
    const cityLocations = {
      lahore: ["Gulberg", "DHA", "Bahria Town", "Johar Town"],
      islamabad: ["F-6", "F-7", "G-10", "G-11"],
      peshawar: ["Hayatabad", "University Town", "Saddar"],
      faisalabad: ["Peoples Colony", "D Ground", "Jaranwala Road"],
      karachi: ["Clifton", "Gulshan-e-Iqbal", "DHA", "Korangi"],
      multan: ["Cantt", "Model Town", "Shah Rukn-e-Alam"],
      quetta: ["Sariab Road", "Jinnah Town", "Samungli Road"]
    };

    function updateLocations() {
      const citySelect = document.getElementById("citySelect");
      const locationSelect = document.getElementById("locationSelect");
      const selectedCity = citySelect.value;

      // Reset locations
      locationSelect.innerHTML = "<option value=''>Select Location</option>";

      if (selectedCity && cityLocations[selectedCity]) {
        locationSelect.disabled = false;
        cityLocations[selectedCity].forEach(area => {
          const option = document.createElement("option");
          option.value = area.toLowerCase().replace(/\s+/g, "-");
          option.textContent = area;
          locationSelect.appendChild(option);
        });
      } else {
        locationSelect.disabled = true;
      }
    }

    function toggleOptions() {
      const moreOptions = document.querySelector('.more-options');
      const toggleText = document.querySelector('.show-more');
      if (moreOptions.style.display === "block") {
        moreOptions.style.display = "none";
        toggleText.textContent = "Show more options";
      } else {
        moreOptions.style.display = "block";
        toggleText.textContent = "Show less options";
      }
    }
