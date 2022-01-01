import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTokenContext } from '../../lib/contexts/TokenContext';
import { authEndpoints } from '../../lib/constants/endpoints';
import axios from 'axios';
import useAuth from '../../lib/hooks/useAuth';

const SignUp = () => {
  const router = useRouter();
  const { mutateToken } = useAuth();

  const [username, setUsername] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const onChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUsername(value);
  };
  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setName(value);
  };
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

      const response = await axios.post(authEndpoints.signUp, {
        username: username,
        firstName: name,
        email: email,
        password: pw,
      });

      await mutateToken(response.data);

      router.push('/');
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" onChange={onChangeUsername} />
        <input type="text" placeholder="name" onChange={onChangeName} />
        <input type="email" placeholder="email" onChange={onChangeEmail} />
        <input type="password" placeholder="password" onChange={onChangePw} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
