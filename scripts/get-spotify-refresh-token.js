// Helper script to get your initial refresh token
// Run this once: node scripts/get-spotify-refresh-token.js

// This is a one-time setup script to get your refresh token
// You'll need to complete the OAuth flow manually

const CLIENT_ID = process.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.VITE_SPOTIFY_REDIRECT_URI || 'http://localhost:5173/callback';

console.log('\n=== Spotify OAuth Setup ===\n');
console.log('1. Go to this URL in your browser:');
console.log(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user-top-read user-read-recently-played user-read-private`);
console.log('\n2. After authorizing, you\'ll be redirected to your callback URL');
console.log('3. Copy the "code" parameter from the URL');
console.log('4. Exchange it for a refresh token using:');
console.log('   curl -X POST https://accounts.spotify.com/api/token \\');
console.log('     -H "Content-Type: application/x-www-form-urlencoded" \\');
console.log(`     -d "grant_type=authorization_code&code=YOUR_CODE&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&client_id=${CLIENT_ID}&client_secret=YOUR_CLIENT_SECRET"`);
console.log('\n5. Save the refresh_token from the response to your environment variables\n');

