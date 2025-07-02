import React from 'react';
import { useNavigate } from 'react-router-dom';

const JoinGameButton: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinGame = async () => {
    try {
      const response = await fetch('/api/join-game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        console.log('Game joined:', data.gameId);
        navigate('/lobby');
      } else {
        console.error('Failed to join game:', data.message);
      }
    } catch (error) {
      console.error('Error joining game:', error);
    }
  };

  return (
    <button
      className="mt-6 px-6 py-3 bg-secondary text-textLight rounded-full text-lg font-semibold transform -rotate-3 hover:rotate-0 transition-transform duration-200"
      onClick={handleJoinGame}
    >
      Join Game
    </button>
  );
};

export default JoinGameButton;