import express from "express";
import House from "../Models/House.js";

const router = express.Router();

// ---------------------------
// POST a single house
// ---------------------------
router.post("/", async (req, res) => {
  try {
    const house = new House(req.body);
    await house.save();
    res.status(201).json(house);
  } catch (err) {
    console.error("Error while adding house:", err.message);
    res.status(500).json({ message: "Failed to add house", error: err.message });
  }
});

// ---------------------------
// GET all houses
// ---------------------------
router.get("/", async (req, res) => {
  try {
    const houses = await House.find();
    res.json(houses);
  } catch (err) {
    console.error("Error while fetching houses:", err.message);
    res.status(500).json({ message: "Failed to fetch houses", error: err.message });
  }
});

// ---------------------------
// Seed all 45 houses
// ---------------------------
console.log("Request received")
router.post("/seed-all", async (req, res) => {
  try {
    console.log("Seeding houses started...");
    await House.deleteMany(); // optional: remove old houses
    console.log("Old houses deleted.");

const housesToInsert = [
    // Lahore - Gulberg
    {
        title: "Luxury Apartment 1 in Gulberg",
        city: "Lahore",
        location: "Gulberg",
        rent: 20000, // First house
        rooms: 3,
        bathrooms: 2,
        images: "/images/housespics/1.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "Luxury Apartment 2 in Gulberg",
        city: "Lahore",
        location: "Gulberg",
        rent: 50000, // Second house
        rooms: 4,
        bathrooms: 3,
        images: "/images/housespics/2.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Luxury Apartment 3 in Gulberg",
        city: "Lahore",
        location: "Gulberg",
        rent: 100000, // Third house
        rooms: 3,
        bathrooms: 2,
        images: "/images/housespics/3.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Lahore - DHA
    {
        title: "Modern Flat 1 in DHA",
        city: "Lahore",
        location: "DHA",
        rent: 20000, // First house
        rooms: 4,
        bathrooms: 3,
        images: "/images/housespics/4.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "Modern Flat 2 in DHA",
        city: "Lahore", 
        location: "DHA", 
        rent: 50000, // Second house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/5.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Modern Flat 3 in DHA", 
        city: "Lahore", 
        location: "DHA", 
        rent: 100000, // Third house
        rooms: 4,
        bathrooms: 3, 
        images: "/images/housespics/6.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Lahore - Johar Town
    {
        title: "Family House 1 in Johar Town", 
        city: "Lahore", 
        location: "Johar Town", 
        rent: 20000, // First house
        rooms: 3,
        bathrooms: 2, 
        images: "/images/housespics/7.jpg",
        propertyType: "commercial",
        area: "1-3" 
    },
    {
        title: "Family House 2 in Johar Town", 
        city: "Lahore", 
        location: "Johar Town", 
        rent: 50000, // Second house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/8.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Family House 3 in Johar Town", 
        city: "Lahore", 
        location: "Johar Town", 
        rent: 100000, // Third house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/9.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Islamabad - F-6
    {
        title: "Luxury Apartment 1 in F-6", 
        city: "Islamabad", 
        location: "F-6", 
        rent: 20000, // First house
        rooms: 4, 
        bathrooms: 3, 
        images:"/images/housespics/10.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "Luxury Apartment 2 in F-6", 
        city: "Islamabad", 
        location: "F-6", 
        rent: 50000, // Second house
        rooms: 3, 
        bathrooms: 2,
        images: "/images/housespics/11.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Luxury Apartment 3 in F-6",
        city: "Islamabad",
        location: "F-6",
        rent: 100000, // Third house
        rooms: 4,
        bathrooms: 3,
        images: "/images/housespics/12.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Islamabad - F-7
    {
        title: "Modern Flat 1 in F-7", 
        city: "Islamabad", 
        location: "F-7", 
        rent: 20000, // First house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/13.jpg",
        propertyType: "commercial",
        area: "1-3" 
    },
    {
        title: "Modern Flat 2 in F-7", 
        city: "Islamabad", 
        location: "F-7", 
        rent: 50000, // Second house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/14.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Modern Flat 3 in F-7", 
        city: "Islamabad", 
        location: "F-7", 
        rent: 100000, // Third house
        rooms: 3, 
        bathrooms: 2, 
        images:"/images/housespics/15.jpg",
        propertyType: "residential",
        area: "5-10" 
    },

    // Islamabad - G-10
    {
        title: "Family House 1 in G-10", 
        city: "Islamabad", 
        location: "G-10", 
        rent: 20000, // First house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/16.jpg",
        propertyType: "commercial",
        area: "1-3" 
    },
    {
        title: "Family House 2 in G-10",
        city: "Islamabad", 
        location: "G-10", 
        rent: 50000, // Second house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/17.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Family House 3 in G-10", 
        city: "Islamabad", 
        location: "G-10", 
        rent: 100000, // Third house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/18.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Peshawar - Hayatabad
    {
        title: "Apartment 1 in Hayatabad", 
        city: "Peshawar", 
        location: "Hayatabad", 
        rent: 20000, // First house
        rooms: 3,
        bathrooms: 2, 
        images: "/images/housespics/19.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title:"Apartment 2 in Hayatabad", 
        city: "Peshawar", 
        location: "Hayatabad",
        rent: 50000, // Second house
        rooms: 4,
        bathrooms: 3, 
        images: "/images/housespics/20.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Apartment 3 in Hayatabad", 
        city: "Peshawar", 
        location: "Hayatabad", 
        rent: 100000, // Third house
        rooms: 2, 
        bathrooms: 1, 
        images: "/images/housespics/21.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Peshawar - University Town
    {
        title: "Flat 1 in University Town", 
        city: "Peshawar", 
        location: "University Town", 
        rent: 20000, // First house
        rooms: 2,
        bathrooms:1, 
        images: "/images/housespics/22.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "Flat 2 in University Town", 
        city: "Peshawar", 
        location: "University Town", 
        rent: 50000, // Second house
        rooms: 3, 
        bathrooms: 2, 
        images:"/images/housespics/23.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Flat 3 in University Town", 
        city: "Peshawar", 
        location: "University Town", 
        rent: 100000, // Third house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/24.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Peshawar - Saddar
    {
        title: "House 1 in Saddar",
        city: "Peshawar", 
        location: "Saddar", 
        rent: 20000, // First house
        rooms: 2, 
        bathrooms:1, 
        images: "/images/housespics/25.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "House 2 in Saddar", 
        city: "Peshawar", 
        location: "Saddar", 
        rent: 50000, // Second house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/26.jpg",
        propertyType: "residential",
        area: "3-5" 
    },
    {
        title: "House 3 in Saddar", 
        city: "Peshawar", 
        location: "Saddar", 
        rent: 100000, // Third house
        rooms: 2, 
        bathrooms: 1, 
        images: "/images/housespics/27.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Faisalabad - Johar Colony
    {
        title: "Apartment 1 in Johar Colony", 
        city: "Faisalabad", 
        location: "Johar Colony", 
        rent: 20000, // First house
        rooms: 2, 
        bathrooms: 1,
        images:"/images/housespics/28.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "Apartment 2 in Johar Colony", 
        city: "Faisalabad", 
        location: "Johar Colony", 
        rent: 50000, // Second house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/29.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Apartment 3 in Johar Colony", 
        city: "Faisalabad", 
        location: "Johar Colony", 
        rent: 100000, // Third house
        rooms: 2, 
        bathrooms: 1, 
        images: "/images/housespics/30.jpg",
        propertyType: "residential",
        area: "5-10" 
    },

    // Faisalabad - Peoples Colony
    {
        title: "Flat 1 in Peoples Colony", 
        city: "Faisalabad", 
        location: "Peoples Colony", 
        rent: 20000, // First house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/31.jpg",
        propertyType: "commercial",
        area: "1-3" 
    },
    {
        title: "Flat 2 in Peoples Colony", 
        city: "Faisalabad", 
        location: "Peoples Colony", 
        rent: 50000, // Second house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/32.jpg",
        propertyType: "residential",
        area: "3-5" 
    },
    {
        title: "Flat 3 in Peoples Colony", 
        city: "Faisalabad", 
        location: "Peoples Colony", 
        rent: 100000, // Third house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/33.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Faisalabad - Madina Town
    {
        title: "House 1 in Madina Town",
        city: "Faisalabad", 
        location: "Madina Town", 
        rent: 20000, // First house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/34.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "House 2 in Madina Town", 
        city: "Faisalabad", 
        location: "Madina Town", 
        rent: 50000, // Second house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/35.jpg",
        propertyType: "residential",
        area: "3-5" 
    },
    {
        title: "House 3 in Madina Town", 
        city: "Faisalabad", 
        location: "Madina Town", 
        rent: 100000, // Third house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/36.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Karachi - Clifton
    {
        title: "Apartment 1 in Clifton", 
        city: "Karachi", 
        location: "Clifton", 
        rent: 20000, // First house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/37.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "Apartment 2 in Clifton", 
        city: "Karachi", 
        location: "Clifton", 
        rent: 50000, // Second house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/38.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Apartment 3 in Clifton", 
        city: "Karachi", 
        location: "Clifton", 
        rent: 100000, // Third house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/39.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Karachi - DHA
    {
        title: "Flat 1 in DHA", 
        city: "Karachi", 
        location: "DHA", 
        rent: 20000, // First house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/40.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "Flat 2 in DHA", 
        city: "Karachi", 
        location: "DHA", 
        rent: 50000, // Second house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/41.jpg",
        propertyType: "residential",
        area: "3-5"
    },
    {
        title: "Flat 3 in DHA", 
        city: "Karachi", 
        location: "DHA", 
        rent: 100000, // Third house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/42.jpg",
        propertyType: "residential",
        area: "5-10"
    },

    // Karachi - Gulshan-e-Iqbal
    {
        title: "House 1 in Gulshan-e-Iqbal", 
        city: "Karachi", 
        location: "Gulshan-e-Iqbal", 
        rent: 20000, // First house
        rooms: 3, 
        bathrooms: 2, 
        images: "/images/housespics/43.jpg",
        propertyType: "commercial",
        area: "1-3"
    },
    {
        title: "House 2 in Gulshan-e-Iqbal", 
        city: "Karachi", 
        location: "Gulshan-e-Iqbal", 
        rent: 50000, // Second house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/44.jpg",
        propertyType: "residential",
        area: "3-5" 
    },
    {
        title: "House 3 in Gulshan-e-Iqbal", 
        city: "Karachi", 
        location: "Gulshan-e-Iqbal", 
        rent: 100000, // Third house
        rooms: 4, 
        bathrooms: 3, 
        images: "/images/housespics/45.jpg",
        propertyType: "residential",
        area: "5-10"
    }
]

    await House.insertMany(housesToInsert);
    console.log("45 houses inserted successfully");

    res.status(201).json({ message: "45 houses added successfully!" });
  } catch (error) {
    console.error("Seed error:", error);
    res.status(500).json({ message: "Failed to seed houses", error: error.message });
  }
});

export default router;
