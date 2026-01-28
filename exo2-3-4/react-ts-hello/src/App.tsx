import './App.css'
import UserProfileForm from './UserProfileForm';
import CurrencyConverter from './CurrencyConverter';
import StatusToggler from './StatusToggler';

function App() {
  return (
    <>
      <header style={{ padding: '20px' }}>
        <h1>TP Débutant</h1>
      </header>
      
      <div className="App" style={{ display: 'flex', flexDirection: 'column', gap: '50px', paddingLeft: '40px' }}>
        
        <section>
          <UserProfileForm />
        </section>

        <hr style={{ width: '100%', margin: '0' }} />

        <section>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            <CurrencyConverter />
            <StatusToggler />
          </div>
        </section>

      </div>
    </>
  )
}

export default App;