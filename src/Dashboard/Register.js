import React, { useState } from 'react';
import { auth } from '../firebase/firebase';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);

      // Agrega el nombre y el teléfono al perfil del usuario
      await userCredential.user.updateProfile({
        displayName: name,
        phoneNumber: phone
      });

      // Obtén los datos actualizados del usuario
      const user = auth.currentUser;
      console.log('Usuario registrado:', user);

      // Limpiar los campos después del registro
      setEmail('');
      setPassword('');
      setName('');
      setPhone('');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="tel" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
