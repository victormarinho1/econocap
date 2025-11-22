import { Component } from '@angular/core';
import { Header } from "../shared/components/header/header";
import { AdminRoutingModule } from "../admin/admin-routing-module";
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
  selector: 'app-client',
  imports: [Header, AdminRoutingModule, FooterComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {

}
