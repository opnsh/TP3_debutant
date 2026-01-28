import { useState, useEffect } from 'react';

type Status = 'Connecté' | 'Déconnecté';

const StatusToggler: React.FC = () => {
  const [status, setStatus] = useState<Status>('Connecté');
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      setStatus('Déconnecté');
    } else {
      setStatus('Connecté');
    }
    console.log(`Tick ${tick}: Changement de statut simulé.`);
  }, [tick]);

  const bgColor = status === 'Connecté' ? '#4CAF50' : '#F44336';

  return (
    <div style={{
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: bgColor,
      color: 'white',
      textAlign: 'center',
      transition: 'background-color 0.5s ease',
      width: '250px'
    }}>
      <h3 style={{ margin: 0 }}>Statut Service</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{status}</p>
      <small>Dernière mise à jour (tick): {tick}</small>
    </div>
  );
};

export default StatusToggler;