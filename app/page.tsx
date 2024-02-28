import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import { lusitana } from './ui/fonts';
import Image from 'next/image';

import clsx from 'clsx'

export default function Page() {
  return (

    <main className="flex min-h-screen flex-col p-6">

      <div className="dark flex h-20 shrink-0 items-end rounded-lg bg-transparent	 p-4 md:h-52">
        {<AcmeLogo />}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          <p className={`${lusitana.className} text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>Welcome to  API</strong> This is the example for the{' '}
            <a href="https://www.issupport.cz/" className="text-blue-500">
              Is Support
            </a>
            Poradenství, Školení, Webové prezentace
          </p >
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-4/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/logo/cropped-les.jpg"
            width={1000}
            height={760}
            className='hidden md:block'
            alt="Screen shot of the dashboard"
          />
          <Image
            src="/logo/cropped-les.jpg"
            width={1000}
            height={760}
            className='block md:hidden'
            alt="Screen shot of the dashboard"
          />
        </div>
      </div>

    </main>
  );
}
