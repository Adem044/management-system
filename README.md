# Doctor's Office Management System

Welcome to the Doctor's Office Management System! This web application allows doctors to manage appointments, patient records, and medical history. 

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)

## Technologies Used

- **TypeScript (TS)**: Provides static typing for enhanced code quality and maintainability.
- **React**: A JavaScript library for building user interfaces.
- **Shadcn/ui**: A component library for building responsive and modern user interfaces.
- **react-query**: For data fetching and state management.
- **firebase**: Backend services for authentication and database.
- **react-router-dom**: A routing library for React applications.
- **react-hook-form**: A library for handling form state and validation.
- **zod**: A TypeScript-first schema declaration and validation library.
- **tailwind**: A utility-first CSS framework for styling.
- **@tanstack/react-table**: A powerful table library for React.

## Features

- **Patient Management**: Keep track of patient records, including personal information, medical history, and appointments.
- **Appointment Scheduling**: Schedule, reschedule, and cancel patient appointments with ease.
- **Chat**: Keep track of messages with patients.
- **User Authentication**: Secure login and user management.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## Installation

To get started with the Doctor's Office Management System, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Adem044/management-system.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd management-system
   ```

3. **Install the dependencies:**
   ```bash
   pnpm install
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

The application should now be running on `http://localhost:5173`.

## Usage

- **Login**: Use your credentials to log in to the system.
- **Dashboard**: View a summary of your schedule, patients, and tasks.
- **Patients**: Manage patient records.
- **Appointments**: View and manage appointments.

## Folder Structure

```
doctor-office-management/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── lib/
│   ├── constants.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── components.json
├── tailwind.config.js
├── vite.config.js
├── .prettierrc.json
├── .commitlintrc.json
├── .eslintrc.cjs
├── .index.html
└── tsconfig.json
```

- **public/**: Contains public assets like images and the HTML template.
- **src/**: Contains the source code for the application.
  - **components/**: Reusable UI components.
  - **pages/**: Individual page components.
  - **lib/**: Utility functions and constants.
- **App.tsx**: The root component of the application.
- **main.tsx**: The entry point for the React application.
