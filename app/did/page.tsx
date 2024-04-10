'use client';

import toast from 'react-hot-toast';
import { useState } from 'react';
import Image from 'next/image';
import { getErrorMessage } from '../lib/errorHandler';

export default function Did(): JSX.Element {
  const [did, setDid] = useState('');

  async function handleSubmit(): Promise<void> {
    const { DidJwk } = await import('@web5/dids');
    try {
      // Creates a DID using the did:jwk method
      const didJwk = await DidJwk.create();

      // DID and its associated data which can be exported and used in different contexts/apps
      // const portableDid = await didJwk.export();

      // DID string
      const didUri = didJwk.uri;
      setDid(didUri);

      // DID Document
      // const didDocument = didJwk.document;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    }
  }
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center lg:w-1/2">
      <h1 className="mb-8 text-2xl">View Public DID</h1>
      <p className="mb-8">
        This is your public facing Descentrilized Identifier (DID) created by
        the wallet, you can share this with others so they can send you private
        message and create credentials that you can prove ownership over.
      </p>
      {did ? (
        <div className="flex flex-col items-center md:flex-row">
          <p className="flex items-center break-all bg-gray-100 p-4">{did} </p>
          <button
            type="button"
            className="p-4 text-black"
            onClick={() => {
              void navigator.clipboard.writeText(did);
              toast.success('DID copied to clipboard');
            }}
          >
            <Image
              src="/cc.png"
              alt="Copy to Clipboard"
              width={50}
              height={50}
            />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="mt-4 w-full rounded bg-cace-primary px-6 py-4 text-center text-white md:w-auto"
          onClick={(e) => {
            e.preventDefault();
            void handleSubmit();
          }}
        >
          Generate DID
        </button>
      )}
    </div>
  );
}
