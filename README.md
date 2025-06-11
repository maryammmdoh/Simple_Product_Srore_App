# 🛍️ Simple Product Store App

A basic product management web app using **CRUD operations** where you can **Create**, **Read**, **Update**, and **Delete** products.  
The app uses `localStorage` to save your data without any backend.

---

## 🚀 Features

- ➕ Add a new product (with name, price, category, description, image)
- 🗂 View products in card layout
- 📝 Update any product
- ❌ Delete unwanted products
- 🔍 Real-time search
- ✅ Input validation
- 💾 Saves data locally (localStorage)

---

## 🧠 What is CRUD?

| Operation | Meaning  | Action in This App         |
|-----------|----------|----------------------------|
| C         | Create   | Add a new product          |
| R         | Read     | View all added products    |
| U         | Update   | Edit product details       |
| D         | Delete   | Remove a product           |

---

## 🧪 Input Validation Rules

| Field        | Validation Rule |
|--------------|------------------|
| Name         | Must start with a capital letter and be 3–10 chars (e.g., `TV`, `Mobile`) |
| Price        | Number between 10 and 99999 |
| Category     | Must be one of: Mobile, Screen, TV, Labtop, Accessories |
| Description  | Minimum 4 characters |
| Image        | Required (local path: `/images/filename.jpg`) |

---

## 📷 Example Product Card

Each product displays:

- 📸 Image  
- 🏷 Name  
- 💰 Price  
- 📁 Category  
- 📝 Description  
- ✏️ Update button  
- 🗑️ Delete button  

---

## 🛠️ Built With

- HTML5
- CSS3 + Bootstrap 5
- JavaScript (ES6)
- Font Awesome
- localStorage

---
