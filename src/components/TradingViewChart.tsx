import { useEffect, useRef } from "react";

interface TradingViewChartProps {
  symbol: string;
  interval?: string;
  theme?: "light" | "dark";
}

const TradingViewChart = ({
  symbol,
  interval = "15",
  theme = "light",
}: TradingViewChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    chartRef.current.innerHTML = "";

    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container";
    widgetContainer.style.width = "100%";
    widgetContainer.style.height = "100%";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.width = "100%";
    widget.style.height = "100%";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval,
      timezone: "Asia/Jakarta",
      theme,
      style: "1",
      locale: "en",
      allow_symbol_change: false,
      hide_side_toolbar: false,
      withdateranges: true,
      details: false,
      hotlist: false,
      calendar: false,
    });

    widgetContainer.appendChild(widget);
    widgetContainer.appendChild(script);

    chartRef.current.appendChild(widgetContainer);

    return () => {
      if (chartRef.current) {
        chartRef.current.innerHTML = "";
      }
    };
  }, [symbol, interval, theme]);

  return (
    <div
      ref={chartRef}
      className="w-full"
      style={{ height: "600px" }}
    />
  );
};

export default TradingViewChart;