import React, { useState, useEffect } from 'react';

const Lobby: React.FC = () => {
  const [players, setPlayers] = useState<string[]>(['Player 1', 'Player 2']); // Placeholder for players

  useEffect(() => {
    // In a real application, you would fetch players from the server here
    // For now, we'll just simulate a delay
    const timer = setTimeout(() => {
      setPlayers(['Player 1', 'Player 2', 'Player 3']);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-textLight">
      <div className="bg-accent p-8 rounded-lg shadow-xl border-4 border-primary text-center">
        <h1 className="text-4xl font-bold mb-4">Lobby</h1>
        <p className="text-xl mb-6">Waiting for players to join...</p>

        <h2 className="text-2xl font-semibold mb-3">Players:</h2>
        {players.length === 0 ? (
          <p>No players yet.</p>
        ) : (
          <ul className="list-disc list-inside text-left mx-auto w-fit">
            {players.map((player, index) => (
              <li key={index} className="text-lg">{player}</li>
            ))}
          </ul>
        )}

        <button className="mt-8 px-6 py-3 bg-sticker-blue text-white rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all duration-200">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Lobby;