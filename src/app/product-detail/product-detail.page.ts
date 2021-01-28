import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  form: FormGroup = new FormGroup({
    img: new FormControl(''),
    title: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl(0),
    desc: new FormControl('')
  });

  imgSelected: any;

  constructor(public modalCtrl: ModalController, private camera: Camera) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  onSaveClick(){
    this.form.get('img').setValue(this.imgSelected);
    this.modalCtrl.dismiss(this.form.value);
  }

  takePicture(){
    const cameraOpts: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(cameraOpts).then(imgData => {
      this.imgSelected = `data:image/jpeg;base64,${imgData}`;
    }, (err) => {
      console.log('Deu ruim aqui: ' + err);
    });
  }
}
