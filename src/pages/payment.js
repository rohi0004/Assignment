import React, { useState, useEffect } from 'react';
import styles from '../styles/payment.module.scss';
import { useRouter } from 'next/router';

const Payment = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const goToNextPage = () => {
    router.push('/profile');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.thedevstudio.in/api/react-internship-wallet-summary');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div className={styles.error}>Error: {error.message}</div>;
  if (!data) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.cover}>
      <div className={styles.walletContainer}>
        <button className={styles.imageButton} onClick={goToNextPage}>
          <img src="/images/HamburgerMenu.png" alt="Next" />
        </button>
        <div className={styles.balanceCard}>
          <div className={styles.availableBalance}>
            <h2>₹{data.availableBalance}</h2>
          </div>
          <p>Available Balance</p>
        </div>
        <button className={styles.addMoneyButton}>Add Money</button>
        <div className={styles.expenseCard}>
          <h2>₹{data.totalExpense}</h2>
          <p>Total Expenditure</p>
        </div>
        <div className={styles.transactionsSection}>
          <div className={styles.transactionsHeader}>
            <h2 className={styles.transactionTitle}>Transactions</h2>
            <a href="#" className={styles.seeAllLink}>See All</a>
          </div>
          <div className={styles.transactionsBox}>
            <ul className={styles.transactionsList}>
              {(data.transactions || []).map((transaction, index) => (
                <li key={index} className={`${styles.transactionItem} ${styles[transaction.type]}`}>
                  <div className={styles.transactionLabel}>{transaction.label}</div>
                  <div className={styles.transactionDate}>Today at 09:20 am</div>
                  <div className={`${styles.transactionAmount} ${transaction.type === 'expense' ? styles.negative : styles.positive}`}>
                    {transaction.type === 'expense' ? '-' : ''}₹{transaction.amount}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.iconWrapperA}>
          <div className={styles.navItem}>
            <img src="/images/Home.png" alt="Home" className={styles.navIcon} />
          </div>
          <div className={styles.navItem}>
            <img src="/images/Favourite.png" alt="Favourite" className={styles.navIcon} />
          </div>
          <div className={styles.navItem}>
            <img src="/images/wallet.png" alt="Wallet" className={styles.navIcon1} />
            <div className={styles.wallet}>Wallet</div>
          </div>
          <div className={styles.navItem}>
            <img src="/images/Offer.png" alt="Offer" className={styles.navIcon} />
          </div>
          <div className={styles.navItem}>
            <img src="/images/Profile.png" alt="Profile" className={styles.navIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
