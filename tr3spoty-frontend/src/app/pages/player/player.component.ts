import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  constructor(private spotifyService: SpotifyService) {

    this.spotifyService.getQueueSongs().subscribe(
      res => {
        console.log('response',  res)
      }
    )
  }

}
