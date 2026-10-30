import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { HouseScreen } from '@/screens/HouseScreen';

export const metadata = createPageMetadata('/house/istok-old');

export default function IstokArchive() {
  return (
    <>
      <StructuredData path="/house/istok-old" />
      <HouseScreen />
    </>
  );
}
