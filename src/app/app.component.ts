import { Component } from '@angular/core';

//Components defined as classes decorated with @Component({}) decorator
@Component({
  selector: 'app-root', //identifier in mark-up
  templateUrl: './app.component.html', //define external template
  styleUrls: ['./app.component.css'] //JavaScript array of styles used
})
export class AppComponent {
  title = 'Connected Healthcare';
  subtitle = 'Dementia Monitoring and Evaluation Dashboard'
}
