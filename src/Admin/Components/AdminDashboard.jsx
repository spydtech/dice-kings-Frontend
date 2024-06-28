// DashboardCards.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardCards = () => {
    const navigate = useNavigate()
    const cards = [
        { title: 'Total Register Players', path: "/admin/all-players", value: 55, icon: '👥', color: 'bg-blue-500' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 flex-grow">
            {cards.map((card, index) => (
                <div key={index} className={`p-4 rounded-lg shadow-md ${card.color} text-white flex flex-col justify-between`}>
                    <button
                        onClick={() => navigate(card.path)}

                    >
                        <div className="flex items-center">
                            <div className="text-3xl">{card.icon}</div>
                            <div className="ml-4">
                                <div className="text-xl font-bold">{card.value}</div>
                                <div>{card.title}</div>
                            </div>
                        </div>
                    </button>

                </div>
            ))}
        </div>
    );
};

export default DashboardCards;


// AdminDashboard.js

export const AdminDashboard = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-6">
            <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
            <div className="flex-grow">
                <DashboardCards />
            </div>
        </div>
    );
};

