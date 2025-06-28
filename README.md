
# 🗯️ FunnyComments

> A real-time multiplayer web game where players compete to write the funniest comment about a product or image. Each round is full of laughs, GIFs, emojis, and quick thinking!

![FunnyComments Screenshot](https://via.placeholder.com/800x300.png?text=FunnyComments+Gameplay+Preview)

---

## 🎯 About

**FunnyComments** is a party-style web game where:
- An admin creates a game room.
- Players join with a nickname and emoji avatar.
- A product image or Amazon link is shown.
- Players submit funny comments under a countdown timer.
- Everyone votes for the funniest comment.
- Points are awarded, and the next round begins!

Perfect for remote game nights, team bonding, or casual fun.

---

## ✨ Features

- 🔒 Room-based private multiplayer
- 😂 Real-time funny comment writing & voting
- 🕒 Timed rounds controlled by admin
- 📸 Support for images, GIFs, and emojis
- 🧠 Game modes (e.g., themed rounds)
- 🏆 Scoreboard and round winners
- 🎉 Confetti and animations for winning moments
- 💻 Desktop-first responsive UI

---

## 🧰 Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React + Vite + Tailwind CSS          |
| Backend    | Node.js + Express + Socket.io        |
| Realtime   | WebSockets (Socket.io)               |
| Deployment | Vercel (frontend), Railway (backend) |
| Media API  | Giphy API for GIF support            |
| Dev Env    | GitHub Codespaces + Dev Containers   |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/funnycomments.git
cd funnycomments
```

### 2. Setup Environment

#### Codespaces (Recommended)
Click the **[Code → Open with Codespaces]** button and GitHub will launch your dev container with everything preinstalled.

#### Local Development

**Frontend**
```bash
cd client
npm install
npm run dev
```

**Backend**
```bash
cd server
npm install
npm run dev
```

### 3. Create `.env` Files

**For `client/.env`:**
```env
VITE_GIPHY_API_KEY=your_giphy_key
```

**For `server/.env`:**
```env
PORT=3001
```

---

## 📦 Folder Structure

```
funnycomments/
├── client/        # React + Tailwind frontend
├── server/        # Express + Socket.io backend
├── diagrams/      # System architecture diagrams
├── epics.yaml     # Agile tracking (epics + stories)
└── .devcontainer/ # Codespaces setup
```

---

## 🧪 Testing Plan

- Manual testing with 2–4 players in lobby
- Mobile + desktop responsiveness
- Edge case handling (disconnect, duplicate votes)
- Unit tests (backend logic)
- Component tests (client UI - future)

---

## 📸 Screenshots & Diagrams

| Game Flow | Socket Event Flow |
|-----------|-------------------|
| ![Game Flow](diagrams/game_flow_diagram.png) | ![Socket Events](diagrams/socket_flow_diagram.png) |

---

## 🛡 Security Considerations

- Vote validation (no voting on own comment)
- Server-side enforcement of room state
- Duplicate player/session protection
- Player moderation (admin-only controls)

---

## 🧱 Roadmap

- [x] Admin + player room logic
- [x] Comment + voting phase
- [x] Scoring and round loop
- [ ] Game mode system
- [ ] Spectator view
- [ ] Mobile UI polish
- [ ] AI-generated comments (GPT)

---

## 👥 Contributing

Contributions are welcome! Here's how to get started:
1. Fork this repo
2. Create a new branch: `feat/your-feature-name`
3. Commit your changes with clear messages
4. Open a Pull Request 🙌

---

## 📄 License

MIT License. Feel free to fork and remix it for your own game night or hackathon!

---

## ❤️ Acknowledgements

Built with ❤️ for the joy of creativity, laughter, and playful competition.

> "A little nonsense now and then, is relished by the wisest men." – Roald Dahl
