import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-interpolation',
  imports: [CommonModule, MatDividerModule],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  rollno:number = 1704141729;
  name: string = 'Donka Harshith';
  std : string = '10th class';
  marks: number = 95;
  totalDaysAttended: number = 66;
  totalDays : number = 90;
  dateOfBirth : Date = new Date('2002-05-28');
  mobileNumber : string = '9701134834';
  email : string = 'donkaharshith@gmail.com';
  calculateAge() {
    const today = new Date();
    let years = today.getFullYear() - this.dateOfBirth.getFullYear();
    let months = today.getMonth() - this.dateOfBirth.getMonth();
    let days = today.getDate() - this.dateOfBirth.getDate();
    if (days < 0) {
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += previousMonth;
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
    return `${years}years ${months}months ${days}days`;
  }
  
}
