import { useLocation } from '@tanstack/react-router';
import { Tabbar as TelegramTabbar } from '@telegram-apps/telegram-ui';
import { CircleUserRound, PiggyBank } from 'lucide-react';

import { preparePathname } from '@/shared/lib/router';

import { TabbarItem } from './tabbar-item'

export function Tabbar() {
  const location = useLocation()
  const pathname = preparePathname(location.pathname)

  console.log(location)

  const isIndexActive = pathname === '/'
  const isUserActive = pathname === '/user'

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