interface DollarInputProps {
  amount: number;
  onAmountChange: (value: number) => void;
}

const DollarInput = ({ amount, onAmountChange }: DollarInputProps) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', fontWeight: 'bold' }}>Montant en Dollars ($) :</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(parseFloat(e.target.value) || 0)}
        placeholder="Entrez un montant"
        style={{ padding: '8px', width: '100%', marginTop: '5px' }}
      />
    </div>
  );
};

export default DollarInput;