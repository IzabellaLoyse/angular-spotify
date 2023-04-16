export const environment = {
  production: false,
};

export const SpotifyConfig = {
  clientId: '97b532113ed447078aabb19414b5a8e0',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-recently-played',
    'user-top-read',
    'user-modify-playback-state',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative',
  ],
};
