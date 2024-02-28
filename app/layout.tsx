import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'API ',
  description: 'Monitoring ,interní monitoring subjektů',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  metadataBase: new URL('https://www.issupport.cz/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>

      <body className={`${inter.className} antialiased dark:bg-gray-800`} >{children}</body>

    </html>
  );
}
