
import { Suspense } from 'react';
import CoinDetails from '../../components/CoinDetails';

type PageProps = {
    params: Promise<{
      coinId: string;
      section: string;
    }>;
  };
  
  export default async function CoinDetailsPage({ params }: PageProps) {
    // Await the params
    const { coinId, section } = await params;
    
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <CoinDetails 
          initialCoinId={coinId || 'bitcoin'} 
          initialSection={section || 'overview'} 
        />
      </Suspense>
    );
  }