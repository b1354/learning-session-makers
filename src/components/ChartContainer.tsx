import { useState } from "react";
import TradingViewChart from "./TradingViewChart";

const pairs = [
    { label: "EUR/USD", value: "FX:EURUSD" },
    { label: "GBP/USD", value: "FX:GBPUSD" },
    { label: "USD/JPY", value: "FX:USDJPY" },
    { label: "XAU/USD", value: "OANDA:XAUUSD" },
    { label: "BTC/USDT", value: "BINANCE:BTCUSDT" },
];

const ChartContainer = () => {
    const [selectedPair, setSelectedPair] = useState("OANDA:XAUUSD");

    return (
        <div className="space-y-4">
            <div className="flex gap-2 my-2 items-center">
                <label htmlFor="pair" className="text-sm cursor-pointer">Select Pair</label>
                <select
                    id="pair"
                    value={selectedPair}
                    onChange={(e) => setSelectedPair(e.target.value)}
                    className="rounded-md border px-3 py-2 text-sm cursor-pointer"
                >
                    {pairs.map((pair) => (
                        <option key={pair.value} value={pair.value}>
                            {pair.label}
                        </option>
                    ))}
                </select>
            </div>

            <TradingViewChart symbol={selectedPair} theme="light" />
        </div>
    );
};

export default ChartContainer;