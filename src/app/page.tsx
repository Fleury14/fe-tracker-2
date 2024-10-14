import EntryForm from '@/app/ui/entry-form';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col justify-start items-center font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl m-10">FE Web Tracker</h1>
        <EntryForm />
        
      </div>
      <div className="self-end flex justify-end pb-3 pr-3">
          <p className='text-sm'>Special Thanks to Antidale for the icon.</p>
        </div>
    </div>
    
  );
}
