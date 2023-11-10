// hooks/useLoginForm.ts
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const validateLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (response?.ok) {
      toast.success('Successful login!');
      // window.location.href = '/dashboard';
      router.push('/dashboard');
    } else {
      toast.error('Incorrect email or password!');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    validateLogin,
  };
};
