// DashboardCards.js
import React from 'react';

const AdminDashboard = () => {
    const cards = [
        { title: 'Total Register Players', value: 55, icon: '👥', color: 'bg-blue-500' },
        { title: 'Owner Approx Income', value: 0, icon: '💰', color: 'bg-orange-500' },
        { title: 'Total Winning Amount', value: 55, icon: '🏆', color: 'bg-purple-500' },
        { title: 'Total Wallet Amount', value: 55, icon: '💼', color: 'bg-green-500' },
        { title: 'Total Transaction', value: 2, icon: '🔄', color: 'bg-yellow-500' },
        { title: 'Total Amount Sent', value: 0, icon: '📤', color: 'bg-red-500' },
        { title: 'Total Pending Withdraw Request', value: 1, icon: '⏳', color: 'bg-indigo-500' },
        { title: 'Total Approved Withdraw Request', value: 0, icon: '✅', color: 'bg-green-500' },
        { title: 'Total Reject Withdraw Request', value: 0, icon: '❌', color: 'bg-red-500' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {cards.map((card, index) => (
                <div key={index} className={`p-4 rounded-lg shadow-md ${card.color} text-white`}>
                    <div className="flex items-center">
                        <div className="text-3xl">{card.icon}</div>
                        <div className="ml-4">
                            <div className="text-xl font-bold">{card.value}</div>
                            <div>{card.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminDashboard;
