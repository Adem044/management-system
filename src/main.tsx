import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initializeApp } from 'firebase/app';

import './index.css';

import Root, { Layout, AuthLayout } from '@/App';
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

import { Toaster } from '@/components/ui/toaster';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                element: <Layout />,
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
                element: <AuthLayout />,
                children: [
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
                ],
            },
        ],
    },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Toaster />
        </QueryClientProvider>
    </React.StrictMode>,
);
