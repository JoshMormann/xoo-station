# XooStation Frontend/Backend Guidelines

## Frontend Guidelines
- **Framework**: Use React for all UI components.
- **Styling**: Use Tailwind CSS exclusively for styling. Follow the dark theme from the designs.
- **Component Structure**:
  - Break the UI into reusable components (e.g., `SearchBar.js`, `MediaGrid.js`, `MidiGrid.js`).
  - Use functional components with hooks (e.g., `useState`, `useEffect`).
- **State Management**:
  - Use React’s built-in hooks for state (e.g., `useState` for search results, `useReducer` for complex state like MIDI pad assignments).
  - Avoid external state libraries (e.g., Redux) for the prototype.
- **Drag-and-Drop**: Use `react-dnd` for drag-and-drop functionality between the media grid and MIDI pads.

## Backend Guidelines
- **Electron Main Process**:
  - Handle API calls, MIDI input, and video output in the main process.
  - Use `ipcMain` and `ipcRenderer` for communication between main and renderer processes.
- **API Calls**:
  - Use `electron-fetch` or `axios` for API requests.
  - Cache API responses locally using the file system to avoid repeated calls.
- **MIDI**:
  - Use the `midi` library for MIDI input.
  - Map Ableton Push 2’s 8x8 grid (MIDI notes 36-99) to the MIDI pad grid.
- **Video Output**:
  - Implement Syphon (Mac) and Spout (Windows) in the main process.
  - For the prototype, focus on local preview; add Syphon/Spout as a stretch goal.

## General Guidelines
- **File Naming**: Use PascalCase for React components (e.g., `SearchBar.js`), kebab-case for other files (e.g., `utils/api-calls.js`).
- **Error Handling**: Add basic error handling for API calls (e.g., show a “Failed to load” message in the UI).
- **Performance**: Cache media locally to ensure smooth playback during live use.
