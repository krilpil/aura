import { Hero } from '@/widgets/Hero';
import { ShortActions } from '@/widgets/ShortActions';

import { SHomeScreen } from './homeScreen.styles';

export const HomeScreen = () => {
  return (
    <SHomeScreen>
      <Hero />
      <ShortActions />
    </SHomeScreen>
  );
};
