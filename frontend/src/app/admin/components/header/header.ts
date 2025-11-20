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
                icon: 'pi pi-home'
            },
            {
                label: 'Cadastrar',
                icon: 'pi pi-plus',
                items:[
                  {
                    label:'Promoção'
                  },
                  {
                    label:'Produto'
                  },
                  {
                    label:'Loja'
                  },
                  {
                    label:'Categoria'
                  }
                ]
            },
            {
                label: 'Listar',
                icon: 'pi pi-list',
                items:[
                  {
                    label:'Promoção'
                  },
                  {
                    label:'Produto'
                  },
                  {
                    label:'Loja'
                  },
                  {
                    label:'Categoria'
                  }
                ]
            }
        ]
    }
}
