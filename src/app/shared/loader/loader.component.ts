import { Component } from '@angular/core';
import { LoaderComponentVars } from './loader.component.vars';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(public loaderVars: LoaderComponentVars){}
}
