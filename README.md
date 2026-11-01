# Crafix — Railway deployment

This is a self-contained static prototype served by a small Node.js HTTP server.

## Deploy on Railway
1. Create a GitHub repository and upload these files (`index.html`, `package.json`, `server.js`).
2. In Railway, choose **New Project → Deploy from GitHub repo**.
3. Select the repository. Railway detects Node.js and runs `npm start`.
4. In the service settings, open **Networking** and choose **Generate Domain**.
5. Open the generated `*.up.railway.app` URL.

No environment variables are required; Railway supplies `PORT`.

## Prototype limitations
File selection and upload progress are simulated in the browser; files are not stored on a server. Reviewer chat is local to the current page session. AI manuscript generation, authentication, persistent data, real moderation/review, payments, and distribution to bookstores are not connected. Add secure backend services before accepting real users' manuscripts.
