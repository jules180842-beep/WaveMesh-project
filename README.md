# WaveMesh

WaveMesh is a lightweight web app for visualizing audio waveforms and mesh-driven visual effects.

## Quick start
cd frontend
npm install
npm run dev

## Build
npm run build

## Deployment (Vercel)
- Set **Root Directory** to `frontend`
- Build command: `npm run build`
- Output directory: `dist` or `build` depending on toolchain
- Push to `main` to trigger redeploy

## Troubleshooting
- If 404: confirm Vercel root directory and build output
- If git push fails: `git pull --rebase origin main`, resolve conflicts, then push
