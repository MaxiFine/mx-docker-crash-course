# Section 4: Single vs Multi‑Stage Docker Builds (Beginner Guide)

This folder demonstrates building and running a simple Node.js app using both single‑stage and multi‑stage Docker images, plus Docker Compose variants. Follow this guide to replicate and run everything on Windows with Docker Desktop.

## Prerequisites
- Docker Desktop (Windows) with Docker Compose v2
- Optional: Node.js 18+ (to run the app locally)
- A terminal (PowerShell or Command Prompt)

## Quick Start (Docker Compose)
Run the app using the provided Compose files.

```powershell
# From the repo root, navigate into the folder
cd udemy-courses/section-4-demo-practice

# Single-stage image via Compose
docker compose -f single-stage.yml up --build

# Or: Multi-stage image via Compose
docker compose -f multi-stage.yml up --build

# Stop containers
docker compose down
```

Find which port is exposed/mapped:
```powershell
docker ps --format "table {{.Names}}\t{{.Ports}}"
```
Open your browser to the printed host port (e.g., http://localhost:3000 if mapped).

## Manual Build & Run (without Compose)
Build directly from the Dockerfiles in the `docker/` directory.

```powershell
cd udemy-courses/section-4-demo-practice

# Build single-stage image
docker build -f docker/Dockerfile.singlestage -t section4/single .

# Run single-stage container (adjust host port if needed)
docker run -p 3000:3000 --name section4-single section4/single

# Build multi-stage image
docker build -f docker/Dockerfile.multistage -t section4/multi .

# Run multi-stage container (adjust host port if needed)
docker run -p 3000:3000 --name section4-multi section4/multi
```
If the app uses a different port, check the Dockerfile `EXPOSE` or the Compose `ports` section and update the `-p` mapping accordingly.

## Run Locally (no Docker)
```powershell
cd udemy-courses/section-4-demo-practice/node_project
npm install
node app.js
```
Then visit the printed local port (commonly http://localhost:3000).

## What’s the Difference?
- Single‑stage build: Everything (source + build tools) ends up in the final image. Simple, but larger images.
- Multi‑stage build: Uses a builder image, then copies only production artifacts into a minimal final image. Smaller, faster, and typically more secure.

## Project Structure
- [udemy-courses/section-4-demo-practice/single-stage.yml](udemy-courses/section-4-demo-practice/single-stage.yml): Compose for single‑stage build/run.
- [udemy-courses/section-4-demo-practice/multi-stage.yml](udemy-courses/section-4-demo-practice/multi-stage.yml): Compose for multi‑stage build/run.
- [udemy-courses/section-4-demo-practice/docker/Dockerfile.singlestage](udemy-courses/section-4-demo-practice/docker/Dockerfile.singlestage): Single‑stage Dockerfile.
- [udemy-courses/section-4-demo-practice/docker/Dockerfile.multistage](udemy-courses/section-4-demo-practice/docker/Dockerfile.multistage): Multi‑stage Dockerfile.
- [udemy-courses/section-4-demo-practice/node_project](udemy-courses/section-4-demo-practice/node_project): Simple Node.js app (`app.js`, `package.json`).

## Cleanup
```powershell
# Stop and remove containers and networks
cd udemy-courses/section-4-demo-practice
docker compose down -v

# Remove manual containers/images if needed
docker rm -f section4-single, section4-multi
docker rmi section4/single, section4/multi
```

## Troubleshooting
- Port already in use: Change the host port in `-p` or Compose `ports`.
- Rebuilding not picking changes: Use `--no-cache` on `docker build` or `--build` with Compose.
- Windows/WSL2 file sharing: Ensure the project folder is shared in Docker Desktop settings if volume mounts are used.
- Check logs: `docker logs <container-name>` to see app output.

## Next Steps
- Try both Compose files to compare single vs multi‑stage sizes and startup behavior.
- Experiment with adding dev dependencies to see how multi‑stage keeps the final image slim.