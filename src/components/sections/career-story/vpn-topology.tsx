"use client";

interface Props {
  isKo: boolean;
}

/** 사람 아이콘 */
function PersonIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy - 14} r={9} fill="none" stroke="#64748b" strokeWidth={2} />
      <path d={`M${cx - 16},${cy + 14} Q${cx - 16},${cy} ${cx},${cy} Q${cx + 16},${cy} ${cx + 16},${cy + 14}`}
        fill="none" stroke="#64748b" strokeWidth={2} />
    </g>
  );
}

/** 오피스 빌딩 아이콘 */
function OfficeIcon({ cx, cy }: { cx: number; cy: number }) {
  const w = 46, h = 52;
  const x0 = cx - w / 2, y0 = cy - h / 2;
  return (
    <g>
      {/* 간판 */}
      <rect x={x0} y={y0} width={w} height={10} rx={2} fill="#1e293b" stroke="#475569" strokeWidth={1} />
      <text x={cx} y={y0 + 7.5} textAnchor="middle" fill="#94a3b8"
        fontSize={6} fontWeight={700} fontFamily="ui-monospace,monospace">Office</text>
      {/* 건물 본체 */}
      <rect x={x0} y={y0 + 10} width={w} height={h - 10} rx={1} fill="#1e293b" stroke="#334155" strokeWidth={1} />
      {/* 창문 grid */}
      {([0, 1, 2] as const).map(row =>
        ([0, 1, 2] as const).map(col => (
          <rect key={`${row}-${col}`}
            x={x0 + 5 + col * 14} y={y0 + 14 + row * 10}
            width={9} height={6} rx={1}
            fill="#0f172a" stroke="#334155" strokeWidth={0.5} />
        ))
      )}
      {/* 출입구 */}
      <rect x={cx - 7} y={y0 + h - 14} width={14} height={14} rx={1}
        fill="#0f172a" stroke="#334155" strokeWidth={0.8} />
    </g>
  );
}

/** 서버/데이터센터 아이콘 */
function ServerIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {([0, 1, 2] as const).map(i => (
        <g key={i}>
          <rect x={cx - 22} y={cy - 20 + i * 15} width={44} height={12} rx={2}
            fill="#1e3a8a" stroke="#3b82f6" strokeWidth={1} />
          <rect x={cx - 19} y={cy - 17 + i * 15} width={24} height={6} rx={1}
            fill="#1d4ed8" opacity={0.7} />
          <circle cx={cx + 14} cy={cy - 14 + i * 15} r={2.5}
            fill="#60a5fa" opacity={0.85} />
          <circle cx={cx + 8} cy={cy - 14 + i * 15} r={2.5}
            fill="#22c55e" opacity={0.65} />
        </g>
      ))}
    </g>
  );
}

/** 클라우드 아이콘 */
function CloudIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={26} ry={17} fill="#0f172a" stroke="#38bdf8" strokeWidth={1.3} />
      <ellipse cx={cx - 12} cy={cy + 4} rx={10} ry={8} fill="#0f172a" stroke="#38bdf8" strokeWidth={1} />
      <ellipse cx={cx + 12} cy={cy + 5} rx={10} ry={7} fill="#0f172a" stroke="#38bdf8" strokeWidth={1} />
      {/* globe lines */}
      <ellipse cx={cx} cy={cy} rx={26} ry={17} fill="none" stroke="#0ea5e9" strokeWidth={0.5} strokeOpacity={0.4} />
      <ellipse cx={cx} cy={cy} rx={12} ry={17} fill="none" stroke="#0ea5e9" strokeWidth={0.5} strokeOpacity={0.4} />
      <line x1={cx - 26} y1={cy} x2={cx + 26} y2={cy} stroke="#0ea5e9" strokeWidth={0.5} strokeOpacity={0.4} />
    </g>
  );
}

/** PC 아이콘 */
function PcIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <rect x={cx - 18} y={cy - 18} width={36} height={26} rx={2}
        fill="#1e293b" stroke="#475569" strokeWidth={1.2} />
      <rect x={cx - 15} y={cy - 15} width={30} height={18} rx={1}
        fill="#0f172a" />
      <rect x={cx - 4} y={cy + 8} width={8} height={6} rx={0} fill="#334155" />
      <rect x={cx - 13} y={cy + 14} width={26} height={4} rx={1} fill="#334155" stroke="#475569" strokeWidth={0.8} />
    </g>
  );
}

