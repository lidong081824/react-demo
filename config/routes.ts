export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/react',
    name: 'React',
    icon: 'crown',
    routes: [
      {
        path: '/react/react-communication',
        name: '组件通讯',
        routes: [
          {
            path: '/react/react-communication/context',
            name: 'context',
            component: './react/context/ClassComponentDemo',
          },
        ],
      },
      {
        path: '/react/errorBoundary/react-ErrorBoundaryMain',
        name: '错误边界',
        component: './react/errorBoundary/ErrorBoundaryMain',
      },
      {
        path: '/react/auto-calc',
        name: '自动计算',
        component: './react/AutoCalc',
      },
      {
        component: './404',
      },
    ],
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
