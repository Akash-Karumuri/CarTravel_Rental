import React, { useEffect, useRef } from "react";
import "./CarLoader.css";

const CarLoader = ({ message = "Fetching cars..." }) => {
  const markingsRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (markingsRef.current) {
      for (let i = 0; i < 24; i++) {
        const d = document.createElement("span");
        d.className = "cl-dash";
        markingsRef.current.appendChild(d);
      }
    }
    const labels = [
      "Fetching cars...",
      "Loading inventory...",
      "Almost ready...",
      "Revving it up...",
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % labels.length;
      if (labelRef.current) labelRef.current.textContent = labels[idx];
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cl-scene" role="status" aria-label="Loading cars">
      <div className="cl-sky" />
      <div className="cl-ground" />
      <div className="cl-horizon" />

      <div className="cl-stars">
        {[
          [5, 8, 0.3],
          [18, 14, 0.9],
          [34, 6, 0.1],
          [48, 20, 1.4],
          [62, 10, 0.6],
          [75, 5, 1.8],
          [88, 17, 0.4],
          [92, 24, 1.1],
        ].map(([l, t, d], i) => (
          <div
            key={i}
            className="cl-star"
            style={{
              left: `${l}%`,
              top: `${t}%`,
              animationDelay: `${d}s`,
              width: i % 2 ? "1px" : "2px",
              height: i % 2 ? "1px" : "2px",
            }}
          />
        ))}
      </div>

      <div className="cl-city">
        {[28, 20, 36, 22, 50, 18, 30, 24, 40, 16, 28, 20, 36, 22, 50].map(
          (w, i) => (
            <div
              key={i}
              className="cl-building"
              style={{
                width: `${w}px`,
                height: `${[70, 45, 90, 55, 110, 40, 75, 60, 95, 35, 70, 45, 90, 55, 110][i]}px`,
              }}
            />
          ),
        )}
      </div>

      <div className="cl-trees">
        <div className="cl-tree-row">
          {[0, 1, 2, 0, 1, 2, 0, 1].map((t, i) => (
            <div
              key={i}
              className="cl-tree"
              style={{ marginRight: [55, 90, 70][t] + "px" }}
            >
              <div
                className="cl-tree-top"
                style={
                  t === 2
                    ? { width: "24px", height: "30px", background: "#14532d" }
                    : {}
                }
              />
              <div className="cl-tree-trunk" />
            </div>
          ))}
        </div>
      </div>

      <div className="cl-road-wrap">
        <div className="cl-road-surface" />
  
        <div className="cl-markings-wrap">
          <div className="cl-markings" ref={markingsRef} />
        </div>
      </div>

      <div className="cl-car-stage">
        <div className="cl-headlight-beam" />
        <div className="cl-speedlines">
          {[
            [28, 55, 0],
            [40, 70, 0.07],
            [52, 40, 0.14],
            [64, 65, 0.21],
            [20, 30, 0.28],
          ].map(([top, w, delay], i) => (
            <div
              key={i}
              className="cl-speedline"
              style={{
                top: `${top}%`,
                width: `${w}px`,
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </div>

        <div className="cl-car-body-wrap">
          <div className="cl-ground-shadow" />
          <svg
            width="230"
            height="88"
            viewBox="0 0 230 88"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cl-bodyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="cl-roofGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="cl-glassGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="cl-wheelGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
            </defs>
            <rect
              x="20"
              y="42"
              width="190"
              height="28"
              rx="6"
              fill="url(#cl-bodyGrad)"
            />
            <path
              d="M48 42 C54 22 70 17 115 17 C158 17 176 22 183 42Z"
              fill="url(#cl-roofGrad)"
            />
            <rect x="14" y="55" width="202" height="12" rx="5" fill="#1e3a8a" />
            <rect
              x="53"
              y="20"
              width="36"
              height="20"
              rx="3"
              fill="url(#cl-glassGrad)"
            />
            <line
              x1="68"
              y1="20"
              x2="65"
              y2="40"
              stroke="#93c5fd"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
            <rect
              x="96"
              y="20"
              width="40"
              height="20"
              rx="3"
              fill="url(#cl-glassGrad)"
            />
            <rect
              x="143"
              y="22"
              width="30"
              height="18"
              rx="3"
              fill="url(#cl-glassGrad)"
              opacity="0.7"
            />
            <rect x="16" y="49" width="16" height="9" rx="2" fill="#fef3c7" />
            <rect
              x="18"
              y="50"
              width="12"
              height="7"
              rx="1"
              fill="#fbbf24"
              opacity="0.9"
            />
            <ellipse
              cx="24"
              cy="53.5"
              rx="4"
              ry="3"
              fill="#fef08a"
              opacity="0.6"
            />
            <rect x="198" y="49" width="14" height="9" rx="2" fill="#7f1d1d" />
            <rect
              x="200"
              y="50"
              width="10"
              height="7"
              rx="1"
              fill="#ef4444"
              opacity="0.85"
            />
            <rect
              x="195"
              y="51"
              width="4"
              height="5"
              rx="1"
              fill="#f97316"
              opacity="0.6"
            />
            {[55, 175].map((cx) => (
              <g
                key={cx}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: "cl-wspin .4s linear infinite",
                }}
              >
                <ellipse
                  cx={cx}
                  cy="72"
                  rx="16"
                  ry="16"
                  fill="url(#cl-wheelGrad)"
                  stroke="#111"
                  strokeWidth="1"
                />
                <ellipse cx={cx} cy="72" rx="11" ry="11" fill="#1f2937" />
                <ellipse cx={cx} cy="72" rx="5" ry="5" fill="#374151" />
                <line
                  x1={cx}
                  y1="61"
                  x2={cx}
                  y2="83"
                  stroke="#4b5563"
                  strokeWidth="1.2"
                />
                <line
                  x1={cx - 11}
                  y1="72"
                  x2={cx + 11}
                  y2="72"
                  stroke="#4b5563"
                  strokeWidth="1.2"
                />
                <line
                  x1={cx - 8}
                  y1="64"
                  x2={cx + 8}
                  y2="80"
                  stroke="#4b5563"
                  strokeWidth="1"
                />
                <line
                  x1={cx + 8}
                  y1="64"
                  x2={cx - 8}
                  y2="80"
                  stroke="#4b5563"
                  strokeWidth="1"
                />
                <ellipse cx={cx} cy="72" rx="3" ry="3" fill="#6b7280" />
              </g>
            ))}
          </svg>
        </div>

        <div className="cl-exhaust">
          <div className="cl-smoke" style={{ animationDelay: "0s" }} />
          <div
            className="cl-smoke"
            style={{
              animationDelay: ".25s",
              width: "9px",
              height: "9px",
              top: "3px",
            }}
          />
          <div
            className="cl-smoke"
            style={{
              animationDelay: ".5s",
              width: "14px",
              height: "14px",
              top: "-2px",
            }}
          />
        </div>
      </div>

      <div className="cl-info-row">
        <div className="cl-dot-row">
          <div className="cl-ld" />
          <div className="cl-ld" />
          <div className="cl-ld" />
        </div>
        <span className="cl-fetch-label" ref={labelRef}>
          {message}
        </span>
      </div>
    </div>
  );
};

export default CarLoader;
