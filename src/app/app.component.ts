import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prog Log';

  log = () => {
    console.log('test');
  }
}
