"use client";

interface Props {
  isKo: boolean;
}

function FwIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <rect x={cx - 20} y={cy - 15} width={40} height={30} rx={3}
        fill="#7f1d1d" stroke="#ef4444" strokeWidth={1.2} />
      {/* brick rows */}
      <line x1={cx - 20} y1={cy - 5} x2={cx + 20} y2={cy - 5} stroke="#fca5a5" strokeWidth={0.7} strokeOpacity={0.35} />
      <line x1={cx - 20} y1={cy + 5} x2={cx + 20} y2={cy + 5} stroke="#fca5a5" strokeWidth={0.7} strokeOpacity={0.35} />
      <line x1={cx} y1={cy - 15} x2={cx} y2={cy - 5} stroke="#fca5a5" strokeWidth={0.7} strokeOpacity={0.35} />
      <line x1={cx - 10} y1={cy - 5} x2={cx - 10} y2={cy + 5} stroke="#fca5a5" strokeWidth={0.7} strokeOpacity={0.35} />
      <line x1={cx + 10} y1={cy - 5} x2={cx + 10} y2={cy + 5} stroke="#fca5a5" strokeWidth={0.7} strokeOpacity={0.35} />
      <line x1={cx - 20} y1={cy + 5} x2={cx} y2={cy + 5} stroke="#fca5a5" strokeWidth={0.7} strokeOpacity={0.35} />
      {/* routing arrows */}
      <path d="M{cx-9},{cy-1} L{cx-5},{cy-4} L{cx-5},{cy+2} Z"
        fill="#fca5a5" fillOpacity={0.7}
        transform={`translate(${cx - 4},${cy})`}
      />
    </g>
  );
}

function SwIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <rect x={cx - 22} y={cy - 12} width={44} height={24} rx={3}
        fill="#0c4a6e" stroke="#0ea5e9" strokeWidth={1.2} />
      {([-11, -4, 4, 11] as number[]).map((dx, i) => (
        <g key={i}>
          <rect x={cx + dx - 2} y={cy - 7} width={5} height={6} rx={1}
            fill="#38bdf8" opacity={0.75} />
          <line x1={cx + dx} y1={cy - 1} x2={cx + dx} y2={cy + 6}
            stroke="#38bdf8" strokeWidth={1} strokeOpacity={0.45} />
        </g>
      ))}
    </g>
  );
}

function NasIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <rect x={cx - 24} y={cy - 20} width={48} height={40} rx={3}
        fill="#1e3a8a" stroke="#3b82f6" strokeWidth={1.2} />
      {([-10, -1, 8] as number[]).map((dy, i) => (
        <g key={i}>
          <rect x={cx - 18} y={cy + dy - 3} width={26} height={7} rx={1.5}
            fill="#2563eb" opacity={0.65} />
          <circle cx={cx + 13} cy={cy + dy + 0.5} r={2.5}
            fill="#60a5fa" opacity={0.9} />
        </g>
      ))}
    </g>
  );
}

function LaptopIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {/* screen lid */}
      <rect x={cx - 19} y={cy - 16} width={38} height={26} rx={2}
        fill="#1e293b" stroke="#475569" strokeWidth={1.2} />
      <rect x={cx - 16} y={cy - 13} width={32} height={18} rx={1}
        fill="#0f172a" />
      <rect x={cx - 13} y={cy - 10} width={20} height={2} rx={1}
        fill="#38bdf8" fillOpacity={0.5} />
      <rect x={cx - 13} y={cy - 6} width={26} height={2} rx={1}
        fill="#38bdf8" fillOpacity={0.3} />
      <rect x={cx - 13} y={cy - 2} width={16} height={2} rx={1}
        fill="#38bdf8" fillOpacity={0.3} />
      {/* base */}
      <rect x={cx - 22} y={cy + 10} width={44} height={5} rx={2}
        fill="#334155" stroke="#475569" strokeWidth={1} />
    </g>
  );
}

