import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { ModalPage } from '../modal/modal.page';

import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  modalDataResponse: any;
  items = [];
  scrollTo = 120;
  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;

  constructor(public modalController: ModalController,private toastCtrl: ToastController) {
    this.items = Array.from({ length: 500 }).map((_, i) => `Item #${i}`);
  }

  ngOnInit() {
  }

  scrollToIndex() {
    if (this.scrollTo > -1) {
        this.viewPort.scrollToIndex(this.scrollTo, 'smooth');
    }
}

async selectItem(item) {
    const toast = await this.toastCtrl.create({
        message: item,
        duration: 2000
    });
    toast.present();
}

  async initModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

}
