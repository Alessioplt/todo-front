import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const token = sessionStorage.getItem('token');

    return (
        token ? <Outlet /> : <Navigate to="/" replace />
    );
};

export default PrivateRoutes;
