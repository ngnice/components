import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { Button1Component } from './button1/button1.component';



@NgModule({
  declarations: [ButtonComponent, Button1Component],
  imports: [
    CommonModule
  ]
})
export class ButtonModule { }
