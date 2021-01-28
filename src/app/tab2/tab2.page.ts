import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductDetailPage } from '../product-detail/product-detail.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  productsList: Array<any> = [{
    img: '../../assets/selten-kit-bolsa-com-carteira-selten-preta-3274-2047664-1-zoom.jpg',
    title: 'Bolsa Preta',
    type: 'Acessórios de Vestuário',
    price: 100,
    desc: 'Bolsa nova, na caixa...'
  }];

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

  constructor(public modalCtrl: ModalController) {}

  async onAddBtnClick(){
    const modal = await this.modalCtrl.create({
      component: ProductDetailPage
    });

    modal.onDidDismiss().then(value => {
      if(value.data)
        this.productsList.unshift(value.data);
    });

    await modal.present();
  }

}
