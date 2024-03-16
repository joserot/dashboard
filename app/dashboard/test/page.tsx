import TestTable from '@/app/ui/test/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchFilteredCustomers('');

  return (
    <div className="w-full">
      <TestTable customers={customers} />
    </div>
  );
}
