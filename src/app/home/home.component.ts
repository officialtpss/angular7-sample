import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private storage: StorageService,
    private route: Router,

  ) { }

  ngOnInit() {
    this.title.setTitle("Home");
  }
  logout() {
    this.storage.clean();
    this.route.navigate(['/']);
  }
}
