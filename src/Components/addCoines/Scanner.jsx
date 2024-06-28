/* eslint-disable react/prop-types */
// components/scanner/Scanner.jsx
import React, { useEffect } from "react";
import IMG from "../../assets/scanner.jpg";

const Scanner = ({ onScanComplete }) => {
    useEffect(() => {
        // Simulate scanning process
        const timer = setTimeout(() => {
            onScanComplete();
        }, 8000);

        return () => clearTimeout(timer); // Cleanup timer if component unmounts early
    }, [onScanComplete]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded">
                <h2 className="mb-4">Scanning...</h2>
                <img
                    src={IMG} // Replace with actual scanner image URL
                    className="w-[300px] h-[350px]"
                    alt="Scanner"
                />
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={onScanComplete}
                >
                    Scan
                </button>
            </div>
        </div>
    );
};

export default Scanner;