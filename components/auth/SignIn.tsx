import { Router } from 'next/dist/client/router';
import React, { useContext, useState } from 'react';
import { TokenContext } from '../../lib/contexts/TokenContext';
import { useRouter } from 'next/router';

const SignUp = () => {
  const router = useRouter();
  const { token, setToken } = useContext(TokenContext);

  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setEmail(value);
  };
  const onChangePw = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPw(value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: pw }),
      };
      const response = await fetch(
        'http://localhost:5000/signin',
        requestOptions
      );

      const data = await response.json();

      console.log(data);
      setToken(`Bearer ${data.accessToken}`);
      console.log(token);

      router.push('/note');
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" onChange={onChangeEmail} />
        <input type="password" placeholder="password" onChange={onChangePw} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
