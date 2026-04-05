# TV Project - iOS Application Structure

## Directory Structure Overview
- `src/components`: Reusable UI components (buttons, cards, search bars).
- `src/services`: API handlers, IAP logic, and local storage (MMKV) services.
- `src/hooks`: Global custom React hooks for global state integration.
- `src/store`: Types and store logic for current selections/watchlists.
- `app/`: Expo main entry points (routing, layouts).

## Local-First Philosophy
- Uses `react-native-mmkv` for high-speed local storage.
- No remote user database. All feature sets (Pro/Free) are managed via local receipt status.
