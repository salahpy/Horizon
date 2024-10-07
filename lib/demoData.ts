export const demoUser: User = {
  $id: 'demo-user-123',
  email: 'demo.user@horizon.com',
  firstName: 'John',
  lastName: 'Doe',
  address1: '123 Demo St',
  city: 'Demo City',
  state: 'DC',
  postalCode: '12345',
  dateOfBirth: '1990-01-01',
  ssn: '123-45-6789',
};

export const demoAccounts: Account[] = [
  {
    id: 'account-1',
    availableBalance: 2500.00,
    currentBalance: 2700.00,
    officialName: 'Checking Account',
    mask: '1234',
    institutionId: 'bank-1',
    name: 'John Doe - Checking',
    type: 'depository',
    subtype: 'checking',
    sharableId: 'share-account-1',
  },
  {
    id: 'account-2',
    availableBalance: 15000.00,
    currentBalance: 16000.00,
    officialName: 'Savings Account',
    mask: '5678',
    institutionId: 'bank-1',
    name: 'John Doe - Savings',
    type: 'depository',
    subtype: 'savings',
    sharableId: 'share-account-2',
  },
  {
    id: 'account-3',
    availableBalance: 500.00,
    currentBalance: 700.00,
    officialName: 'Credit Card',
    mask: '9876',
    institutionId: 'bank-2',
    name: 'John Doe - Credit Card',
    type: 'credit',
    subtype: 'credit card',
    sharableId: 'share-account-3',
  },
];

