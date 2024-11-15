import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import DronezLogo from './ui/dronez-logo';

export default function Page() {
  return (
    <>
      <title>Dronez</title>
      {/* <meta
        name="description"
        content="Upload your drone photos and let our cloud-based platform process them into high-quality orthomosaics. Effortless mapping and analysis for professionals and enthusiasts alike."
      /> */}
      <meta
        name="keywords"
        content="drone photography, orthomosaic, cloud processing, aerial mapping, drone mapping, geospatial analysis, image processing, UAV photos, mapping software, drone imaging"
      />
      <meta
        property="og:title"
        content="Transform Your Drone Photos into Stunning Orthomosaics"
      />
      <meta
        property="og:description"
        content="Easily upload your drone images and let our cloud-based platform create high-quality orthomosaics for mapping and analysis."
      />
      <meta
        property="og:image"
        content="https://as1.ftcdn.net/v2/jpg/02/08/14/56/1000_F_208145658_e7XVOacc8yj9MooMplsMfk2eKphM4gcY.jpg"
      />
      <link rel="icon" href="/drone.png" />
      <main className="flex min-h-screen flex-col p-6">
        {/* <div className={styles.shape} /> */}
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
          <DronezLogo />
        </div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 md:w-2/5 md:px-20">
            <p
              className={"text-xl text-gray-800 md:text-3xl md:leading-normal"}
            >
              <strong>Welcome to Dronez.</strong>
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <Suspense fallback={<p>Loading video...</p>}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mvJ6vCAPMz4?si=4f9ZZ4kwKuJ4Fa0N"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
