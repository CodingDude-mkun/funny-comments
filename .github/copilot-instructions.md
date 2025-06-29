# GitHub Copilot Agent Instructions for FunnyComments Project

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This project uses GitHub Copilot and Copilot Chat to assist with code generation, documentation, and best practices. Please use Copilot to:

- Generate boilerplate code
- Suggest improvements
- Write tests and documentation

Always review Copilot suggestions for accuracy and security before merging.

## Project Overview

FunnyComments is a real-time multiplayer web game where players join a room, write funny comments about a product image or Amazon link, and vote on the funniest comment. The game is played in multiple rounds, with a focus on real-time interaction, responsive UI, and media-rich comments.

## General Guidelines

- Follow the architecture and requirements in the Technical Design Doc and epics.yml.
- Use best practices for Node.js, Express, Socket.io, React, Vite, and Tailwind CSS.
- Ensure all features are real-time and responsive.
- Prioritize security, validation, and smooth user experience.
- Write clean, maintainable, and well-documented code.
- Use command line tools for setup and development (e.g., `npm`, `yarn`, `vite`, `nodemon`).
- Implement features incrementally, testing thoroughly after each addition.

## Folder Structure

- `client/`: React + Vite frontend
  - `src/components/`: UI components
  - `src/pages/`: Lobby, Game, Result
  - `src/sockets/`: Socket handlers
- `server/`: Node.js backend
  - `sockets/`: Socket event handlers
  - `rooms/`: Room and player logic
  - `utils/`: Utility functions

## Implementation Instructions

### 1. Project Initialization & Tech Stack

- Ensure the tech stack matches the design doc (React, Vite, Tailwind CSS, Node.js, Express, Socket.io).
- Set up Prettier, ESLint, and Tailwind CSS IntelliSense.
- Ensure devcontainer and Codespace support.

### 2. Room & Player Setup

- Implement lobby UI for nickname, emoji avatar, and room code input.
- Backend: Create room with unique code, join room, and maintain room state via Socket.io.
- Prevent duplicate nicknames/avatars and store player info in local/session storage.

### 3. Game Round Flow

- Admin can upload product image or paste Amazon link.
- Display product and game mode to players.
- Start round with server-authoritative countdown timer.
- Players submit comments within timer window; block after timer ends.
- Show submitted comments anonymously.

### 4. Voting Mechanism

- Start voting phase after comment timer ends.
- Players vote on a single comment (not their own); prevent multiple votes.
- Track votes, display results, highlight winner, and update scores.

### 5. Game Modes

- Admin can choose a game mode per round; show mode to all players.
- Store game mode in server state; support random mode selection (optional).

### 6. Comment Enhancements

- Add emoji picker, Giphy API integration for GIFs, and image upload (with restrictions).
- Show comment preview before submission.

### 7. UI/UX and Responsive Design

- Use Tailwind CSS for styling and responsive layouts.
- Add loading indicators, error messages, transitions, and animations (e.g., confetti for winner).

### 8. Scoreboard and Game Completion

- Show scoreboard after each round and final leaderboard at game end.
- Allow admin to start a new game and reset state.

### 9. Security and Anti-Cheating

- Prevent self-voting, duplicate joins, and validate all actions server-side.
- Admin can kick/ban players.

### 10. Testing and QA

- Test with 2–4 players, disconnection/reconnection, and responsiveness.
- Write unit tests for backend logic.

### 11. Deployment and CI/CD

- Set up CI/CD for frontend (Vercel) and backend (Railway/Render).
- Configure environment variables securely.
- Document setup in README.

## Socket Events (Implement as per design doc)

- Room: `createRoom`, `joinRoom`, `roomState`
- Game: `startRound`, `submitComment`, `endRound`
- Voting: `startVoting`, `submitVote`, `roundResults`
- Control: `nextRound`, `endGame`, `resetGame`

## Data Models (Implement as per design doc)

- Room, Player, Comment (see Technical Design Doc for structure)

## MVP Milestones

- Follow the milestone breakdown in the Technical Design Doc for implementation order.

## Stretch Features

- Spectator mode, AI-generated comments, themes, replays, in-game chat (optional, after MVP).

---

**Always refer to the Technical Design Doc and epics.yml for details. Implement features incrementally, test thoroughly, and ensure a seamless multiplayer experience.**
