import {MenuItem} from '../fw/services/menu.service';

export let initalMenuItems: Array<MenuItem> = [
  {
    text: 'Dashboard',
    icon: 'glyphicon-dashboard',
    route: 'dashboard',
    submenu: null
  },
  {
    text: 'Countries',
    icon: 'glyphicon-flag',
    route: null,
    submenu: [
      {
        text: 'Select',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
          {
            text: 'USA',
            icon: 'glyphicon-flag',
            route: 'country-detail/USA',
            submenu: null
          },
          {
            text: 'India',
            icon: 'glyphicon-flag',
            route: 'country-detail/India',
            submenu: null
          },
          {
            text: 'Switzerland',
            icon: 'glyphicon-flag',
            route: 'country-detail/Switzerland',
            submenu: null
          },
        ]
      },
      {
        text: 'Top 3',
        icon: 'glyphicon-flag',
        route: 'country-list/3',
        submenu: null
      },
      {
        text: 'Top 10',
        icon: 'glyphicon-flag',
        route: 'country-list/10',
        submenu: null
      },
      {
        text: 'All',
        icon: 'glyphicon-flag',
        route: 'country-list/0',
        submenu: null
      },
    ]
  },
  {
    text: 'Maintenance',
    icon: 'glyphicon-wrench',
    route: null,
    submenu: [
      {
        text: 'Country List',
        icon: 'glyphicon-wrench',
        route: 'country-maint',
        submenu: null,
      },
      {
        text: 'Settings',
        icon: 'glyphicon-wrench',
        route: 'settings',
        submenu: null,
      }
    ]
  },
];


