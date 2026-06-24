import React from "react";

const boxes = [
  { id: "web", label: "WEB APP", x: 168, y: 20, icon: "▣" },
  { id: "edge", label: "CDN / EDGE", x: 400, y: 20, icon: "◎" },
  { id: "api", label: "API GATEWAY", x: 168, y: 145, icon: "</>" },
  { id: "auth", label: "AUTH SERVICE", x: 400, y: 145, icon: "⌑" },
  { id: "user", label: "USER SERVICE", x: 70, y: 290, icon: "♙" },
  { id: "order", label: "ORDER SERVICE", x: 254, y: 290, icon: "◇" },
  { id: "notify", label: "NOTIFICATION", x: 438, y: 290, icon: "♢" },
  { id: "db", label: "POSTGRES", x: 70, y: 440, icon: "▤" },
  { id: "redis", label: "REDIS", x: 254, y: 440, icon: "≋" },
  { id: "store", label: "OBJECT STORE", x: 438, y: 440, icon: "▽" },
];

export function SystemDiagram() {
  return (
    <div className="diagram-wrap" aria-label="Distributed software architecture diagram">
      <svg className="diagram" viewBox="0 0 580 560" role="img">
        <title>Event-driven platform architecture</title>
        <g className="diagram-lines" fill="none">
          <path d="M238 76H400" />
          <path d="M203 105V145" />
          <path d="M238 201H400" />
          <path d="M203 235V255H105V290" />
          <path d="M203 255H289V290" />
          <path d="M203 255H473V290" />
          <path d="M105 346V440" />
          <path d="M289 346V440" />
          <path d="M473 346V440" />
          <path d="M473 346V390H105V440" />
        </g>
        <g className="diagram-dashes" fill="none">
          <path d="M470 76H555" />
          <path d="M470 201H555" />
          <path d="M508 318H555" />
        </g>
        {boxes.map((box) => (
          <g key={box.id} transform={`translate(${box.x} ${box.y})`}>
            <text className="diagram-label" x="35" y="-9" textAnchor="middle">
              {box.label}
            </text>
            <rect className="diagram-box" width="70" height="56" rx="3" />
            <text className="diagram-icon" x="35" y="36" textAnchor="middle">
              {box.icon}
            </text>
          </g>
        ))}
        {[
          [319, 76, "blue"],
          [319, 201, "blue"],
          [105, 255, "blue"],
          [289, 255, "blue"],
          [473, 255, "blue"],
          [105, 390, "green"],
          [289, 390, "green"],
          [473, 390, "green"],
        ].map(([cx, cy, color], index) => (
          <circle key={index} className={`node node-${color}`} cx={cx} cy={cy} r="4" />
        ))}
      </svg>
      <div className="diagram-legend mono">
        <span><i className="legend-dot blue" />Async / event-driven</span>
        <span><i className="legend-dot green" />Healthy</span>
      </div>
    </div>
  );
}
