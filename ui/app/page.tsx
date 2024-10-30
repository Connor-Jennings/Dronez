import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* <div className={styles.shape} /> */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-900 p-4 md:h-52">
        {/* <AcmeLogo /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 md:w-2/5 md:px-20">
          <Image
            src="/drone.png"
            width={100} 
            height={100}
            priority
            alt="Drone Logo"
          />
          <a href="https://www.freepik.com/icons/drone">Icon by Freepik</a>
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Dronez.</strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Suspense fallback={<p>Loading video...</p>}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qiPsjSm4lmo?si=wmEQSFS7qpGWtyVI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
