import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { EventScreen } from '@/screens/EventScreen';

export const metadata = createPageMetadata('/events/private');

export default function PrivatePage() {
  return (
    <>
      <StructuredData path="/events/private" />
      <EventScreen event="private" />
    </>
  );
}
