"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract address from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const addressParam = urlParams.get('address');

    if (addressParam) {
      setAddress(addressParam);
      setLoading(false); // Address is immediately available
    } else {
      setLoading(false); // No address in URL
      setError("No address provided.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">SolarLink Funnel</h1>

      {loading && <p>Loading address...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {address && (
        <div className="w-full max-w-4xl rounded-lg shadow-md overflow-hidden">
          <iframe
            src={`https://solar-potential-kypkjw5jmq-uc.a.run.app/?address=${encodeURIComponent(address)}`}
            width="100%"
            height="600"
            style={{ border: "none" }}
          />
        </div>
      )}

      <p className="text-sm text-muted-foreground mt-4">Powered by Walker Power</p>
    </div>
  );
}