// app/pages/dashboard.tsx
import React from 'react';
import { Button } from "@nextui-org/button";
import { ChevronRight } from 'lucide-react';

export default function SideBarAdmin() {
    const menuItems = [
        {
            category: "Quick Access",
            items: [
                { name: "Type Of DiaMond", icon: "🏠" },
                { name: "Exchange", icon: "💱" },
                { name: "My Wallet", icon: "👛" },
            ]
        },
        {
            category: "Service",
            items: [
                { name: "Transactions", icon: "💳" },
                { name: "Buy & Sell Diamond", icon: "🔄" },
                { name: "Deposit Yen", icon: "💴" },
                { name: "Withdraw Yen", icon: "💵" },
                { name: "Send Coin", icon: "📤" },
                { name: "Receive Coin", icon: "📥" },
                { name: "Deposit Coin", icon: "🪙" },
                { name: "Rewards", icon: "🎁" },
                { name: "Utility Plan", icon: "📋" },
            ]
        },
        {
            category: "Account",
            items: [
                { name: "Notification", icon: "🔔" },
                { name: "Profile", icon: "⚙️" },
            ]
        }
    ];

    return (
        <div className="w-64 bg-[#1a1f37] text-white h-full">
            {/* Logo */}
            <div className="p-4 border-b border-gray-700">
                <h1 className="text-xl font-bold">DIAMOND</h1>
            </div>

            {/* Navigation Menu */}
            <div className="p-4">
                {menuItems.map((section, idx) => (
                    <div key={idx} className="mb-6">
                        <h2 className="text-sm text-gray-400 mb-2">{section.category}</h2>
                        {section.items.map((item, itemIdx) => (
                            <div
                                key={itemIdx}
                                className="flex items-center justify-between p-2 mb-1 hover:bg-blue-600 rounded cursor-pointer transition-colors group"
                            >
                                <div className="flex items-center">
                                    <span className="mr-2">{item.icon}</span>
                                    <span className="text-sm">{item.name}</span>
                                </div>
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}