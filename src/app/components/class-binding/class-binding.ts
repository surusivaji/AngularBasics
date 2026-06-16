import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-class-binding',
  imports: [CommonModule, MatDividerModule],
  templateUrl: './class-binding.html',
  styleUrl: './class-binding.css',
})
export class ClassBinding {
  mainContent = 'mainContent';
  innerContent = 'innerContent';
  textJustify = 'textJustify';
  borderStyle = 'borderStyle';
  myClass = {
    textColor : 'textColor',
    textSize : 'textSize'
  }
}
