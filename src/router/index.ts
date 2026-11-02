import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/HomePage.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/LoginPage.vue') },
  { path: '/signup', name: 'signup', component: () => import('@/views/SignupPage.vue') },
  { path: '/dashboard', name: 'dashboard', component: () => import('@/views/DashboardPage.vue') },
  { path: '/generate', name: 'generate', component: () => import('@/views/GeneratePage.vue') },
  { path: '/projects', name: 'projects', component: () => import('@/views/ProjectsPage.vue') },
  { path: '/profile/:id', name: 'profile', component: () => import('@/views/ProfilePage.vue'), props: true },
  { path: '/team/manage', name: 'team-manage', component: () => import('@/views/TeamManagePage.vue') },
  { path: '/admin', name: 'admin', component: () => import('@/views/AdminPage.vue') },
  { path: '/pricing', name: 'pricing', component: () => import('@/views/PricingPage.vue') },
  { path: '/docs', name: 'docs', component: () => import('@/views/DocsPage.vue') },
  { path: '/editor', name: 'editor', component: () => import('@/views/EditorPage.vue') },
  { path: '/markdown-display', name: 'markdown-display', component: () => import('@/views/MarkdownDisplayPage.vue') },
  { path: '/pdf-to-markdown', name: 'pdf-to-markdown', component: () => import('@/views/PdfToMarkdownPage.vue') },
  { path: '/handwriting', name: 'handwriting', component: () => import('@/views/HandwritingPage.vue') },
  { path: '/writing-tools/quiz-generator', name: 'quiz-generator', component: () => import('@/views/writing-tools/QuizGeneratorPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
