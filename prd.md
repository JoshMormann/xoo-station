# XooStation Product Requirements Document (PRD)

## Overview
XooStation is a real-time video and GIF sourcing tool for VJs, enabling them to search, preview, and assign media to MIDI pads for live performances. Built as an Electron app, it supports Windows and Mac, integrates with MIDI devices (initially Ableton Push 2), and outputs video via the Syphon spec (Mac) or Spout (Windows). It also features a QR code toggle to display creator credits during live sets.

## Goals
- Enable VJs to source videos and GIFs in real-time from YouTube, Giphy, Vimeo, and Twitch.
- Allow drag-and-drop assignment of media to MIDI pads for triggering via a connected device.
- Provide video mixing with a crossfader and output to external apps (e.g., VDMX, Resolume).
- Display creator credits via a QR code toggle for ethical attribution.

## Target Audience
- VJs and live performance artists who need to source and mix media on the fly.
- Designers and developers at our company, as a proof-of-concept for AI-driven prototyping.

## Key Features
1. **Search and Preview**:
   - Search bar with tabs (e.g., Animation, Music Videos, Movie Trailers).
   - Support for YouTube, Giphy (initially), with Vimeo and Twitch as stretch goals.
   - 4x2 grid to display search results; click to preview in a larger pane.

2. **MIDI Pad Integration**:
   - 8x8 grid (64 pads) to map videos/GIFs, compatible with Ableton Push 2.
   - Drag-and-drop to assign media to pads.
   - Trigger playback via MIDI input (stretch goal for prototype).

3. **Video Playback and Mixing**:
   - Two video players (A and B) for simultaneous playback.
   - Crossfader to blend between A and B.
   - Output via Syphon (Mac) or Spout (Windows) (stretch goal).

4. **Credit Attribution**:
   - QR code toggle to display creator credits (title, creator, URL).
   - Display credits below the QR code.

5. **Preferences/Settings**:
   - Toggle active services (YouTube, Giphy, Vimeo, Twitch).
   - Set log location (local or API).
   - Save locally or push to an API.
   - Credit placement toggle.

## Non-Functional Requirements
- Cross-platform support (Windows, Mac) via Electron.
- Dark theme UI to match the designs.
- Responsive performance for live use (cache media locally to avoid lag).

## Success Metrics
- Build a functional prototype in 1-2 weeks using Cursor and AI assistance.
- Successfully demo XooStation at the hackathon, showing real-time media sourcing and mixing.
- Inspire designers to prototype with AI tools and devs to refine prototypes into production apps.