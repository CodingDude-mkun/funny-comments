import React from 'react';

const JoinGameButton: React.FC = () => {
  return (
    <button className="mt-6 px-6 py-3 bg-sticker-blue text-white rounded-full text-lg font-semibold transform -rotate-3 hover:rotate-0 transition-transform duration-200">
      Join Game
    </button>
  );
};

export default JoinGameButton;