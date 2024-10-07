import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { demoAccounts } from '@/lib/demoData';
import React from 'react'

const Transfer = async () => {

  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={demoAccounts} />
      </section>
    </section>
  )
}

export default Transfer