# Frontend Documentation for 9ANTRATN

## Project Structure

The frontend is a React project built with Vite for fast development and TailwindCSS for styling. Below is an overview of the project structure:

```
client/
├── public/                  # Public assets
│   ├── vite.svg
├── src/                     # Source files
│   ├── assets/              # Static assets (images, icons)
│   │   ├── blue.jpg
│   │   ├── logo.png
│   │   ├── react-cover.jpg
│   │   ├── react.svg
│   ├── components/          # Reusable UI components
│   │   ├── contact-form.jsx
│   │   ├── courses.jsx
│   │   ├── hero.jsx
│   │   ├── navbar.jsx
│   ├── pages/               # Page-level components
│   │   ├── AdminDashboard.jsx
│   │   ├── Login.jsx
│   │   ├── ManageCategories.jsx
│   │   ├── ManageCourses.jsx
│   │   ├── Register.jsx
│   ├── App.css              # Global styles
│   ├── App.jsx              # Main App component
│   ├── index.css            # TailwindCSS setup
│   ├── main.jsx             # Application entry point
├── package.json             # Project metadata and dependencies
├── tailwind.config.js       # TailwindCSS configuration
├── vite.config.js           # Vite configuration
```

---

## Key Components

### 1. **Navbar**
File: `src/components/navbar.jsx`
- Displays the navigation bar.
- Links to pages such as Home, Admin Dashboard, and Login.
- Styled with TailwindCSS for responsiveness.

### 2. **Hero Section**
File: `src/components/hero.jsx`
- Serves as the landing page's introductory section.
- Contains a background image and a call-to-action button.

### 3. **Contact Form**
File: `src/components/contact-form.jsx`
- A reusable form component for user inquiries.
- Includes validation for required fields like name, email, and message.

### 4. **Courses Section**
File: `src/components/courses.jsx`
- Displays a grid of available courses.
- Dynamically populated with data fetched from the backend API.

---

## Page-Level Components

### 1. **Admin Dashboard**
File: `src/pages/AdminDashboard.jsx`
- Central hub for managing the application.
- Contains links to:
  - Manage Categories
  - Manage Courses
- Uses React Router for navigation.

### 2. **Manage Categories**
File: `src/pages/ManageCategories.jsx`
- Displays a table of categories fetched from the backend.
- Allows admins to:
  - Add new categories
  - Delete existing categories

### 3. **Manage Courses**
File: `src/pages/ManageCourses.jsx`
- Displays a table of courses.
- Allows admins to:
  - Add new courses
  - Delete courses
  - Assign categories to courses

### 4. **Login**
File: `src/pages/Login.jsx`
- Provides an authentication interface for admins.
- Includes form validation for email and password fields.

### 5. **Register**
File: `src/pages/Register.jsx`
- Allows new users to create an account.
- Features input validation for name, email, password, and other required fields.

---

## Styles

The project uses TailwindCSS for styling.

### Tailwind Configuration
File: `tailwind.config.js`
- Configured to include all `src/**/*.{js,jsx,ts,tsx}` files for styling.
- Custom colors, spacing, and components can be added as needed.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Project Configuration

### Vite Configuration
File: `vite.config.js`
- Configures the development server and plugins.

### Dependencies

#### Core Libraries:
- `react` and `react-dom`: Core React libraries.
- `react-router-dom`: For routing between pages.
- `axios`: For API requests.

#### Development Tools:
- `vite`: Development server and bundler.
- `tailwindcss`: CSS framework for styling.
- `postcss` and `autoprefixer`: Used with TailwindCSS for processing styles.

### Scripts

Run the following scripts to manage the frontend:

- **Install dependencies:**
  ```bash
  npm install
  ```

- **Start the development server:**
  ```bash
  npm run dev
  ```

- **Build for production:**
  ```bash
  npm run build
  ```

- **Preview production build:**
  ```bash
  npm run preview
  ```

---

## API Integration

The frontend interacts with the backend through API endpoints. Ensure the backend server is running before starting the frontend.

### Axios Setup
Axios is used for making API requests. Example configuration:

