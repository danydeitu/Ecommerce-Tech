import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ element, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            element={currentUser ? element : <Navigate to="/login" />} // Si el usuario está autenticado, renderiza el elemento, de lo contrario, redirige a la página de inicio de sesión.
        />
    );
}

export default PrivateRoute;
