# 🏠 Find & Rent - MERN Stack House Rental Platform

A **full-stack MERN (MongoDB, Express, React, Node.js) application** for searching, filtering, and renting houses.  
Built with **React (Vite)** for the frontend, **Node.js/Express** for the backend, and **MongoDB** for the database.

---

## 🚀 Features

### **Frontend**
- **Dynamic House Search**
  - Filter houses by city, location, property type, price range, area, and rooms.
- **State Management**
  - Context API for storing selected house details.
- **Responsive Design**
  - Clean and user-friendly UI with responsive CSS.
- **Routing**
  - Smooth navigation using `react-router-dom`.

### **Backend**
- **REST API**
  - Fetch house data dynamically from MongoDB.
- **Mongoose Models**
  - Well-structured schema for house properties.
- **Seeding Support**
  - Option to seed initial house data for testing.

---

## 🛠️ Tech Stack

| **Technology** | **Purpose** |
|----------------|-------------|
| **React (Vite)** | Frontend framework |
| **React Router** | Client-side routing |
| **Context API** | State management |
| **CSS** | Styling components |
| **Node.js** | Backend runtime |
| **Express.js** | Server framework |
| **MongoDB + Mongoose** | Database and ODM |
| **React Icons** | Social media and UI icons |

---

## 📂 Project Structure

```bash
Find-Rent/
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/    # Reusable components (HouseCard, Footer, etc.)
│   │   ├── Context/       # RentalContext for global state
│   │   ├── CSS/           # Styling files
│   │   └── main.jsx       # React entry point
│   └── index.html
└── server/                # Backend (Node + Express)
    ├── models/            # Mongoose schemas (House model)
    ├── routes/            # API routes
    ├── server.js          # Main backend server file
    └── config/            # DB connection
```

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/your-username/find-rent.git
cd find-rent
```

### **2️⃣ Setup the Backend**
```bash
cd server
npm install
```
Create a `.env` file in the `server` folder:
```env
MONGO_URI=mongodb://localhost:27017/findrent
PORT=5000
```
Run the backend server:
```bash
npm run dev
```

### **3️⃣ Setup the Frontend**
```bash
cd client
npm install
npm run dev
```

### **4️⃣ Access the App**
Open your browser at:
```
http://localhost:5173
```

---

## 🧩 How It Works

### **Frontend Flow**
- `Housecard.jsx`  
  Fetches all houses → Filters them based on user input → Displays in responsive cards.  
  Clicking **"Rent Now"** stores the selected house in `RentalContext` and navigates to the `/billing` page.

- `Footer.jsx`  
  Provides navigation links, newsletter subscription, and social links.

- `RentalContext.jsx`  
  Acts as a **global state store** to share the selected house details between components like `Housecard` and the billing page.

---

### **Backend Flow**
- `models/House.js`  
  Defines the schema for house details like `title`, `city`, `location`, `rent`, `rooms`, `bathrooms`, `images`, etc.

Example API fetch (from frontend):
```javascript
fetch("http://localhost:5000/api/houses")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🧪 Sample Data
Seed script populates the database with sample houses to test functionality during development.

---

## 🖼️ Screenshots

| Home Page | Filtered Results | Billing Page |
|------------|----------------|--------------|
| *[Add your screenshot here]* | *[Add screenshot]* | *[Add screenshot]* |

---

## 📌 Future Enhancements
- Add user authentication (Login/Register)
- Payment gateway integration
- Admin dashboard for property management
- Image upload for house listings

---

## 🤝 Contributing
Contributions are welcome!  
Fork the repository, make changes, and submit a pull request.

---

## 📜 License
This project is licensed under the **MIT License**.
