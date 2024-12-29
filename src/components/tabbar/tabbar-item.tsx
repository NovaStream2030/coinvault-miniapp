import type { ReactNode } from 'react';

import { useNavigate } from '@tanstack/react-router';
import { hapticFeedbackImpactOccurred } from '@telegram-apps/sdk-react';
import { Tabbar as TelegramTabbar } from '@telegram-apps/telegram-ui';

export interface TabbarItemProps {
  title: string
  icon: ReactNode
  to: string
  isActive: boolean
}

export function TabbarItem ({ title, icon, to, isActive }: TabbarItemProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    hapticFeedbackImpactOccurred('light')
    return navigate({ to })
  }
  
  return (
    <TelegramTabbar.Item
      text={title}
      selected={isActive}
      onClick={handleClick}
    >
      {icon}
    </TelegramTabbar.Item>
  )
}