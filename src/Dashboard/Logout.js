// Logout.js
import React from 'react';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '../firebase/firebase';


function Logout() {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Logout;
