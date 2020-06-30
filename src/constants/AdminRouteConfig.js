import React from 'react';
import GroupIcon from '@material-ui/icons/Group';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PostAddIcon from '@material-ui/icons/PostAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


export const AdminRouteContants = {
  ADMIN: '/admin/',
  ADMIN_ARTICLES: '/admin/articles',
  ADMIN_CREATE_ARTICLES: '/admin/create_article',
  ADMIN_USERS: '/admin/users',
  ADMIN_CREATE_USERS: '/admin/create_user',

}


export const AdminRouteConfig = [{
  text: '文章管理',
  path: AdminRouteContants.ADMIN_ARTICLES,
  icon: <MenuBookIcon />

},
{
  text: '添加文章',
  path: AdminRouteContants.ADMIN_CREATE_ARTICLES,
  icon: <PostAddIcon />
},

{
  text: '用户管理',
  path: AdminRouteContants.ADMIN_USERS,
  icon: <GroupIcon />
},

{
  text: '添加用户',
  path: AdminRouteContants.ADMIN_CREATE_USERS,
  icon: <GroupAddIcon />
},

];