export function NasTopologyDiagram({ isKo }: Props) {
  const wire = "#334155";
  const muted = "#94a3b8";
  const subtle = "#64748b";
  const green = "#22c55e";
  const gray = "#64748b";

  // Centers
  const ko = { fw: [155, 55], sw: [155, 118], nas: [155, 198], lap: [55, 118] } as const;
  const sh = { fw: [380, 55], nas: [380, 198] } as const;
  const bj = { fw: [620, 55], lap: [620, 198] } as const;

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-border bg-card/50 p-4">
      <svg
        viewBox="0 0 760 244"
        className="min-w-[560px] w-full mx-auto"
        role="img"
        aria-label={isKo ? "NAS 동기화 네트워크 토폴로지" : "NAS Sync Network Topology"}
      >
        {/* ── Section labels ── */}
        <text x={155} y={18} textAnchor="middle" fill={muted}
          fontSize={11} fontWeight={700} fontFamily="ui-monospace,monospace">
          {isKo ? "한국 사무실" : "Korea Office"}
        </text>
        <text x={380} y={18} textAnchor="middle" fill={muted}
          fontSize={11} fontWeight={700} fontFamily="ui-monospace,monospace">
          {isKo ? "상해 NAS" : "Shanghai NAS"}
        </text>
        <text x={620} y={18} textAnchor="middle" fill={muted}
          fontSize={11} fontWeight={700} fontFamily="ui-monospace,monospace">
          {isKo ? "북경 사무실" : "Beijing Office"}
        </text>

        {/* ── Wires ── */}
        {/* Laptop → Switch */}
        <line x1={ko.lap[0] + 22} y1={ko.lap[1]} x2={ko.sw[0] - 22} y2={ko.sw[1]}
          stroke={wire} strokeWidth={1.5} />
        {/* Korea FW → Switch */}
        <line x1={ko.fw[0]} y1={ko.fw[1] + 15} x2={ko.sw[0]} y2={ko.sw[1] - 12}
          stroke={wire} strokeWidth={1.5} />
        {/* Korea Switch → NAS */}
        <line x1={ko.sw[0]} y1={ko.sw[1] + 12} x2={ko.nas[0]} y2={ko.nas[1] - 20}
          stroke={wire} strokeWidth={1.5} />
        {/* Shanghai FW → NAS */}
        <line x1={sh.fw[0]} y1={sh.fw[1] + 15} x2={sh.nas[0]} y2={sh.nas[1] - 20}
          stroke={wire} strokeWidth={1.5} />
        {/* Beijing FW → Laptop */}
        <line x1={bj.fw[0]} y1={bj.fw[1] + 15} x2={bj.lap[0]} y2={bj.lap[1] - 16}
          stroke={wire} strokeWidth={1.5} />

        {/* ── Dedicated line (green) ── */}
        <line x1={ko.fw[0] + 20} y1={ko.fw[1]} x2={sh.fw[0] - 20} y2={sh.fw[1]}
          stroke={green} strokeWidth={2.5} />

        {/* ── Public line (gray dashed) ── */}
        <line x1={sh.fw[0] + 20} y1={sh.fw[1]} x2={bj.fw[0] - 20} y2={bj.fw[1]}
          stroke={gray} strokeWidth={2} strokeDasharray="7 3" />

        {/* ── Line labels ── */}
        {/* Dedicated */}
        <text x={267} y={33} textAnchor="middle" fill={green}
          fontSize={10} fontWeight={700} fontFamily="ui-monospace,monospace">
          {isKo ? "하이온넷 전용 회선" : "Dedicated Line (Haionnet)"}
        </text>
        <text x={267} y={72} textAnchor="middle" fill={subtle}
          fontSize={9} fontFamily="ui-monospace,monospace">
          QoS 5Mbps
        </text>
        <text x={267} y={83} textAnchor="middle" fill={subtle}
          fontSize={9} fontFamily="ui-monospace,monospace">
          {isKo ? "1.5GB / 40분 소요" : "1.5 GB / ~40 min"}
        </text>
        {/* Public */}
        <text x={500} y={33} textAnchor="middle" fill={gray}
          fontSize={10} fontWeight={700} fontFamily="ui-monospace,monospace">
          Public 회선
        </text>
        <text x={500} y={72} textAnchor="middle" fill={subtle}
          fontSize={9} fontFamily="ui-monospace,monospace">
          30Mbps
        </text>
        <text x={500} y={83} textAnchor="middle" fill={subtle}
          fontSize={9} fontFamily="ui-monospace,monospace">
          {isKo ? "1GB / 5분 소요" : "1 GB / ~5 min"}
        </text>

        {/* ── Icons ── */}
        <FwIcon     cx={ko.fw[0]}  cy={ko.fw[1]}  />
        <SwIcon     cx={ko.sw[0]}  cy={ko.sw[1]}  />
        <NasIcon    cx={ko.nas[0]} cy={ko.nas[1]} />
        <LaptopIcon cx={ko.lap[0]} cy={ko.lap[1]} />

        <FwIcon  cx={sh.fw[0]}  cy={sh.fw[1]}  />
        <NasIcon cx={sh.nas[0]} cy={sh.nas[1]} />

        <FwIcon     cx={bj.fw[0]}  cy={bj.fw[1]}  />
        <LaptopIcon cx={bj.lap[0]} cy={bj.lap[1]} />

        {/* ── Icon labels ── */}
        <text x={ko.nas[0]} y={ko.nas[1] + 28} textAnchor="middle" fill={subtle}
          fontSize={9} fontFamily="ui-monospace,monospace">
          {isKo ? "한국 NAS" : "Korea NAS"}
        </text>
        <text x={ko.lap[0]} y={ko.lap[1] + 26} textAnchor="middle" fill={subtle}
          fontSize={9} fontFamily="ui-monospace,monospace">
          {isKo ? "한국 사용자" : "Korea User"}
        </text>
        <text x={sh.nas[0]} y={sh.nas[1] + 28} textAnchor="middle" fill={subtle}
          fontSize={9} fontFamily="ui-monospace,monospace">
          {isKo ? "상해 NAS" : "Shanghai NAS"}
        </text>
        <text x={bj.lap[0]} y={bj.lap[1] + 26} textAnchor="middle" fill={subtle}
          fontSize={9} fontFamily="ui-monospace,monospace">
          {isKo ? "북경 사용자" : "Beijing User"}
        </text>
      </svg>
    </div>
  );
}
