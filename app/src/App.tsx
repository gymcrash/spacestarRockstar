import { useState, useEffect } from 'react';
import './App.scss';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
   <CalculatorPage />
  );
}

export default App;