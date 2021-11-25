import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTokenContext } from '../../lib/contexts/TokenContext';

const SignUp = () => {
  const router = useRouter();
  const { setToken } = useTokenContext();

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

      console.log('Sending request to: ', process.env.API_SERVER_URL);
      const response = await fetch(`${process.env.API_SERVER_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: pw }),
        credentials: 'include',
      });

      const data = await response.json();

      setToken(`Bearer ${data.accessToken}`);

      router.push('/');
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
