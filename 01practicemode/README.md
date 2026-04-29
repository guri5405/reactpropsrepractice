# 🚀 React User Segmentation UI

## 📌 Overview

This project is a **React-based UI application** that displays different categories of users using reusable components. It focuses on **component design, props handling, and clean UI structuring**.

The app showcases user segments like **Satisfied**, **Underserved**, and **Underbanked** with images and organized sections.

---

## 🛠️ Tech Stack

* ⚛️ React (Functional Components)
* 🎯 Props for data passing
* 🎨 Tailwind CSS (for styling)

---

## ✨ Features

* Reusable component architecture
* Dynamic data rendering using props
* Clean and structured UI sections
* User categorization display
* Scalable project structure

---

## 📂 Project Structure

```id="1a2b3c"
src/
│
├── components/
│   ├── Section1/
│   │   └── Section1.jsx
│   │
│   ├── Section2/
│   │   └── Section2.jsx
│
├── App.jsx
└── main.jsx
```

---

## 📊 Data Structure

The app uses a static array of user objects:

```id="4d5e6f"
const users = [
  {
    img: "image_url",
    intro: "",
    tag: "Satisfied"
  },
  {
    img: "image_url",
    intro: "",
    tag: "Underserved"
  },
  {
    img: "image_url",
    intro: "",
    tag: "Underbanked"
  }
];
```

---

## 🧠 How It Works

* `App.jsx` acts as the main container.
* User data is stored in an array and passed to `Section1` via props.
* `Section1` dynamically renders user cards.
* `Section2` can be used for additional UI or content sections.

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone <https://github.com/guri5405/reactpropsrepractice>
```

2. Navigate to the project folder:

```
cd 01practicemode
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

## 🎯 Learning Outcomes

This project helps in understanding:

* Component-based architecture
* Props drilling and data flow
* UI structuring in React
* Writing clean and reusable code

---

## 🚧 Future Improvements

* Add animations for better UX
* Include dynamic API-based data
* Add filtering based on user category
* Improve responsiveness for all devices

---

## 👨‍💻 Author

Built as a practice project to strengthen React fundamentals and UI development skills.

---

## ⭐ Conclusion

A simple yet effective project to understand how **React components and props work together** to build scalable user interfaces.

---
