Server README
-------------
- Copy .env.example to .env and set MONGO_URI and JWT_SECRET.
- Install dependencies: npm install
- Start dev server: npm run dev


# Sessions
This project uses cookie-based sessions (express-session + connect-mongo). Set SESSION_SECRET in server .env for production.
