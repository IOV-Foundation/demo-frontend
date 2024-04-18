import { DownloadWallet } from '../ui/DownloadWallet';
import { Notification } from '../ui/Notification';

export default function EmisssionSuccess(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-screen-lg p-8">
      <h1 className="mt-4 p-4 text-center text-3xl">
        Evento para Miembros de CACE
      </h1>
      <p className="pb-8 text-center text-lg">
        Miercoles 23 de Marzo 2024 - Costa Salguero, Buenos Aires
      </p>
      <div className="mt-8 flex flex-col gap-8 xl:flex-row">
        <DownloadWallet />
        <Notification
          title="Hemos emitido su invitación a su billetera digital."
          description="Instrucciones entrada evento"
          type="Success"
        />
      </div>
    </main>
  );
}
