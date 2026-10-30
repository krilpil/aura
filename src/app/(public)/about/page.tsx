import { createPageMetadata } from '@/shared/seo/config';
import { StructuredData } from '@/shared/seo/StructuredData';
import { AboutScreen } from '@/screens/AboutScreen';

export const metadata = createPageMetadata('/about');

export default function AboutPage() {
  return (
    <>
      <StructuredData path="/about" />
      <AboutScreen />
    </>
  );
}
