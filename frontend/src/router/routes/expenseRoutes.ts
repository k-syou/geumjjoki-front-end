import MobileLayout from '@/layouts/MobileLayout.vue'
import ExpenseView from '@/views/ExpenseView.vue'
import Expense_01 from '@/components/pages/expense/Expense_01.vue'
export const expenseRoutes = [
  {
    path: '/expense',
    name: 'expense',
    component: ExpenseView,
    meta: {
      layout: MobileLayout,
      title: '지출내역',
    },
    children: [
      {
        path: '/expense',
        name: 'expense_01',
        component: Expense_01,
      }
    ]
  },
]
