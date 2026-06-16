import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-property-binding',
  imports: [CommonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  imgSource: string = 'https://pbs.twimg.com/media/E00T_mxXMAEVmx_.jpg';
  alternateName: string = 'cannon bolt';
  imageId: string = 'image';
  showPassword: string = 'password';
  buttonName: string = 'Show Password';
  isOnline: boolean = true;
  hideAndShowPassword() {
    if (this.showPassword==='password') {
      this.showPassword = 'text';
      this.buttonName = 'Hide Password';
    }
    else {
      this.showPassword = 'password';
      this.buttonName = 'Show Password';
    }
  }
}
