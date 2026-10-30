import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { EventScreen } from '@/screens/EventScreen';

export const metadata = createPageMetadata('/events/graduation');

export default function GraduationPage() {
  return (
    <>
      <StructuredData path="/events/graduation" />
      <EventScreen event="graduation" />
    </>
  );
}
