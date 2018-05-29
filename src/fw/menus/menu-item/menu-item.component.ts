import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {MenuItem, MenuService} from '../../services/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItem;
  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;
  isActiveRoute = false;

  mouseInPopup = false;
  mouseInItem = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(private menuService: MenuService,
              private router: Router) { }

  ngOnInit() {
  }

  onPopupMouseEnter(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    if (!this.menuService.isVertical) {
      if (this.item.submenu) {
        this.mouseInItem = true;
        if (this.parentIsPopup) {
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
    }
  }
}
