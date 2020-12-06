import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})

export class AddSongComponent implements OnInit {
  songForm: FormGroup;

  constructor(
    private songService: SongService,
    public fb: FormBuilder
  ) {
    this.form()
  }

  ngOnInit() { }

  form() {
    this.songForm = this.fb.group({
      name: [''],
      artist: ['']
    })
  }

  submit() {
    if (!this.songForm.valid) {
      return false;
    } else {
      this.songService.addSong(this.songForm.value)
        .subscribe((res) => {
          console.log(res)
          this.songForm.reset();
        })
    }
  }

}
