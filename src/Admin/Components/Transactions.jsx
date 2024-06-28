import React, { useState, useEffect } from 'react';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/transactions/all');
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="container mx-auto mt-5">
            <h1 className="text-2xl font-bold mb-5">Transactions</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Coins</th>
                        <th className="px-4 py-2">Payment Method</th>
                        <th className="px-4 py-2">UTR</th>
                        <th className="px-4 py-2">UPI Transaction ID</th>
                        <th className="px-4 py-2">UPI Reference ID</th>
                        <th className="px-4 py-2">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction._id}>
                            <td className="border px-4 py-2">{transaction._id}</td>
                            <td className="border px-4 py-2">{transaction.coins}</td>
                            <td className="border px-4 py-2">{transaction.paymentMethod}</td>
                            <td className="border px-4 py-2">{transaction.utr}</td>
                            <td className="border px-4 py-2">{transaction.upiTransactionId}</td>
                            <td className="border px-4 py-2">{transaction.upiReferenceId}</td>
                            <td className="border px-4 py-2">{transaction.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
