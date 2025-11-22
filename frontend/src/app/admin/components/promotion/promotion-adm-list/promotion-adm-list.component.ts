import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
interface City {
    name: string;
    code: string;
}
@Component({
  selector: 'app-promotion-adm-list',
  imports: [FormsModule, Select, ReactiveFormsModule],
  templateUrl: './promotion-adm-list.component.html',
  styleUrl: './promotion-adm-list.component.css',
})
export class PromotionAdmListComponent {
teste() {
console.log(this.selectedCity)}
cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}
