import express from "express";
import House from "../models/House.js";

const router = express.Router();

// 🏠 Seed Houses - Clears old data and inserts new
router.post("/seed", async (req, res) => {
  try {
    // Delete existing houses to avoid duplicates
    await House.deleteMany({});

    const houses = [
      // Lahore
    {
        title: "Luxury Apartment 1 in Gulberg",
        city: "Lahore",
        location: "Gulberg",
        rent: 55000,
        rooms: 3,
        bathrooms: 2,
        images: [""] 
    },
    {
        title: "Luxury Apartment 2 in Gulberg",
        city: "Lahore",
        location: "Gulberg",
        rent: 60000,
        rooms: 4,
        bathrooms: 3,
        images: [""]
    },
    {
        title: "Luxury Apartment 3 in Gulberg",
        city:"Lahore",
        location: "Gulberg",
        rent: 50000,
        rooms: 3,
        bathrooms: 2,
        images: [""]
    },

    {
        title: "Modern Flat 1 in DHA",
        city: "Lahore",
        location: "DHA",
        rent: 65000,
        rooms: 4,
        bathrooms: 3,
        images: [""]
    },
    {
        title: "Modern Flat 2 in DHA",
        city: "Lahore", 
        location: "DHA", 
        rent: 62000,
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },
    {
        title: "Modern Flat 3 in DHA", 
        city: "Lahore", 
        location: "DHA", 
        rent: 67000, 
        rooms: 4,
        bathrooms: 3, 
        images: [""] 
    },

    {
        title: "Family House 1 in Johar Town", 
        city: "Lahore", 
        location: "Johar Town", 
        rent: 58000, 
        rooms: 3,
        bathrooms: 2, 
        images: [""] 
    },
    {
        title: "Family House 2 in Johar Town", 
        city: "Lahore", 
        location: "Johar Town", 
        rent: 60000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    },
    {
        title: "Family House 3 in Johar Town", 
        city: "Lahore", 
        location: "Johar Town", 
        rent: 57000, 
        rooms: 3, bathrooms: 2, 
        images: [""] 
    },

      // Islamabad
    {
        title: "Luxury Apartment 1 in F-6", 
        city: "Islamabad", 
        location: "F-6", 
        rent: 75000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""]
    },
    {
        title: "Luxury Apartment 2 in F-6", 
        city: "Islamabad", 
        location: "F-6", 
        rent: 72000, 
        rooms: 3, 
        bathrooms: 2,images: [""]
    },
    {
        title: "Luxury Apartment 3 in F-6",
        city: "Islamabad",
        location: "F-6",
        rent: 78000, 
        rooms: 4,
        bathrooms: 3,
        images: [""] },

    {
        title: "Modern Flat 1 in F-7", 
        city: "Islamabad", 
        location: "F-7", 
        rent: 80000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    },
    {
        title: "Modern Flat 2 in F-7", 
        city: "Islamabad", 
        location: "F-7", 
        rent: 82000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] },
    {
        title: "Modern Flat 3 in F-7", 
        city: "Islamabad", 
        location: "F-7", 
        rent: 79000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },

    {
        title: "Family House 1 in G-10", 
        city: "Islamabad", 
        location: "G-10", 
        rent: 70000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },
    {
        title: "Family House 2 in G-10",
        city: "Islamabad", 
        location: "G-10", 
        rent: 72000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    },
    {
        title: "Family House 3 in G-10", 
        city: "Islamabad", 
        location: "G-10", 
        rent: 71000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""]
    },

      // Peshawar
    {
        title: "Apartment 1 in Hayatabad", 
        city: "Peshawar", 
        location: "Hayatabad", 
        rent: 40000, 
        rooms: 3,
        bathrooms: 2, 
        images: [""]
    },
    {
        title:"Apartment 2 in Hayatabad", 
        city: "Peshawar", 
        location: "Hayatabad",
        rent: 42000, 
        rooms: 4,
        bathrooms: 3, 
        images: [""] 
    },
    {
        title: "Apartment 3 in Hayatabad", 
        city: "Peshawar", 
        location: "Hayatabad", 
        rent: 38000, 
        rooms: 2, 
        bathrooms: 1, 
        images: [""] 
    },

    {
        title: "Flat 1 in University Town", 
        city: "Peshawar", 
        location: "University Town", 
        rent: 35000, 
        rooms: 2,
        bathrooms:1, 
        images: [""]
        },
    {
        title: "Flat 2 in University Town", 
        city: "Peshawar", 
        location: "University Town", 
        rent: 36000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] },
    {
        title: "Flat 3 in University Town", 
        city: "Peshawar", 
        location: "University Town", 
        rent: 37000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },

    {
        title: "House 1 in Saddar",
        city: "Peshawar", 
        location: "Saddar", 
        rent: 30000, 
        rooms: 2, 
        bathrooms:1, 
        images: [""] 
    },
    {
        title: "House 2 in Saddar", 
        city: "Peshawar", 
        location: "Saddar", 
        rent: 32000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },
    {
        title: "House 3 in Saddar", 
        city: "Peshawar", 
        location: "Saddar", 
        rent: 31000, 
        rooms: 2, 
        bathrooms: 1, 
        images: [""] 
    },

      // Faisalabad
    {
        title: "Apartment 1 in Johar Colony", 
        city: "Faisalabad", 
        location: "Johar Colony", 
        rent: 30000,
        rooms: 2, 
        bathrooms: 1,
        images: [""] 
    },
    {
        title: "Apartment 2 in Johar Colony", 
        city: "Faisalabad", 
        location: "Johar Colony", 
        rent: 32000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },
    {
        title: "Apartment 3 in Johar Colony", 
        city: "Faisalabad", 
        location: "Johar Colony", 
        rent: 31000, 
        rooms: 2, 
        bathrooms: 1, 
        images: [""] 
    },

    {
        title: "Flat 1 in Peoples Colony", 
        city: "Faisalabad", 
        location: "Peoples Colony", 
        rent: 35000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },
    {
        title: "Flat 2 in Peoples Colony", 
        city: "Faisalabad", 
        location: "Peoples Colony", 
        rent: 36000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },
    {
        title: "Flat 3 in Peoples Colony", 
        city: "Faisalabad", 
        location: "Peoples Colony", 
        rent: 37000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    },

    {
        title: "House 1 in Madina Town",
        city: "Faisalabad", 
        location: "Madina Town", 
        rent: 38000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
        },
    {
        title: "House 2 in Madina Town", 
        city: "Faisalabad", 
        location: "Madina Town", 
        rent: 39000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },
    {
        title: "House 3 in Madina Town", 
        city: "Faisalabad", 
        location: "Madina Town", 
        rent: 40000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    
    },

      // Karachi
    {
        title: "Apartment 1 in Clifton", 
        city: "Karachi", 
        location: "Clifton", 
        rent: 75000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    },
    {
        title: "Apartment 2 in Clifton", 
        city: "Karachi", 
        location: "Clifton", 
        rent: 72000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },
    {
        title: "Apartment 3 in Clifton", 
        city: "Karachi", 
        location: "Clifton", 
        rent: 78000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    },

    {
        title: "Flat 1 in DHA", 
        city: "Karachi", 
        location: "DHA", 
        rent: 80000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    },
    {
        title: "Flat 2 in DHA", 
        city: "Karachi", 
        location: "DHA", 
        rent: 82000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    },
    {
        title: "Flat 3 in DHA", 
        city: "Karachi", 
        location: "DHA", 
        rent: 79000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    },

    {
        title: "House 1 in Gulshan-e-Iqbal", 
        city: "Karachi", 
        location: "Gulshan-e-Iqbal", 
        rent: 70000, 
        rooms: 3, 
        bathrooms: 2, images: [""] 
    },
    {
        title: "House 2 in Gulshan-e-Iqbal", 
        city: "Karachi", 
        location: "Gulshan-e-Iqbal", 
        rent: 72000, 
        rooms: 4, 
        bathrooms: 3, 
        images: [""] 
    },
    {
        title: "House 3 in Gulshan-e-Iqbal", 
        city: "Karachi", 
        location: "Gulshan-e-Iqbal", 
        rent: 71000, 
        rooms: 3, 
        bathrooms: 2, 
        images: [""] 
    }
    ];

    await House.insertMany(houses);

    res.status(201).json({ message: "Database seeded successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Seeding failed", error: error.message });
  }
});

// 🏠 Get all houses
router.get("/", async (req, res) => {
  try {
    const houses = await House.find();
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch houses", error: error.message });
  }
});

export default router;
