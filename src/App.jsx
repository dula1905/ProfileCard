
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--card-bg, #f5f6fa)' }}>
      <ProfileCard />
    </div>
  );
}

export default App;
