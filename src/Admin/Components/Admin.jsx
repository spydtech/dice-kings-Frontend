/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Toolbar, useMediaQuery, useTheme } from '@mui/material';

import { AccountCircle } from '@mui/icons-material';
import AdminDashboard from './AdminDashboard.jsx';
import WithdrawCoins from './WithdrawCoins.jsx';
import Transactions from './Transactions.jsx';
import AddCoins from './AddCoins.jsx';
import Balance from './Balance.jsx';
import History from './History.jsx';
import AllPlayers from './AllPlayers.jsx';
import BidValue from './BidValue.jsx';




const menu = [
    { name: "AdminDashboard", path: "/admin" },
    { name: "All Players", path: "/admin/all-players" },
    { name: "Bid Value", path: "/admin/bid-value" },
    { name: "WithdrawCoins", path: "/admin/withdraw-coins" },
    { name: "Transactions", path: "/admin/transactions" },
    { name: "AddCoins", path: "/admin/add-coins" },
    { name: "Balance", path: "/admin/balance" },
    { name: "History", path: "/admin/history" },
];


const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawerWidth = isLargeScreen ? 250 : '50vw'; // Adjust the width for large and small screens

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
                width: drawerWidth,
            }}
            className="bg-gray-800 text-white"
        >
            {isLargeScreen && <Toolbar />}

            <div className="flex-grow">
                <ul className="py-4">
                    {menu.map((item, index) => (
                        <li key={item.name}>
                            <button
                                onClick={() => navigate(item.path)}
                                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
                            >
                                {/* <span className="text-lg">{item.icon}</span> */}
                                <span className="font-semibold">{item.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full"
                >
                    <AccountCircle />
                    <span className="font-semibold">Account</span>
                </button>
            </div>
        </Box>
    );

    const drawerVariant = isLargeScreen ? "permanent" : "temporary";

    return (
        <div className="flex h-screen bg-blue-100">

            <CssBaseline />
            <div className={`bg-gray-800 text-white ${drawerVariant === 'temporary' && !sideBarVisible ? '-left-64' : `w-${drawerWidth}`}`}>
                {drawer}
            </div>
            <div className="flex-grow h-screen overflow-auto">
                <Box component="main" className="p-0">
                    <Routes>
                        <Route path='/' element={<AdminDashboard />} />
                        <Route path="/withdraw-coins" element={<WithdrawCoins />} />
                        <Route path="/bid-value" element={<BidValue />} />
                        <Route path='/all-players' element={<AllPlayers />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/add-coins" element={<AddCoins />} />
                        <Route path="/balance" element={<Balance />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
                </Box>
            </div>
        </div>
    );
};

export default Admin;
