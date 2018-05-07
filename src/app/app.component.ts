import { Component } from '@angular/core';

import {FrameworkConfigService} from '../fw/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService) {
    let config: FrameworkConfigService = {
      socialIcons: [
        {imageFile: 'assets/social-fb-bw.png',
          alt: 'Facebook',
          link: 'http://www.facebook.com'},
        {imageFile: 'assets/social-google-bw.png',
          alt: 'Google +',
          link: 'http://www.google.com'},
        {imageFile: 'assets/social-twitter-bw.png',
          alt: 'Twitter',
          link: 'http://www.twitter.com'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);
  }
}
