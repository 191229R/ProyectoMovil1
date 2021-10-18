import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacionCorreoPageRoutingModule } from './recuperacion-correo-routing.module';

import { RecuperacionCorreoPage } from './recuperacion-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacionCorreoPageRoutingModule
  ],
  declarations: [RecuperacionCorreoPage]
})
export class RecuperacionCorreoPageModule {}
