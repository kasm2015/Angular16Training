import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'SampleApplication';

  myBtn: string = 'My Button';

  //Attribute binding
  isDisabled: boolean = false;

  angularImage: string = '../assets/angular.png';
  widthValue : string = "299";

  //style binding
  bgColor: string = "red";
  titleColor : string = "white";
  description: string = 'font-size:40px; color:blue';

  //event binding
  counter: number = 0;

  increamentCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }

  //class binding
  redText : boolean = true;

  redTextWithValue : string = 'yes';

  inputText : string = "sample value";

  message: string = "This message is for ngClass directives";

  classes: string = "danger text-size"

  selectedColor : string = "red";

  structuralDirectives: string = "Structure Directives";
  isLoggedIn: boolean = false;
  username: string = "Syed";

  //Create an array
  names: string[] = ['syed','rajesh','john','venkat','suhail','sujata'];

  grade: string = "sgagd";
}
