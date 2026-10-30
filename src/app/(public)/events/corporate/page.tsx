import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { CorporateScreen } from '@/screens/CorporateScreen';

export const metadata = createPageMetadata('/events/corporate');

export default function CorporatePage() {
  return (
    <>
      <StructuredData path="/events/corporate" />
      <CorporateScreen />
    </>
  );
}
