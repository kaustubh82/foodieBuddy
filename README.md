# **Full-Stack Project Proposal (Updated as per Instructor Requirements)**  
## **Project Title:** QuickBite – Online Food Delivery Platform  

---

## **1. Project Overview**  
QuickBite is a full-stack food delivery platform where users can browse restaurants, explore menus, place orders, and track delivery status in real time. The application demonstrates full CRUD operations (POST, GET, PUT, DELETE) for all major entities except authentication APIs. It also includes a structured backend router system, dynamic frontend data fetching, search, filtering, sorting, and pagination.

---

## **2. Key Features**

---

### **Frontend (React.js)**
- **Routing:** Built using React Router with multiple pages:  
  - Home  
  - Restaurant List  
  - Menu  
  - Cart  
  - Orders  
  - Profile  
  - Restaurant Dashboard  
  - Admin Dashboard  
- **Dynamic Data Fetching:** Implemented across most pages using Axios.  
- **Filtering, Searching & Sorting:** Added on restaurant list and order pages.  
- **Responsive UI:** Styled using TailwindCSS.  

---

### **Backend (Node.js + Express.js)**

- **Authentication & Authorization:**  
  JWT-based authentication with role-based access (Customer, Restaurant Owner, Admin).

- **Dedicated Router Files:**  
  - `/routes/userRoutes.js`  
  - `/routes/restaurantRoutes.js`  
  - `/routes/menuRoutes.js`  
  - `/routes/orderRoutes.js`  
  - `/routes/authRoutes.js`  

---

## **CRUD Operations (Excluding Auth APIs)**  

### **1. Users**
- `POST /users`  
- `GET /users/:id`  
- `PUT /users/:id`  
- `DELETE /users/:id`  

### **2. Restaurants**
- `POST /restaurants`  
- `GET /restaurants`  
- `GET /restaurants/:id`  
- `PUT /restaurants/:id`  
- `DELETE /restaurants/:id`  

### **3. Menu Items**
- `POST /menus`  
- `GET /menus/:restaurantId`  
- `PUT /menus/:id`  
- `DELETE /menus/:id`  

