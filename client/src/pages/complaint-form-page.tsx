import { ComplaintForm } from '../components/complaint-form';

export function ComplaintFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComplaintForm />
      </div>
    </div>
  );
}