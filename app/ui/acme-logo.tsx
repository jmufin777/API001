import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <div>
      <Image
            src="/logo/Logo_25_www.png"
            width={300}
            height={300}
            className='hidden md:block'
            alt="Screen shot of the dashboard"
          />
          <Image
           src="/logo/Logo_25_www.png"
            width={300}
            height={300}
            className='block md:hidden'
            alt="Screen shot of the dashboard"
      />
      </div>
       {/* <p className="text-[44px]">PGRLF</p> */}
    </div>
  );
}
