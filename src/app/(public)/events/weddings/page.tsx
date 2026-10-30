import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { EventScreen } from '@/screens/EventScreen';

export const metadata = createPageMetadata('/events/weddings');

export default function WeddingsPage() {
  return (
    <>
      <StructuredData path="/events/weddings" />
      <EventScreen event="weddings" />
    </>
  );
}
