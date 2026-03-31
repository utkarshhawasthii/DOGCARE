Referral App — Complete (Signup + Login + Referral list)

Quick start:

1) Start MongoDB locally (e.g., mongod)
2) Server:
   cd server
   cp .env.example .env
   edit .env to set MONGO_URI and JWT_SECRET
   npm install
   npm run dev

3) Client:
   cd client
   npm install
   npm run dev

4) In browser:
   - Signup: http://localhost:5173/ (default Vite port)
   - Login: http://localhost:5173/login
   - Dashboard: http://localhost:5173/dashboard

Notes:
- request-otp is a dummy endpoint (no real SMS) to keep flow simple. You can integrate Twilio/MSG91 later.
- For production hardening, add rate-limits, Redis for OTP, HTTPS, etc.


# Sessions
This project uses cookie-based sessions (express-session + connect-mongo). Set SESSION_SECRET in server .env for production.
