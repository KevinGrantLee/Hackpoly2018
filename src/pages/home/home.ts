import { Component } from '@angular/core';
//import { ToastController, ToastOptions, NavController } from 'ionic-angular';
//import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

constructor(public loadingCtrl: LoadingController) {

  }

presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'WRONG YOU SUCK'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 3000);
}

presentLoadingCustom() {
  let loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`,
    duration: 4000
  });

  loading.onDidDismiss(() => {
    console.log('Dismissed loading');
  });

  loading.present();
} //tailor for wrong answers

presentLoadingText() {
  let loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: 'WRONG YOU SUCK'
  });

  loading.present();

  setTimeout(() => {
    this.nav.push(Page2);
  }, 1000);

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
/*  toastOptions: ToastOptions
  constructor(private toast: ToastController, public navCtrl: NavController }
    this.toastOptions = {
      message: 'WRONG YOU SUCK',
      position: 'top',
      duration: 500
    }
}
*/
sleep(milliseconds) {
 var start = new Date().getTime();
 for (var i = 0; i < 1e7; i++) {
   if ((new Date().getTime() - start) > milliseconds){
     break;
   }//endif
 }//endfor
}//endfunc
/*
showToast() {
  this.toast.create(this.toastOptions).present();
  //this.sleep(3000);
}
*/


//evaluateAnswer() {
  //var input = value in box
  //var answer = value from database
  //if (input != answer)
    //presentLoadingCustom
  //if (input == answer) {
    //increment points
    //if (points == 5)
      //end game
    //else go to next song
    //}
//}

} //endpage
