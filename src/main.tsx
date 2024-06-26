import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from '@/App';
import SignIn from '@/pages/sign-in';
import SignUp from '@/pages/sign-up';
import ForgetPassword from '@/pages/forget-password';
import OTPVerification from '@/pages/otp-verification';
import Dashboard from '@/pages/dashboard';
import Profile from '@/pages/profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'patients',
                element: <div>Patients</div>,
            },
            {
                path: 'messages',
                element: <div>Messages</div>,
            },
            {
                path: 'appointment',
                element: <div>Appointment</div>,
            },
            {
                path: 'medical-history',
                element: <div>Medical History</div>,
            },
        ],
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />,
    },
    {
        path: '/otp-verification',
        element: <OTPVerification />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
