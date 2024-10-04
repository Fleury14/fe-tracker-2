import EntryForm from '@/app/ui/entry-form';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>FE Web Tracker</h1>
      <EntryForm />
    </div>
  );
}
