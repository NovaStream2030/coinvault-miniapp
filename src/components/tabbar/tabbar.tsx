import { useLocation } from '@tanstack/react-router';
import { Tabbar as TelegramTabbar } from '@telegram-apps/telegram-ui';
import { CircleUserRound, PiggyBank } from 'lucide-react';

import { TabbarItem } from './tabbar-item'

export function Tabbar() {
  const location = useLocation()

  const isIndexActive = location.pathname === '/'
  const isUserActive = location.pathname === '/user'

  return (
    <TelegramTabbar>
      <TabbarItem
        title='Главная'
        icon={<PiggyBank size={28} />}
        isActive={isIndexActive}
        to='/'
      />
      <TabbarItem
        title='Ещё'
        icon={<CircleUserRound size={28} />}
        isActive={isUserActive}
        to='/user'
      />
    </TelegramTabbar>
  )
}