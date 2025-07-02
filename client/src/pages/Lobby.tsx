import React, { useState } from 'react';

const emojiList = ['😀', '😂', '😎', '🥳', '🤖', '👻', '🐶', '🐱', '🦄', '🍕', '🌈', '🚀'];

export default function Lobby() {
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(emojiList[0]);
  const [roomCode, setRoomCode] = useState('');
  const [errors, setErrors] = useState<{ nickname?: string; roomCode?: string }>({});

  const validate = () => {
    const newErrors: { nickname?: string; roomCode?: string } = {};
    if (!nickname.trim()) {
      newErrors.nickname = 'Nickname is required.';
    } else if (!/^[\w\s]{2,16}$/.test(nickname.trim())) {
      newErrors.nickname = '2-16 characters, letters/numbers/spaces only.';
    }
    if (!roomCode.trim()) {
      newErrors.roomCode = 'Room code is required.';
    } else if (!/^[A-Z0-9]{4,6}$/.test(roomCode.trim())) {
      newErrors.roomCode = '4-6 letters or numbers (A-Z, 0-9).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: Add socket emit logic
    alert(`Nickname: ${nickname}\nAvatar: ${avatar}\nRoom Code: ${roomCode}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100 transition-all duration-700">
      <div className="w-full max-w-md p-1">
        <form onSubmit={handleSubmit} className="relative bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl px-8 py-10 space-y-7 border border-white/30">
          <div className="flex flex-col items-center mb-2">
            <span className="text-5xl mb-2 animate-bounce">🗯️</span>
            <h1 className="text-4xl font-extrabold text-center mb-2 font-[Comic_Sans_MS,cursive,sans-serif] tracking-tight text-purple-700 drop-shadow-lg">FunnyComments</h1>
            <p className="text-lg text-pink-500 font-semibold mb-2">Join a Room</p>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-700">Nickname</label>
            <input
              type="text"
              className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/70 text-purple-900 placeholder-pink-300 transition-all duration-200 ${errors.nickname ? 'border-pink-400' : 'border-purple-200'}`}
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              maxLength={16}
              required
              placeholder="Enter your nickname"
            />
            {errors.nickname && <p className="text-pink-500 text-sm mt-1">{errors.nickname}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-700">Choose an Avatar</label>
            <div className="flex flex-wrap gap-3 mt-2 justify-center">
              {emojiList.map((emoji) => (
                <button
                  type="button"
                  key={emoji}
                  className={`text-3xl w-12 h-12 flex items-center justify-center rounded-full border-4 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 hover:scale-110 hover:bg-pink-100/80 ${avatar === emoji ? 'border-pink-500 bg-pink-200 scale-110 ring-2 ring-pink-400' : 'border-transparent bg-white/60'}`}
                  onClick={() => setAvatar(emoji)}
                  aria-label={emoji}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-purple-700">Room Code</label>
            <input
              type="text"
              className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/70 text-purple-900 placeholder-yellow-300 uppercase tracking-widest transition-all duration-200 ${errors.roomCode ? 'border-yellow-400' : 'border-purple-200'}`}
              value={roomCode}
              onChange={e => setRoomCode(e.target.value.toUpperCase())}
              maxLength={6}
              required
              placeholder="e.g. ABC123"
            />
            {errors.roomCode && <p className="text-yellow-500 text-sm mt-1">{errors.roomCode}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 hover:from-pink-500 hover:to-purple-400 text-white font-extrabold py-3 rounded-2xl shadow-lg text-lg tracking-wide transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Join Room
          </button>
        </form>
      </div>
    </div>
  );
}
