import { Injectable } from '@angular/core';

export interface IconfFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean;
  showUserControl?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakpoint?: number;
  socialIcons?: Array<IconfFiles>;
}

@Injectable()
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconfFiles>();

  configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }

  constructor() { }

}
