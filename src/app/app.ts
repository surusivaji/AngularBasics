import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Interpolation } from "./components/interpolation/interpolation";
import { PropertyBinding } from "./property-binding/property-binding";
import { StyleBinding } from "./style-binding/style-binding";
import { ClassBinding } from "./components/class-binding/class-binding";

@Component({
  selector: 'app-root',
  imports: [Header, ClassBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('AngularTopics');
}
