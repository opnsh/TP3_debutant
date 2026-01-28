interface EuroDisplayProps {
  amount: number;
}

const EuroDisplay = ({ amount }: EuroDisplayProps) => {
  const TAUX_CONVERSION = 0.92;
  const euros = (amount * TAUX_CONVERSION).toFixed(2);

  return (
    <div style={{ padding: '15px', backgroundColor: '#eef9ef', borderRadius: '5px' }}>
      <p style={{ margin: 0, fontSize: '1.2rem' }}>
        Résultat : <strong>{euros} €</strong>
      </p>
      <small style={{ color: '#666' }}>Taux appliqué : 1$ = 0.92€</small>
    </div>
  );
};

export default EuroDisplay;