import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '@/pages/register/RegisterPage.vue';
import LoginPage from '@/pages/login/LoginPage.vue';
import EmployeesPage from '@/pages/dashboard/EmployeesPage.vue';
import AttendancePage from '@/pages/dashboard/AttendancePage.vue';
import ForgetPassword from '@/pages/forgetpassword/ForgetPassword.vue';
import ResetPassword from '@/pages/resetpassword/ResetPassword.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  { path: '/forgot-password', name: 'ForgetPasswordPage', component: ForgetPassword },
  { path: '/reset-password', name: 'ResetPasswordPage', component: ResetPassword },
  { path: '/employees', name: 'EmployeesPage', component: EmployeesPage },
  { path: '/attendance', name: 'AttendancePage', component: AttendancePage },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth_token');
  if (to.meta.requiresAuth && !isAuthenticated) next({ name: 'Login' });
  else next();
});

export default router;
