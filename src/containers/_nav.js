export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Perfil',
        to: '/profile/' + JSON.parse(localStorage.getItem('user')).username,
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Base',
        route: '/base',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Breadcrumbs',
            to: '/base/breadcrumbs'
          },
          {
            name: 'Cards',
            to: '/base/cards'
          },
          {
            name: 'Carousels',
            to: '/base/carousels'
          }, 
          {
            name: 'Collapses',
            to: '/base/collapses'
          },
          {
            name: 'Forms',
            to: '/base/forms'
          },
          {
            name: 'Jumbotrons',
            to: '/base/jumbotrons'
          },
          {
            name: 'List Groups',
            to: '/base/list-groups'
          },
          {
            name: 'Navs',
            to: '/base/navs'
          },
          {
            name: 'Navbars',
            to: '/base/navbars'
          },
          {
            name: 'Paginations',
            to: '/base/paginations'
          },
          {
            name: 'Popovers',
            to: '/base/popovers'
          },
          {
            name: 'Progress Bars',
            to: '/base/progress-bars'
          },
          {
            name: 'Switches',
            to: '/base/switches'
          },
          {
            name: 'Tables',
            to: '/base/tables'
          },
          {
            name: 'Tabs',
            to: '/base/tabs'
          },
          {
            name: 'Tooltips',
            to: '/base/tooltips'
          }
        ]
      },
    ]
  }
]