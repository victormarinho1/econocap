import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
@Component({
  selector: 'app-header',
  imports: [Menubar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/admin',
      },
      {
        label: 'Cadastrar',
        icon: 'pi pi-plus',
        items: [
          {
            label: 'Promoção',
            routerLink: 'promotion/new',
          },
          {
            label: 'Produto',
            routerLink: 'product/new',
          },
          {
            label: 'Loja',
            routerLink: 'store/new',
          },
          {
            label: 'Categoria',
            routerLink: 'categorie/new',
          },
        ],
      },
      {
        label: 'Listar',
        icon: 'pi pi-list',
        items: [
          {
            label: 'Promoção',
            routerLink: 'promotion/list',
          },
          {
            label: 'Produto',
            routerLink: 'product/new',
          },
          {
            label: 'Loja',
            routerLink: 'store/new',
          },
          {
            label: 'Categoria',
            routerLink: 'categorie/new',
          },
        ],
      },
    ];
  }
}
