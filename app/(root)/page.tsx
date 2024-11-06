import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { demoUser, demoAccounts, demoTransactions } from '@/lib/demoData';

const Home = async ({ searchParams: { page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const totalCurrentBalance = demoAccounts.reduce((acc, account) => acc + account.currentBalance, 0);

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={'Salah'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={demoAccounts}
            totalBanks={demoAccounts.length}
            totalCurrentBalance={totalCurrentBalance}
          />
        </header>

        <RecentTransactions 
          accounts={demoAccounts}
          transactions={demoTransactions}
          page={currentPage}
        />
      </div>

      <RightSidebar 
        user={demoUser}
        banks={demoAccounts?.slice(0, 2)}
      />
    </section>
  )
}

export default Home