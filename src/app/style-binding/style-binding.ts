import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-style-binding',
  imports: [CommonModule, MatDividerModule],
  templateUrl: './style-binding.html',
  styleUrl: './style-binding.css',
})
export class StyleBinding {
  textColor:string = 'blue';
  myStyle = {
    fontSize: '20px',
    color: 'green',
    fontWeight: 'bold',
    marginTop: '5px'
  }
  
}
