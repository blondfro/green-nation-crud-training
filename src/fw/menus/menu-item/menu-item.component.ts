import {Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer} from '@angular/core';
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
              private router: Router,
              private el: ElementRef,
              private renderer: Renderer,
              ) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick(event): void {
    event.stopPropagation();

    if (this.item.submenu) {
      if (this.menuService.isVertical) {
        this.mouseInPopup = !this.mouseInPopup;
      }
    } else if (this.item.route) {
      // force horizontal menus to close by sending a mouseleave event
      let newEvent = new MouseEvent('mouseleave', {bubbles: true});
      this.renderer.invokeElementMethod(
        this.el.nativeElement, 'dispatchEvent', [newEvent]
      );
      this.router.navigate(['/' + this.item.route]);
    }
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
