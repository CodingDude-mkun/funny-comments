
# 🎯 FunnyComments – Technical Design Document

---

## 🧩 1. Overview

**FunnyComments** is a real-time multiplayer web game where players join a room created by an admin and write funny comments about a product image or Amazon link. Players vote on the funniest comment, and the top-voted comment wins the round. The game is played in multiple rounds.

---

## 🚀 2. Goals

- ✅ Real-time multiplayer experience (2–8 players)
- ✅ Responsive and smooth on both desktop and mobile
- ✅ No login; nickname and emoji avatar selection
- ✅ Admin-controlled round flow
- ✅ Support media-rich comments (emojis, GIFs, images)
- ✅ Secure, fast, and deployable via Codespaces, Vercel, and Railway

---

## 🏗️ 3. Architecture

### ⚙️ High-Level Stack

| Layer             | Tech                             |
|------------------|----------------------------------|
| Frontend (client) | React + Vite + Tailwind CSS       |
| Backend (server) | Node.js + Express + Socket.io     |
| Realtime Comm.   | WebSockets (Socket.io)            |
| Deployment       | Vercel (frontend), Railway (backend) |
| State Handling   | Zustand or Redux (client), in-memory + RoomManager (server) |
| Media APIs       | Giphy API (GIFs), local file upload |
| Storage (future) | Redis or MongoDB (optional)       |

---

## 📁 4. Project Structure

```
funnycomments/
├── client/                  # Vite + React frontend
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── pages/           # Lobby, Game, Result
│   │   └── sockets/         # Socket handlers
│   └── public/
├── server/                  # Node.js backend
│   ├── sockets/             # Socket event handlers
│   ├── rooms/               # Room and player logic
│   └── utils/
├── epics.yaml               # Agile tracking
└── .devcontainer/           # Codespace config
```

---

## 📡 5. Key Socket Events

### 🔐 Room Lifecycle
- `createRoom (admin)` → `{rounds, timer}`
- `joinRoom (player)` → `{nickname, emoji}`
- `roomState` (server to all) → `{players, round, status}`

### 🕹️ Game Flow
- `startRound (admin)`
- `submitComment` → `{text, media?}`
- `endRound` (server-triggered)

### 🗳️ Voting Phase
- `startVoting`
- `submitVote` → `{commentId}`
- `roundResults` → `{winner, scores}`

### 🔁 Game Control
- `nextRound` (admin)
- `endGame`
- `resetGame`

---

## 👥 6. Data Models (Simplified)

### Room
```ts
{
  code: string;
  adminId: string;
  players: Player[];
  rounds: Round[];
  currentRound: number;
  status: 'lobby' | 'commenting' | 'voting' | 'results' | 'ended';
}
```

### Player
```ts
{
  id: string;
  nickname: string;
  avatar: string; // emoji
  socketId: string;
  score: number;
  voted: boolean;
}
```

### Comment
```ts
{
  id: string;
  playerId: string;
  text: string;
  gif?: string;
  image?: string;
  votes: number;
}
```

---

## 🎨 7. Frontend UI Pages

| Page             | Features                              |
|------------------|----------------------------------------|
| Home / Lobby     | Join/create room, pick nickname/avatar |
| Game Screen      | Show product, comment form, timer      |
| Voting Screen    | Anonymized comments, vote button       |
| Results          | Show winner, scores, confetti          |

---

## 🧪 8. Testing

### Manual
- Lobby with 2–4 players
- Join/leave behavior
- Comment + vote flows
- Score updates
- Mobile responsiveness

### Automated (Future)
- Unit tests (Jest for backend)
- Component tests (Vitest or Playwright for UI)

---

## 🛡️ 9. Security

- Prevent duplicate names or emojis
- Validate all socket actions server-side
- Prevent self-voting
- Optional: IP/session rate-limiting
- Admin-only access to game control events

---

## 🚀 10. Deployment Plan

### Codespaces
- `.devcontainer` with Node.js, ESLint, Prettier, Tailwind plugins

### Vercel
- Frontend auto-deployed on `main` branch

### Railway
- Backend deployed with webhook trigger

### Environment Variables
```
GIPHY_API_KEY=
```

---

## 🧱 11. MVP Milestones

| Milestone | Description                                 |
|-----------|---------------------------------------------|
| M1        | Project setup, Codespace, Hello World       |
| M2        | Room creation/joining, lobby with players   |
| M3        | Admin starts round, comment submission      |
| M4        | Voting + result logic                       |
| M5        | Scoring and round loop                      |
| M6        | UI/UX polish, media support                 |
| M7        | Deployment + testing                        |

---

## 🧩 12. Stretch Features

- Spectator mode
- AI-generated funny comments (e.g., GPT-4 integration)
- Themes or seasonal prompts
- Game replays
- In-game chat or reactions
