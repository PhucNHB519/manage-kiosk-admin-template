// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'người dùng',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'kiosk',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'bài đăng',
    path: '/dashboard/post',
    icon: icon('ic_blog'),
  },
  {
    title: 'dịch vụ',
    path: '/dashboard/services',
    icon: icon('ic_cart'),
  },
  {
    title: 'hợp đồng',
    path: '/dashboard/404',
    icon: icon('ic_cart'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
