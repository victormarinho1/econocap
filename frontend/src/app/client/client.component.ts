import { Component } from '@angular/core';
import { Header } from "../shared/components/header/header";
import { AdminRoutingModule } from "../admin/admin-routing-module";

@Component({
  selector: 'app-client',
  imports: [Header, AdminRoutingModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {

}
