# Crafix — static GitHub Pages prototype

Crafix is a front-end prototype for developing and preparing a book, comic, or graphic novel.

## Run locally

```bash
npm start
```

Then open `http://localhost:3000`.

## Story Reviewer

The Publish flow includes a basic, rules-based Story Reviewer. It examines the story summary and locally selected `.txt` or `.md` files in the browser, then offers simple prompts about story goals, conflict, cause and effect, and endings. The reviewer chat uses predefined guidance based on the question. It does not use an AI model, does not send manuscripts to a server, and does not claim to assess originality or reliably judge dialogue, pacing, or the full quality of a story.

PDF, Word, and image files can be selected and listed, but this static version does not extract their contents. Files are not uploaded or saved to a server. The browser-only review is a starting point, not a substitute for a human editor or reader.

## Other prototype limitations

Authentication, persistent storage, real AI review, payments, moderation, and public distribution to bookstores are not connected. Add secure backend services and appropriate privacy safeguards before accepting real users' manuscripts.
