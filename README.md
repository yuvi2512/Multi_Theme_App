# 🎨 Multi-Theme Switcher React App

A responsive, theme-switchable React application built using **React (Vite)** and **JavaScript**. This app allows users to switch between three distinct themes with different layouts, fonts, colors, and UI structures. Theme preferences are stored using `localStorage`, and global theme management is handled by React’s Context API. It also features routing, animations, and API integration.

---

## 📌 Features

- 🌗 **Three Unique Themes**:
  - **Theme 1 (Default)**: Minimalist layout, light background, sans-serif font.
  - **Theme 2**: Dark mode, sidebar layout, bold serif font.
  - **Theme 3**: Colorful, card-based grid layout with "Pacifico" Google Font.

- 🧠 **Theme Management** with React Context API and `localStorage` persistence.

- 🌐 **Routing** via React Router with 3 pages: `Home`, `About`, and `Contact`.

- 📱 **Responsive Design**: Mobile-first layout that adjusts for all devices.

- 📦 **API Integration** using [Fake Store API](https://dummyjson.com/products) to fetch and display dummy product data.

- 🎨 **CSS Modules** used for scoped styling per theme.

- 💡 **Smooth Theme Transitions** with subtle animations.

- 🔐 **Security Consideration**: All external data sanitized; app structure secure and modular.

---

## 🛠️ Tech Stack

- React + Vite (Frontend)
- JavaScript
- React Router (Routing)
- Context API (State Management)
- localStorage (Persistence)
- CSS Modules (Theming)
- Google Fonts ("Pacifico")
- FakeStore API (Product Data)

## 🧑‍💻 How to Run Locally

# Clone the repository
git clone https://github.com/yuvi2512/Multi_Theme_App/
cd multi-theme-switcher-app

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
