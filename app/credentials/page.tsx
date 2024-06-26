import Image from 'next/image';
import { Suspense } from 'react';
import { CredentialsCard } from '../ui/CredentialsCard';
import { CardSkeleton } from '../ui/CardSkeleton';
import { getCredential } from '../lib/data';

export default async function CredentialsPage(): Promise<JSX.Element> {
  const { name, company, role, email } = await getCredential();
  return (
    <main className="mx-auto w-full max-w-screen-xl p-8">
      <div className="flex flex-col rounded-lg bg-gray-100 p-8 shadow">
        <div className="flex flex-col items-center justify-between gap-4 border-b pb-8 lg:flex-row">
          <h2 className="text-3xl">Representante de Miembro</h2>
          <Image src="/logo.png" alt="Logo CACE" width={200} height={200} />
        </div>
        <Suspense fallback={<CardSkeleton />}>
          <CredentialsCard
            name={name}
            company={company}
            role={role}
            email={email}
          />
        </Suspense>
      </div>
    </main>
  );
}
