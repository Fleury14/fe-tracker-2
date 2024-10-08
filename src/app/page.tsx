import EntryForm from '@/app/ui/entry-form';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense>
      <div className="flex flex-col justify-center items-center h-screen font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl m-10">FE Web Tracker</h1>
        <EntryForm />
      </div>
    </Suspense>
  );
}