export const demoTransactions: Transaction[] = [
  {
    id: 'transaction-1',
    $id: 'account-1',
    name: 'Grocery Store',
    paymentChannel: 'in store',
    type: 'debit',
    accountId: 'account-1',
    amount: 150.00,
    pending: false,
    category: 'Groceries',
    date: '2024-09-15',
    image: '/images/grocery.png',
    $createdAt: '2024-09-15T09:30:00Z',
    channel: 'POS',
    senderBankId: 'bank-1',
    receiverBankId: 'merchant-1',
  },
  {
    id: 'transaction-2',
    $id: 'account-1',
    name: 'Utility Bill',
    paymentChannel: 'online',
    type: 'debit',
    accountId: 'account-1',
    amount: 75.00,
    pending: false,
    category: 'Bills',
    date: '2024-09-10',
    image: '/images/utility.png',
    $createdAt: '2024-09-10T12:00:00Z',
    channel: 'Online Banking',
    senderBankId: 'bank-1',
    receiverBankId: 'utility-company',
  },
  {
    id: 'transaction-3',
    $id: 'account-1',
    name: 'Salary Payment',
    paymentChannel: 'direct deposit',
    type: 'credit',
    accountId: 'account-1',
    amount: 2000.00,
    pending: false,
    category: 'Income',
    date: '2024-09-01',
    image: '/images/salary.png',
    $createdAt: '2024-09-01T08:00:00Z',
    channel: 'ACH',
    senderBankId: 'employer',
    receiverBankId: 'bank-1',
  },
  {
    id: 'transaction-4',
    $id: 'account-1',
    name: 'Restaurant Dinner',
    paymentChannel: 'in restaurant',
    type: 'debit',
    accountId: 'account-1',
    amount: 80.00,
    pending: false,
    category: 'Dining',
    date: '2024-09-20',
    image: '/images/restaurant.png',
    $createdAt: '2024-09-20T19:00:00Z',
    channel: 'POS',
    senderBankId: 'bank-1',
    receiverBankId: 'restaurant-1',
  },
  {
    id: 'transaction-5',
    $id: 'account-1',
    name: 'Online Subscription',
    paymentChannel: 'online',
    type: 'debit',
    accountId: 'account-1',
    amount: 15.99,
    pending: false,
    category: 'Subscriptions',
    date: '2024-09-22',
    image: '/images/subscription.png',
    $createdAt: '2024-09-22T10:00:00Z',
    channel: 'Online Banking',
    senderBankId: 'bank-1',
    receiverBankId: 'subscription-service',
  },
  {
    id: 'transaction-6',
    $id: 'account-1',
    name: 'Freelance Payment',
    paymentChannel: 'direct deposit',
    type: 'credit',
    accountId: 'account-1',
    amount: 500.00,
    pending: false,
    category: 'Income',
    date: '2024-09-25',
    image: '/images/freelance.png',
    $createdAt: '2024-09-25T14:30:00Z',
    channel: 'ACH',
    senderBankId: 'client-1',
    receiverBankId: 'bank-1',
  },
  {
    id: 'transaction-7',
    $id: 'account-1',
    name: 'Gym Membership',
    paymentChannel: 'in person',
    type: 'debit',
    accountId: 'account-1',
    amount: 45.00,
    pending: false,
    category: 'Health',
    date: '2024-09-26',
    image: '/images/gym.png',
    $createdAt: '2024-09-26T08:00:00Z',
    channel: 'POS',
    senderBankId: 'bank-1',
    receiverBankId: 'gym-1',
  },
  {
    id: 'transaction-8',
    $id: 'account-1',
    name: 'Book Purchase',
    paymentChannel: 'online',
    type: 'debit',
    accountId: 'account-1',
    amount: 25.00,
    pending: false,
    category: 'Books',
    date: '2024-09-27',
    image: '/images/book.png',
    $createdAt: '2024-09-27T13:15:00Z',
    channel: 'Online Shopping',
    senderBankId: 'bank-1',
    receiverBankId: 'bookstore-1',
  },
  // Transactions for Savings Account
  {
    id: 'transaction-4',
    $id: 'account-2',
    name: 'ATM Withdrawal',
    paymentChannel: 'atm',
    type: 'debit',
    accountId: 'account-2',
    amount: 300.00,
    pending: false,
    category: 'ATM',
    date: '2024-09-20',
    image: '/images/atm.png',
    $createdAt: '2024-09-20T11:00:00Z',
    channel: 'ATM',
    senderBankId: 'bank-1',
    receiverBankId: 'atm-123',
  },
  {
    id: 'transaction-5',
    $id: 'account-2',
    name: 'Interest Payment',
    paymentChannel: 'system',
    type: 'credit',
    accountId: 'account-2',
    amount: 50.00,
    pending: false,
    category: 'Interest',
    date: '2024-09-30',
    image: '/images/interest.png',
    $createdAt: '2024-09-30T10:00:00Z',
    channel: 'System',
    senderBankId: 'bank-1',
    receiverBankId: 'customer-account',
  },
  // Transactions for Credit Card
  {
    id: 'transaction-6',
    $id: 'account-3',
    name: 'Online Purchase',
    paymentChannel: 'online',
    type: 'debit',
    accountId: 'account-3',
    amount: 120.00,
    pending: true,
    category: 'Shopping',
    date: '2024-09-18',
    image: '/images/online-shopping.png',
    $createdAt: '2024-09-18T14:00:00Z',
    channel: 'Online',
    senderBankId: 'creditor-1',
    receiverBankId: 'merchant-2',
  },
  {
    id: 'transaction-7',
    $id: 'account-3',
    name: 'Gas Station',
    paymentChannel: 'in store',
    type: 'debit',
    accountId: 'account-3',
    amount: 40.00,
    pending: false,
    category: 'Fuel',
    date: '2024-09-14',
    image: '/images/gas-station.png',
    $createdAt: '2024-09-14T13:00:00Z',
    channel: 'POS',
    senderBankId: 'creditor-1',
    receiverBankId: 'merchant-3',
  },
  {
    id: 'transaction-8',
    $id: 'account-3',
    name: 'Credit Card Payment',
    paymentChannel: 'online',
    type: 'credit',
    accountId: 'account-3',
    amount: 500.00,
    pending: false,
    category: 'Payments',
    date: '2024-09-25',
    image: '/images/credit-payment.png',
    $createdAt: '2024-09-25T09:00:00Z',
    channel: 'Online Banking',
    senderBankId: 'customer-account',
    receiverBankId: 'creditor-1',
  },
  // Transactions for Savings Account
  {
    id: 'transaction-4',
    $id: 'account-2',
    name: 'ATM Withdrawal',
    paymentChannel: 'atm',
    type: 'debit',
    accountId: 'account-2',
    amount: 300.00,
    pending: false,
    category: 'ATM',
    date: '2024-09-20',
    image: '/images/atm.png',
    $createdAt: '2024-09-20T11:00:00Z',
    channel: 'ATM',
    senderBankId: 'bank-1',
    receiverBankId: 'atm-123',
  },
  {
    id: 'transaction-5',
    $id: 'account-2',
    name: 'Interest Payment',
    paymentChannel: 'system',
    type: 'credit',
    accountId: 'account-2',
    amount: 50.00,
    pending: false,
    category: 'Interest',
    date: '2024-09-30',
    image: '/images/interest.png',
    $createdAt: '2024-09-30T10:00:00Z',
    channel: 'System',
    senderBankId: 'bank-1',
    receiverBankId: 'customer-account',
  },
  // Transactions for Credit Card
  {
    id: 'transaction-6',
    $id: 'account-3',
    name: 'Online Purchase',
    paymentChannel: 'online',
    type: 'debit',
    accountId: 'account-3',
    amount: 120.00,
    pending: true,
    category: 'Shopping',
    date: '2024-09-18',
    image: '/images/online-shopping.png',
    $createdAt: '2024-09-18T14:00:00Z',
    channel: 'Online',
    senderBankId: 'creditor-1',
    receiverBankId: 'merchant-2',
  },
  {
    id: 'transaction-7',
    $id: 'account-3',
    name: 'Gas Station',
    paymentChannel: 'in store',
    type: 'debit',
    accountId: 'account-3',
    amount: 40.00,
    pending: false,
    category: 'Fuel',
    date: '2024-09-14',
    image: '/images/gas-station.png',
    $createdAt: '2024-09-14T13:00:00Z',
    channel: 'POS',
    senderBankId: 'creditor-1',
    receiverBankId: 'merchant-3',
  },
  {
    id: 'transaction-8',
    $id: 'account-3',
    name: 'Credit Card Payment',
    paymentChannel: 'online',
    type: 'credit',
    accountId: 'account-3',
    amount: 500.00,
    pending: false,
    category: 'Payments',
    date: '2024-09-25',
    image: '/images/credit-payment.png',
    $createdAt: '2024-09-25T09:00:00Z',
    channel: 'Online Banking',
    senderBankId: 'customer-account',
    receiverBankId: 'creditor-1',
  },
];
