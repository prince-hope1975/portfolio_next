export function SystemGraphic() {
  return (
    <div className="system-art" aria-hidden="true">
      <div className="art-coordinate top">FIG. 001 / CONNECTED THINKING</div>
      <svg className="system-svg" viewBox="0 0 520 520" fill="none">
        <defs>
          <pattern
            id="dot-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#77776c" opacity=".28" />
          </pattern>
        </defs>
        <rect width="520" height="520" fill="url(#dot-grid)" />
        <g className="orbit-lines" stroke="#b0b0a0" strokeWidth="1">
          <ellipse
            cx="260"
            cy="260"
            rx="222"
            ry="89"
            transform="rotate(-35 260 260)"
          />
          <ellipse
            cx="260"
            cy="260"
            rx="222"
            ry="89"
            transform="rotate(35 260 260)"
          />
          <ellipse
            cx="260"
            cy="260"
            rx="222"
            ry="89"
            transform="rotate(90 260 260)"
          />
        </g>
        <circle
          cx="260"
          cy="260"
          r="140"
          stroke="#8c8c7e"
          strokeDasharray="2 9"
        />
        <path
          d="M112 130 260 260 411 130M260 260 260 440"
          stroke="#e6e2d7"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        <circle cx="260" cy="260" r="63" fill="#ff5c28" />
        <g stroke="#171914" strokeWidth="7" strokeLinecap="square">
          <path d="M260 223v74M223 260h74M234 234l52 52M234 286l52-52" />
        </g>
        <g fill="#171914" stroke="#b3b3a3">
          <rect x="55" y="102" width="130" height="57" rx="3" />
          <rect x="345" y="102" width="130" height="57" rx="3" />
          <rect x="184" y="408" width="152" height="57" rx="3" />
        </g>
        <g
          fill="#eeece2"
          fontSize="14"
          fontFamily="monospace"
          textAnchor="middle"
        >
          <text x="120" y="136">
            INTERFACE
          </text>
          <text x="410" y="136">
            BACKEND
          </text>
          <text x="260" y="442">
            ORCHESTRATION
          </text>
        </g>
        <circle
          className="signal-dot signal-one"
          cx="171"
          cy="114"
          r="6"
          fill="#d5f278"
        />
        <circle
          className="signal-dot signal-two"
          cx="461"
          cy="114"
          r="6"
          fill="#d5f278"
        />
        <circle
          className="signal-dot signal-three"
          cx="321"
          cy="420"
          r="6"
          fill="#d5f278"
        />
        <path
          d="M24 42V24h18M478 24h18v18M496 478v18h-18M42 496H24v-18"
          stroke="#77776c"
        />
      </svg>
      <div className="art-coordinate bottom">
        <span className="status-dot" /> ONE CONNECTED SYSTEM{" "}
        <span>01 — 03</span>
      </div>
    </div>
  );
}
