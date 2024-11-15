import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Dronz Dashboard',
    default: 'Dronz Dashboard',
  },
  keywords:
    "drone photography, orthomosaic, cloud processing, aerial mapping, drone mapping, geospatial analysis, image processing, UAV photos, mapping software, drone imaging",
  description:
    "Upload your drone photos and let our cloud-based platform process them into high-quality orthomosaics. Effortless mapping and analysis for professionals and enthusiasts alike.",
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}; 
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
