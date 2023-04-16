import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { SpotifyConfig } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  public spotifyApi!: Spotify.SpotifyWebApiJs;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  public getUrlLogin(): string {
    const authEndpoint = `${SpotifyConfig.authEndpoint}?client_id=${
      SpotifyConfig.clientId
    }&redirect_uri=${
      SpotifyConfig.redirectUrl
    }&scope=${SpotifyConfig.scopes.join(
      '%20'
    )}&response_type=token&show_dialog=true`;

    return authEndpoint;
  }

  public getAccessToken(): string {
    const params = window.location.hash.substring(1).split('&');

    if (!window.location.hash) {
      return '';
    }

    return params[0].split('=')[1];
  }

  public setAccessToken(accessToken: string) {
    this.spotifyApi.setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);
  }
}
