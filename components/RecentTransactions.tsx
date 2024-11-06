import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'
import { Pagination } from './Pagination'

const RecentTransactions = ({
  accounts,
  transactions = [],
  page = 1,
}: RecentTransactionsProps) => {
  const rowsPerPage = 10;
  
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent transactions</h2>
        <Link
          href={`/transaction-history/`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>

      <Tabs defaultValue='account-1' className="w-full">
      <TabsList className="recent-transactions-tablist">
          {accounts.map((account: Account) => (
            <TabsTrigger key={account.id} value={account.id}>
              <BankTabItem
                key={account.id}
                account={account}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {accounts.map((account: Account) => {
          const filteredTransactions = transactions.filter(
            (transaction) => transaction.$id === account.id
          );

          const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);
          const indexOfLastTransaction = page * rowsPerPage;
          const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

          const currentTransactions = filteredTransactions.slice(
            indexOfFirstTransaction,
            indexOfLastTransaction
          );

          return (
          <TabsContent
            value={account.id}
            key={account.id}
            className="space-y-4"
          >
            <BankInfo 
              account={account}
              type="full"
            />

            <TransactionsTable transactions={currentTransactions} />
            

            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={page} />
              </div>
            )}
          </TabsContent>
        )})}
      </Tabs>
    </section>
  )
}

export default RecentTransactions