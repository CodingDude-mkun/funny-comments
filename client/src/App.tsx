import JoinGameButton from './components/JoinGameButton';

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-sticker-dark p-4">
      <div className="bg-sticker-yellow text-sticker-dark p-8 rounded-lg shadow-xl transform rotate-3 border-4 border-sticker-pink">
        <h1 className="text-5xl font-bold mb-4">FunnyComments!</h1>
        <p className="text-xl">Get ready to drop some hilarious comments.</p>
        <JoinGameButton />
      </div>
    </div>
  )
}

export default App
