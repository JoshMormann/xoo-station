# XooStation Tech Stack Overview

## Framework
- **Electron**: Cross-platform desktop app framework for Windows and Mac.
- **React**: Frontend library for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Media Handling
- **electron-fetch** or **axios**: For querying APIs (YouTube, Giphy, Vimeo, Twitch).
- **video.js**: For video and GIF playback in the app.
- **electron-dl**: For downloading and caching media locally.

## MIDI Integration
- **midi**: Node.js library for MIDI input/output (Ableton Push 2).

## Video Output
- **Syphon** (Mac): For outputting video to external apps (e.g., VDMX, Resolume).
- **Spout** (Windows): Alternative to Syphon for Windows.

## QR Code and Credits
- **qrcode**: Node.js library to generate QR codes for creator credits.

## Storage
- **electron-store**: For saving settings (e.g., active services, log location).
- Local file system for caching media.

## Development Tools
- **Cursor**: AI-powered IDE for code generation and troubleshooting.
- **Grok**: AI assistant for planning, prompting, and debugging.