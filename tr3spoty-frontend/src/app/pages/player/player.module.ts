import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule
  ]
})
export class PlayerModule { }
