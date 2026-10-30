import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { RestaurantScreen } from '@/screens/RestaurantScreen';

export const metadata = createPageMetadata('/restaurant');

export default function RestaurantPage() {
  return (
    <>
      <StructuredData path="/restaurant" />
      <RestaurantScreen />
    </>
  );
}
