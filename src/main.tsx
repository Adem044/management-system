import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from '@/App';
import SignIn from '@/pages/sign-in';
import ForgetPassword from '@/pages/forget-password';
import OTPVerification from '@/pages/otp-verification';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/sign-in',
        element: <SignIn />,
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
