import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstablecimientoPageRoutingModule } from './establecimiento-routing.module';

import { EstablecimientoPage } from './establecimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablecimientoPageRoutingModule
  ],
  declarations: [EstablecimientoPage]
})
export class EstablecimientoPageModule {}
