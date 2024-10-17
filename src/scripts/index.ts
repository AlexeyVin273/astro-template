import { initModals } from './modules/modals/modals'
import { mobileVhFix } from './utils/mobile-vh-fix'

mobileVhFix()
document.addEventListener(
  'DOMContentLoaded',
  () => {
    initModals()
  },
  true
)
