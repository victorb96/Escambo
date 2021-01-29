import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ProductDetailPage } from '../product-detail/product-detail.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  typesList: Array<string> = [
    'Celulares',
    'Móveis',
    'Eletrodoméstico',
    'Utilidades Domésticas',
    'Tv e Vídeo',
    'Informática',
    'Serviços',
    'Comida',
    'Roupas e Calçados',
    'Acessórios de Vestuário',
    'Outros'
  ];

  productsList: Array<any> = [{
    img: '../../assets/download.jpg',
    title: 'Telescópio',
    type: 10,
    price: 300,
    desc: 'Telescópio semi novo...'
  },{
    img: '../../assets/LOT-0020-461_zoom1.jpg',
    title: 'Bolsa',
    type: 9,
    price: 50,
    desc: 'Bolsa rosa com carteira rosa...'
  },{
    img: '../../assets/images.jpg',
    title: 'Marmitex',
    type: 7,
    price: 20,
    desc: 'Vendo marmitex com várias misturas...'
  }];

  constructor(private menuCtrl: MenuController, public modalCtrl: ModalController) {}

  openFirst() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

  openEnd() {
    this.menuCtrl.open('end');
  }

  openCustom() {
    this.menuCtrl.enable(true, 'custom');
    this.menuCtrl.open('custom');
  }

  async onProductClick(prod: any){
    const modal = await this.modalCtrl.create({
      component: ProductDetailPage,
      componentProps: {'data': {...prod, action:'buy-product'}}
    });

    modal.present();
  }
}
