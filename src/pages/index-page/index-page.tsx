import { LargeTitle, Text, List, InlineButtons } from '@telegram-apps/telegram-ui';
import { Coins } from 'lucide-react';
import type { FC } from 'react';

export const IndexPage: FC = () => {
  return (
    <List>
      <div className='w-full space-y-1 mt-8 flex justify-center items-center flex-col'>
        <Text weight='3'>
          Баланс вашего кошелька
        </Text>
        <LargeTitle weight='1'>
          1231 🪙
        </LargeTitle>
      </div>
      <div className='w-full flex justify-center items-center flex-col'>
        <InlineButtons mode='bezeled'>
            {
              [
                <InlineButtons.Item key={1} text='Перевод'>
                  <Coins size={24} />
                </InlineButtons.Item>
              ]
            }
          </InlineButtons>  
      </div>
    </List>
  );
};
