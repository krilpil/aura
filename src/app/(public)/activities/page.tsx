import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { ActivitiesScreen } from '@/screens/ActivitiesScreen';

export const metadata = createPageMetadata('/activities');

export default function ActivitiesPage() {
  return (
    <>
      <StructuredData path="/activities" />
      <ActivitiesScreen />
    </>
  );
}