/** 화살표 경로 */
function Arrow({
  x1, y1, x2, y2, label, sublabel, color = "#64748b", dashed = false,
}: {
  x1: number; y1: number; x2: number; y2: number;
  label: string; sublabel?: string;
  color?: string; dashed?: boolean;
}) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  const len = Math.hypot(x2 - x1, y2 - y1);
  const shorten = 28;
  const ratio = (len - shorten) / len;
  const ex = x1 + (x2 - x1) * ratio;
  const ey = y1 + (y2 - y1) * ratio;
  const sx = x1 + (x2 - x1) * (shorten / len);
  const sy = y1 + (y2 - y1) * (shorten / len);

  return (
    <g>
      <defs>
        <marker id={`arr-${label.replace(/\s/g, "")}`} markerWidth={8} markerHeight={8}
          refX={6} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <line x1={sx} y1={sy} x2={ex} y2={ey}
        stroke={color} strokeWidth={2}
        strokeDasharray={dashed ? "8 4" : undefined}
        markerEnd={`url(#arr-${label.replace(/\s/g, "")})`}
      />
      {/* label box */}
      <rect x={mx - 36} y={my - 10} width={72} height={sublabel ? 20 : 13} rx={4}
        fill="#0f172a" opacity={0.85} />
      <text x={mx} y={sublabel ? my - 2 : my + 1.5}
        textAnchor="middle" fill={color}
        fontSize={8.5} fontWeight={700} fontFamily="ui-monospace,monospace">
        {label}
      </text>
      {sublabel && (
        <text x={mx} y={my + 9} textAnchor="middle" fill="#64748b"
          fontSize={7.5} fontFamily="ui-monospace,monospace">
          {sublabel}
        </text>
      )}
    </g>
  );
}

