# Electron Preload Sample

This repository demonstrates exposing Node-specific APIs to the renderer process in Electron using a preload script.

Uses Electron 30.0.2 specifically but any recent version should work.

## Usage

```bash
git clone https://github.com/TheKvist/electron-preload-sample
cd electron-preload-sample
npm install
npm start
```

Click the "Write" button in the interface to write a file named `file.txt` to the root of the project directory.