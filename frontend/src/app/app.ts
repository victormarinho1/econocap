import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/components/header/header";
import { PromotionList } from "./features/promotion-list/promotion-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, PromotionList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
