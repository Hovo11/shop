import announcments from "./announcments";


export default [
  {
    path: '/user/announcments',
    name: 'announcment',
    component: announcments,
    meta: { middleware: ['auth'] }
  },
]
