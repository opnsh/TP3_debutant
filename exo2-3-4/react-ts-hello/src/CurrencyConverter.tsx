import { useState } from 'react';
import DollarInput from './DollarInput.tsx';
import EuroDisplay from './EuroDisplay.tsx';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '400px' }}>
      <h2>Convertisseur de Devises</h2>
      
      <DollarInput amount={amount} onAmountChange={setAmount} />
      
      <EuroDisplay amount={amount} />
    </div>
  );
};

export default CurrencyConverter;