import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  public ngOnInit(): void {
    this.verifyAccessToken();
  }

  public verifyAccessToken(): void {
    const accessToken = this.spotifyService.getAccessToken();

    if (!!accessToken) {
      this.spotifyService.setAccessToken(accessToken);
    }
  }

  public onOpenPageLogin(): void {
    window.location.href = this.spotifyService.getUrlLogin();
  }
}
