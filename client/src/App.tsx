import JoinGameButton from './components/JoinGameButton';

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-accent text-textDark p-8 rounded-lg shadow-xl transform rotate-3 border-4 border-primary">
        <h1 className="text-5xl font-bold mb-4">FunnyComments!</h1>
        <p className="text-xl">Get ready to drop some hilarious comments.</p>
        <JoinGameButton />
        <button onClick={async () => {
          try {
            const response = await fetch('/api/health');
            const data = await response.json();
            console.log('Health check:', data);
          } catch (error) {
            console.error('Health check error:', error);
          }
        }}>Check Health</button>
      </div>
    </div>
  )
}

export default App
