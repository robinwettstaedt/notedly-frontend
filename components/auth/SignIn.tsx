import { Router } from 'next/dist/client/router';
import { useContext, useState, FC } from 'react';
import { TokenContext } from '../../lib/contexts/TokenContext';
import { useRouter } from 'next/router';

const SignUp: FC = () => {
  const router = useRouter();
  const { setToken } = useContext(TokenContext);

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

      const response = await fetch('http://localhost:5000/signin', {
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
