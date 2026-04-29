# 📸 React Image Gallery (Picsum API)

## 🚀 Overview

This project is a **React-based Image Gallery** that fetches images from the Picsum API and displays them in a responsive card layout. It supports pagination with **Next** and **Previous** buttons and shows a loading state while fetching data.

---

## 🛠️ Tech Stack

* ⚛️ React (Hooks: useState, useEffect)
* 📡 Axios (API handling)
* 🎨 Tailwind CSS (Styling)

---

## ✨ Features

* Fetch images dynamically from API
* Pagination support (Next / Prev)
* Loading state handling
* Responsive grid layout
* Reusable Card component
* Clean UI with Tailwind CSS

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── Card.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🔗 API Used

* https://picsum.photos/v2/list

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone <https://github.com/guri5405/reactpropsrepractice/02practiceday2>
```

2. Navigate to the project folder:

```
cd gallery
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

---

## 🧠 How It Works

* `useState` is used to store:

  * `userData` → API response data
  * `index` → current page number

* `useEffect` runs whenever `index` changes and calls the API.

* Axios fetches images using:

```
https://picsum.photos/v2/list?page=${index}&limit=30
```

* While data is loading, a **Loading...** message is displayed.

---

## 📸 UI Behavior

* Displays images in a flexible grid
* Clicking **Next** loads next page
* Clicking **Prev** loads previous page
* Prevents going below page 1
* Clears old data before fetching new data

---

## 🚧 Future Improvements

* Add search functionality
* Add infinite scrolling
* Improve loading skeleton UI
* Add image modal preview
* Optimize performance (memoization)

---

## 👨‍💻 Author

Developed as a practice project to improve:

* API handling
* State management
* Component design
* UI structuring

---

## ⭐ Acknowledgement

Thanks to Picsum for providing free image API.

---
