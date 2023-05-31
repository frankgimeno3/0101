import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const [country, setCountry] = useState('');

  const handleRegister = () => {
    // Aquí puedes implementar la lógica de registro seguro
    console.log('Registro seguro:', email, password, accountType, country);
  };

  return (
    <div className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-4xl">Crear cuenta</h1>

      <input
        type="email"
        placeholder=" Introducir Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 m-2 border border-gray-300 rounded-md"
      />

      <input
        type="password"
        placeholder="Introducir Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 m-2 border border-gray-300 rounded-md"
      />

      <select
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
        className="p-2 m-2 border border-gray-300 rounded-md"
      >
        <option value="">Seleccione tipo de cuenta</option>
        <option value="empresa">Empresa</option>
        <option value="profesional">Profesional</option>
      </select>

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="p-2 m-2 border border-gray-300 rounded-md"
      >
        <option value="">Seleccione país</option>
        <option value="país1">País 1</option>
        <option value="país2">País 2</option>
      </select>

      <button
        onClick={handleRegister}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Registrar
      </button>
    </div>
  );
}