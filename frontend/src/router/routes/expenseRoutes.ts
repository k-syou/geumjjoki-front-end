import MobileLayout from '@/layouts/MobileLayout.vue'
import ExpenseView from '@/views/ExpenseView.vue'

export const expenseRoutes = [
  {
    path: '/expense',
    name: 'expense',
    component: ExpenseView,
    meta: {
      layout: MobileLayout,
      title: '지출내역',
    },
  },
]
