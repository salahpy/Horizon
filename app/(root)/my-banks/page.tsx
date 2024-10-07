import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { demoAccounts, demoUser } from '@/lib/demoData';
import React from 'react'

const MyBanks = async () => {

  return (
    <section className='flex'>
      <div className="my-banks">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
            {demoAccounts && demoAccounts.map((a: Account) => (
              <BankCard 
                key={a.id}
                account={a}
                userName={demoUser.firstName + ' | ' + demoUser.lastName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks