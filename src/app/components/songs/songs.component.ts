import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

export class SongsComponent implements OnInit {

  Songs: any = [];

  constructor(private songService: SongService) {
    this.songService.getSongs().subscribe((item) => {
      this.Songs = item;
    });
  }

  ngOnInit() { }

  removeSong(employee, i) {
    if (window.confirm('Are you sure?')) {
      this.songService.deleteSong(employee._id)
        .subscribe((res) => {
          this.Songs.splice(i, 1);
        }
        )
    }
  }

}
