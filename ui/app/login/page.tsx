import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-5 self-start rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
    >
      <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
    </Link>
  );
}
