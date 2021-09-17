import React, { useContext } from 'react';
import { TokenContext } from '../../lib/contexts/TokenContext';

const SignUp = () => {
  const { token, setToken } = useContext(TokenContext);

  const handleLogin = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();

      const target = e.target as typeof e.target & {
        email: { value: string };
        password: { value: string };
        name: { value: string };
      };
      const email = target.email.value;
      const password = target.password.value;
      const name = target.name.value;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password, name: name }),
      };
      const response = await fetch(
        'http://localhost:5000/signup',
        requestOptions
      );

      const data = await response.json();

      setToken(`Bearer ${data.accessToken}`);
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
