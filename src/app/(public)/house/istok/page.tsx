import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { DayHouseScreen } from '@/screens/DayHouseScreen';

export const metadata = createPageMetadata('/house/istok');

export default function Istok() {
  return (
    <>
      <StructuredData path="/house/istok" />
      <DayHouseScreen />
    </>
  );
}
