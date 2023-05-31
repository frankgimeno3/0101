import { Inter } from 'next/font/google';
import { useState, ChangeEvent, FormEvent } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function IniciarSesion() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí puedes implementar la lógica de inicio de sesión seguro
  };

  return (
    <div className="flex min-h-screen flex-col items-center  pt-24 text-center">
      <h1 className="text-4xl mb-10">Iniciar sesión</h1>

      <form onSubmit={handleLogin} >
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-lg font-medium">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}