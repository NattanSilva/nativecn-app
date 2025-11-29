import { Profile } from '@/components/Profile'
import { ToastProvider } from '@/components/Toast'
import '@/styles/global.css'

export default function App() {
  return (
    <ToastProvider position='top'>
      <Profile />
    </ToastProvider>
  )
}
