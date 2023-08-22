import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent  implements OnInit {

  

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  async presentModal(){
    const modal = await this.modalController.create(
      {
        component:ModalComponent,
        cssClass:'my-custom-class2'
      }
    )

    modal.present()

    const {data,role} = await modal.onWillDismiss()

    console.log(role)

    console.log({data})

    // if(role==='confirm'){
    //   this.name="Posted"
    //   this.data = data
    // }
  }

}
