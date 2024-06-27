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
import EditProfile from '@/pages/edit-profile';
import MedicalHistory from '@/pages/medical-history';
import Patients from '@/pages/patients';
import PatientDetails from '@/pages/patients/id';
import Messages from '@/pages/messages';
import MessageDetails from '@/pages/messages/id';
import Appointments from '@/pages/appointment';

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
                path: 'edit-profile',
                element: <EditProfile />,
            },
            {
                path: 'patients',
                element: <Patients />,
            },
            {
                path: 'patients/:id',
                element: <PatientDetails />,
            },
            {
                path: 'messages',
                element: <Messages />,
            },
            {
                path: 'messages/:id',
                element: <MessageDetails />,
            },
            {
                path: 'appointment',
                element: <Appointments />,
            },
            {
                path: 'medical-history',
                element: <MedicalHistory />,
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
