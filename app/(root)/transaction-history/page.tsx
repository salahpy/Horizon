import HeaderBox from "@/components/HeaderBox"
import TransactionsTable from "@/components/TransactionsTable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { demoAccounts, demoTransactions } from "@/lib/demoData"
import { formatAmount } from "@/lib/utils"
import { BankTabItem } from "@/components/BankTabItem"
import React from "react"

const TransactionHistory = async () => {

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>
      <Tabs defaultValue='account-1' className="w-full">
        <TabsList className="recent-transactions-tablist">
          {demoAccounts.map((account: Account) => (
            <TabsTrigger key={account.id} value={account.id}>
              <BankTabItem
                key={account.id}
                account={account}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {demoAccounts.map((account: Account) => {
          const filteredTransactions = demoTransactions.filter(
            (transaction) => transaction.$id === account.id
          )

          return (
            <TabsContent
              value={account.id}
              key={account.id}
              className="space-y-4"
            >
              <div className="transactions-account">
                <div className="flex flex-col gap-2">
                  <h2 className="text-18 font-bold text-white">
                    {account.name}
                  </h2>
                  <p className="text-14 text-blue-25">{account.officialName}</p>
                  <p className="text-14 font-semibold tracking-[1.1px] text-white">
                    ●●●● ●●●● ●●●● {account.mask}
                  </p>
                </div>

                <div className="transactions-account-balance">
                  <p className="text-14">Current balance</p>
                  <p className="text-24 text-center font-bold">
                    {formatAmount(account.currentBalance)}
                  </p>
                </div>
              </div>

              <TransactionsTable transactions={filteredTransactions} />
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

export default TransactionHistory
