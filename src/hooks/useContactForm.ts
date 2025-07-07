import { useState } from 'react';
import { submitContactForm, ContactFormData } from '../api/contact';

export const useContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const submit = async (data: ContactFormData) => {
    setStatus('loading');
    
    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const reset = () => {
    setStatus('idle');
    setMessage('');
  };

  return {
    status,
    message,
    submit,
    reset
  };
};