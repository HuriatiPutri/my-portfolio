'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function EkycComplete() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  useEffect(() => {
    // Ambil query params dari URL

    console.log('🔍 ekyc-complete page loaded:', {
      status,
      hasParent: globalThis.parent && globalThis.parent != globalThis,
      parentOrigin: globalThis.parent?.location?.origin,
      selfOrigin: globalThis.location.origin,
    });

    // Kirim message ke parent window
    if (globalThis.parent && globalThis.parent != globalThis) {
      // Tentukan target origin berdasarkan environment
      // Development: izinkan localhost:3000 dan self domain
      // Production: hanya self domain
      const targetOrigin = "*";

      const messagePayload = {
        type: 'ekyc-complete',
        status: status || 'failed',
        value: 'completed',
      };

      console.log('📤 Sending postMessage to parent:', {
        message: messagePayload,
        targetOrigin,
      });

      globalThis.parent.postMessage(messagePayload, targetOrigin);

      console.log('✅ postMessage sent!');
    } else {
      console.log('❌ Not in iframe or unable to access parent');
    }
  }, [status]);

  return (
    <div>Loading {status}</div>
  );
}
