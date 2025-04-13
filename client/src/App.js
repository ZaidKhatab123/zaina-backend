import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', backgroundColor: '#fff7f0', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ color: '#B86C46' }}>🍪 Welcome to Zaina Cake Shop!</h1>
      <p style={{ color: '#B86C46', fontSize: '1.2rem' }}>
        Delicious cookies made with love. Place your order and enjoy sweet moments!
      </p>
      <button style={{ padding: '10px 20px', backgroundColor: '#F9D8B2', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '1rem' }}>
        View Menu
      </button>
    </div>
  );
}

export default App;
