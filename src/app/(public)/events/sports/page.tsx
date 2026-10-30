import { SportsScreen } from '@/screens/SportsScreen';
import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';

export const metadata = createPageMetadata('/events/sports');

export default function SportsPage() {
  return (
    <>
      <StructuredData path="/events/sports" />
      <SportsScreen />
    </>
  );
}
