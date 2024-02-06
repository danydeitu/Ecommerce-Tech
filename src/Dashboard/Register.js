import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase/firebase';
import { toast } from 'react-toastify';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      toast.success("Registro exitoso");
    
      setEmail('');
      setPassword('');
      setNombre('');
      setTelefono('');
    } catch (error) {
      console.error(error.message);
      toast.error("Error al registrar. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="container" style={{marginTop:"20px"}}>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
          <input type="text" className="form-control" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Número de teléfono</label>
          <input type="tel" className="form-control" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
