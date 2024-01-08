import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Table from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/data';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = { title: 'Customers' };

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <Table customers={customers}></Table>
    </div>
  );
}
