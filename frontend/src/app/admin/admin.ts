import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [Header,RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

}