export function VpnTopologyDiagram({ isKo }: Props) {
  const accent = "#38bdf8";
  const green = "#22c55e";
  const muted = "#94a3b8";
  const subtle = "#64748b";

  // 좌표
  const office = { x: 320, y: 130 };
  const pc = { x: 320, y: 220 };
  const person1 = { x: 100, y: 110 };   // 한국 사무실 직원
  const person2 = { x: 100, y: 270 };   // 재택/외부 직원
  const cloud = { x: 560, y: 70 };      // GCP/Ncloud
  const idc1 = { x: 560, y: 180 };      // Gasan IDC (SSL-VPN)
  const idc2 = { x: 560, y: 310 };      // Gasan IDC (OpenVPN)

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-border bg-card/50 p-4">
      <svg
        viewBox="0 0 680 380"
        className="min-w-[560px] w-full mx-auto"
        role="img"
        aria-label={isKo ? "VPN 정책 통합 네트워크 토폴로지" : "Unified VPN Policy Network Topology"}
      >
        {/* ── 통합 ellipse ── */}
        <ellipse cx={440} cy={130} rx={72} ry={52}
          fill="none" stroke="#475569" strokeWidth={1.5} strokeDasharray="6 3" />
        <text x={440} y={120} textAnchor="middle" fill="#ef4444"
          fontSize={13} fontWeight={800} fontFamily="ui-monospace,monospace">
          {isKo ? "통합" : "Unified"}
        </text>

        {/* ── 화살표 ── */}
        {/* 사무실 직원 → Office */}
        <Arrow x1={person1.x + 22} y1={person1.y} x2={office.x - 24} y2={office.y - 10}
          label="Office VPN" color={accent} />

        {/* Office → 통합 ellipse → Cloud */}
        <line x1={office.x + 24} y1={office.y - 15} x2={cloud.x - 28} y2={cloud.y}
          stroke={accent} strokeWidth={2}
          markerEnd={`url(#arr-SSLVPN)`} />
        <defs>
          <marker id="arr-SSLVPN" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={accent} />
          </marker>
          <marker id="arr-IDC1" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={accent} />
          </marker>
          <marker id="arr-IDC2" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={green} />
          </marker>
        </defs>
        <text x={425} y={88} textAnchor="middle" fill={accent}
          fontSize={8.5} fontWeight={700} fontFamily="ui-monospace,monospace">SSL-VPN</text>

        {/* Office → IDC1 */}
        <line x1={office.x + 24} y1={office.y + 10} x2={idc1.x - 28} y2={idc1.y}
          stroke={accent} strokeWidth={2}
          markerEnd="url(#arr-IDC1)" />
        <text x={430} y={168} textAnchor="middle" fill={accent}
          fontSize={8.5} fontWeight={700} fontFamily="ui-monospace,monospace">Gabia IDC VPN</text>

        {/* 재택직원 → IDC2 (OpenVPN) */}
        <line x1={person2.x + 22} y1={person2.y} x2={idc2.x - 28} y2={idc2.y}
          stroke={green} strokeWidth={2} strokeDasharray="8 3"
          markerEnd="url(#arr-IDC2)" />
        <rect x={295} y={275} width={70} height={14} rx={4} fill="#0f172a" opacity={0.85} />
        <text x={330} y={285} textAnchor="middle" fill={green}
          fontSize={8.5} fontWeight={700} fontFamily="ui-monospace,monospace">Open VPN</text>

        {/* ── 아이콘 ── */}
        <PersonIcon cx={person1.x} cy={person1.y} />
        <text x={person1.x} y={person1.y + 26} textAnchor="middle" fill={muted}
          fontSize={9} fontFamily="ui-monospace,monospace">
          {isKo ? "한국 사무실" : "Korea Office"}
        </text>

        <PersonIcon cx={person2.x} cy={person2.y} />
        <text x={person2.x} y={person2.y + 26} textAnchor="middle" fill={muted}
          fontSize={9} fontFamily="ui-monospace,monospace">
          {isKo ? "재택/외부 직원" : "Remote Staff"}
        </text>

        <OfficeIcon cx={office.x} cy={office.y} />
        <text x={office.x} y={office.y + 34} textAnchor="middle" fill={muted}
          fontSize={8.5} fontFamily="ui-monospace,monospace">
          KR Internal
        </text>
        <PcIcon cx={pc.x} cy={pc.y} />
        <text x={pc.x} y={pc.y + 25} textAnchor="middle" fill={subtle}
          fontSize={8} fontFamily="ui-monospace,monospace">PC</text>
        {/* Office와 PC 연결선 */}
        <line x1={office.x} y1={office.y + 26} x2={pc.x} y2={pc.y - 20}
          stroke="#334155" strokeWidth={1.2} />

        <CloudIcon cx={cloud.x} cy={cloud.y} />
        <text x={cloud.x} y={cloud.y + 27} textAnchor="middle" fill={muted}
          fontSize={8.5} fontFamily="ui-monospace,monospace">
          GCP / Ncloud ETC
        </text>

        <ServerIcon cx={idc1.x} cy={idc1.y} />
        <text x={idc1.x} y={idc1.y + 30} textAnchor="middle" fill={muted}
          fontSize={8.5} fontFamily="ui-monospace,monospace">
          {isKo ? "가산 IDC (FortiGate)" : "Gasan IDC (FortiGate)"}
        </text>

        <ServerIcon cx={idc2.x} cy={idc2.y} />
        <text x={idc2.x} y={idc2.y + 30} textAnchor="middle" fill={muted}
          fontSize={8.5} fontFamily="ui-monospace,monospace">
          {isKo ? "가산 IDC (OpenVPN)" : "Gasan IDC (OpenVPN)"}
        </text>

        {/* ── 범례 ── */}
        <g transform="translate(30,350)">
          <line x1={0} y1={6} x2={24} y2={6} stroke={accent} strokeWidth={2} />
          <text x={28} y={10} fill={subtle} fontSize={8.5} fontFamily="ui-monospace,monospace">
            {isKo ? "FortiGate SSL-VPN (사무실)" : "FortiGate SSL-VPN (Office)"}
          </text>
          <line x1={200} y1={6} x2={224} y2={6} stroke={green} strokeWidth={2} strokeDasharray="8 3" />
          <text x={228} y={10} fill={subtle} fontSize={8.5} fontFamily="ui-monospace,monospace">
            {isKo ? "OpenVPN (외부 직원)" : "OpenVPN (Remote Staff)"}
          </text>
        </g>
      </svg>
    </div>
  );
}
