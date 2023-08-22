import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  @ViewChild('form') form!:NgForm

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  onDismiss(){
    return this.modalController.dismiss(null,'dismiss')
  }

  onPost(){
    // console.log(this.form.value)
     this.modalController.dismiss({
      post:{
        body:this.form.value.body,
        createdAt:new Date()
      }
    },'confirm')
  }

}
