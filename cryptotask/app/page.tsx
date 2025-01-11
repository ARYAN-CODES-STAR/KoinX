import Navbar from './components/Navbar';
import CryptoDashboard from './[coinId]/CryptoDashboard'

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start">
      <Navbar />
      <CryptoDashboard initialCoinId="bitcoin" />
    </div>
  );
}
