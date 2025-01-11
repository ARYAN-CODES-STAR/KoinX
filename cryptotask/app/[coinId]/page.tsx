
import CryptoDashboard from './components/CryptoDashboard';

type PageProps = {
    params: Promise<{
      coinId: string;
    }>;
  };
  
  export default async function Page({ params }: PageProps) {
    // Await the params
    const { coinId } = await params;
    
    return (
      <CryptoDashboard 
        initialCoinId={coinId || 'bitcoin'} 
      />
    );
  }