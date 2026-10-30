import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { HomeScreen } from '@/screens/HomeScreen';

export const metadata = createPageMetadata('/');

export default function Home() {
  return (
    <>
      <StructuredData path="/" />
      <HomeScreen />
    </>
  );
}
