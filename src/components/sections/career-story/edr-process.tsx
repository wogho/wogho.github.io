"use client";

interface Props {
  isKo: boolean;
}

// ── 쉐브론 배너 ──────────────────────────────────────────
function Chevron({
  x, y, w, h, color, label, step, last = false,
}: {
  x: number; y: number; w: number; h: number;
  color: string; label: string; step: string;
  last?: boolean;
}) {
  const tip = h / 2;        // 오른쪽 뾰족 튀어나오는 길이
  const cx = x + w / 2;
  const cy = y + h / 2;

  // 마지막 단계는 뾰족이 없음
  const points = last
    ? `${x},${y} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}`
    : `${x},${y} ${x + w},${y} ${x + w + tip},${cy} ${x + w},${y + h} ${x},${y + h}`;

  return (
    <g>
      <polygon points={points} fill={color} />
      {/* 단계 번호 */}
      <text x={cx - 8} y={cy - 6} textAnchor="middle" fill="rgba(255,255,255,0.45)"
        fontSize={9} fontWeight={700} fontFamily="ui-monospace,monospace">{step}</text>
      {/* 레이블 */}
      <text x={cx - 6} y={cy + 7} textAnchor="middle" fill="#ffffff"
        fontSize={11} fontWeight={800} fontFamily="'Noto Sans KR',sans-serif">{label}</text>
    </g>
  );
}

// ── 벌레/모니터 아이콘 ──────────────────────────────────
function BugIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {/* 화면 테두리 */}
      <rect x={cx - 20} y={cy - 18} width={40} height={28} rx={3}
        fill="none" stroke="#38bdf8" strokeWidth={1.5} />
      <line x1={cx - 20} y1={cy + 4} x2={cx + 20} y2={cy + 4}
        stroke="#38bdf8" strokeWidth={1} />
      <line x1={cx} y1={cy + 4} x2={cx} y2={cy + 10}
        stroke="#38bdf8" strokeWidth={1.2} />
      <line x1={cx - 12} y1={cy + 10} x2={cx + 12} y2={cy + 10}
        stroke="#38bdf8" strokeWidth={1.2} />
      {/* 벌레 몸 */}
      <ellipse cx={cx} cy={cy - 6} rx={9} ry={11}
        fill="none" stroke="#ef4444" strokeWidth={1.3} />
      <line x1={cx} y1={cy - 17} x2={cx} y2={cy + 5}
        stroke="#ef4444" strokeWidth={0.8} strokeOpacity={0.5} />
      {/* 다리 */}
      {([-10, -3, 5] as number[]).map((dy, i) => (
        <g key={i}>
          <line x1={cx - 9} y1={cy + dy} x2={cx - 16} y2={cy + dy - 4}
            stroke="#ef4444" strokeWidth={1} />
          <line x1={cx + 9} y1={cy + dy} x2={cx + 16} y2={cy + dy - 4}
            stroke="#ef4444" strokeWidth={1} />
        </g>
      ))}
    </g>
  );
}

function ChartIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <rect x={cx - 20} y={cy - 18} width={40} height={32} rx={3}
        fill="none" stroke="#38bdf8" strokeWidth={1.5} />
      {/* 경고 삼각형 */}
      <polygon points={`${cx},${cy - 14} ${cx - 8},${cy - 2} ${cx + 8},${cy - 2}`}
        fill="none" stroke="#f59e0b" strokeWidth={1.3} />
      <line x1={cx} y1={cy - 10} x2={cx} y2={cy - 6} stroke="#f59e0b" strokeWidth={1.2} />
      <circle cx={cx} cy={cy - 4} r={1} fill="#f59e0b" />
      {/* 바 차트 */}
      {([[-10, 10], [-3, 6], [4, 8], [11, 4]] as [number, number][]).map(([dx, h], i) => (
        <rect key={i} x={cx + dx - 2} y={cy + 14 - h} width={5} height={h} rx={1}
          fill="#38bdf8" opacity={0.7} />
      ))}
      <line x1={cx - 20} y1={cy + 14} x2={cx + 20} y2={cy + 14}
        stroke="#475569" strokeWidth={0.8} />
    </g>
  );
}

function ResponseIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {/* 기어 */}
      <circle cx={cx - 8} cy={cy - 5} r={9}
        fill="none" stroke="#38bdf8" strokeWidth={1.4} />
      <circle cx={cx - 8} cy={cy - 5} r={4}
        fill="none" stroke="#38bdf8" strokeWidth={1} />
      {([0, 45, 90, 135, 180, 225, 270, 315] as number[]).map((deg, i) => {
        const r = Math.PI * deg / 180;
        const ix = cx - 8 + Math.cos(r) * 9;
        const iy = cy - 5 + Math.sin(r) * 9;
        const ox = cx - 8 + Math.cos(r) * 12;
        const oy = cy - 5 + Math.sin(r) * 12;
        return <line key={i} x1={ix} y1={iy} x2={ox} y2={oy} stroke="#38bdf8" strokeWidth={2} />;
      })}
      {/* 사람들 */}
      <circle cx={cx + 10} cy={cy - 16} r={5}
        fill="none" stroke="#94a3b8" strokeWidth={1.2} />
      <circle cx={cx + 18} cy={cy - 16} r={5}
        fill="none" stroke="#94a3b8" strokeWidth={1.2} />
      <path d={`M${cx + 2},${cy - 2} Q${cx + 10},${cy - 8} ${cx + 18},${cy - 2}`}
        fill="none" stroke="#94a3b8" strokeWidth={1.2} />
      <path d={`M${cx + 10},${cy - 2} Q${cx + 18},${cy - 8} ${cx + 26},${cy - 2}`}
        fill="none" stroke="#94a3b8" strokeWidth={1.2} />
    </g>
  );
}

/* ── 박스 종류 ── */
type BoxKind = "process" | "decision" | "result-good" | "result-bad" | "monitor";

function Box({
  x, y, w = 130, h = 38, kind, label, sublabel,
}: {
  x: number; y: number; w?: number; h?: number;
  kind: BoxKind; label: string; sublabel?: string;
}) {
  const configs: Record<BoxKind, { fill: string; stroke: string; textColor: string }> = {
    process:      { fill: "#0f172a", stroke: "#38bdf8", textColor: "#e2e8f0" },
    decision:     { fill: "#1c1917", stroke: "#f59e0b", textColor: "#fde68a" },
    "result-good":{ fill: "#052e16", stroke: "#22c55e", textColor: "#86efac" },
    "result-bad": { fill: "#1c0a0a", stroke: "#ef4444", textColor: "#fca5a5" },
    monitor:      { fill: "#0f172a", stroke: "#8b5cf6", textColor: "#c4b5fd" },
  };
  const { fill, stroke, textColor } = configs[kind];
  const cx = x + w / 2;
  const cy = y + h / 2;

  if (kind === "decision") {
    // 마름모
    const hw = w / 2, hh = h / 2 + 4;
    return (
      <g>
        <polygon
          points={`${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`}
          fill={fill} stroke={stroke} strokeWidth={1.4}
        />
        <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
          fill={textColor} fontSize={9} fontWeight={700} fontFamily="ui-monospace,monospace">
          {label}
        </text>
        {sublabel && (
          <text x={cx} y={cy + 11} textAnchor="middle" fill={textColor}
            fontSize={7.5} fontFamily="ui-monospace,monospace" opacity={0.75}>
            {sublabel}
          </text>
        )}
      </g>
    );
  }

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={5}
        fill={fill} stroke={stroke} strokeWidth={1.4} />
      <text x={cx} y={sublabel ? cy - 4 : cy + 1}
        textAnchor="middle" dominantBaseline="middle"
        fill={textColor} fontSize={9} fontWeight={600} fontFamily="ui-monospace,monospace">
        {label}
      </text>
      {sublabel && (
        <text x={cx} y={cy + 9} textAnchor="middle"
          fill={textColor} fontSize={7.5} fontFamily="ui-monospace,monospace" opacity={0.7}>
          {sublabel}
        </text>
      )}
    </g>
  );
}

/* ── 화살표 ── */
function Arrow({
  x1, y1, x2, y2, label, color = "#475569", bend,
}: {
  x1: number; y1: number; x2: number; y2: number;
  label?: string; color?: string; bend?: boolean;
}) {
  const id = `arr-${x1}-${y1}-${x2}-${y2}`;
  let d: string;
  const lx = (x1 + x2) / 2;
  const ly = (y1 + y2) / 2;

  if (bend) {
    // 꺾인 경로: 수직 → 수평
    d = `M${x1},${y1} L${x1},${y2} L${x2},${y2}`;
  } else {
    d = `M${x1},${y1} L${x2},${y2}`;
  }

  return (
    <g>
      <defs>
        <marker id={id} markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <path d={d} fill="none" stroke={color} strokeWidth={1.6}
        markerEnd={`url(#${id})`} />
      {label && (
        <>
          <rect x={lx - 26} y={ly - 8} width={52} height={13} rx={3}
            fill="#0f172a" opacity={0.9} />
          <text x={lx} y={ly + 1} textAnchor="middle"
            fill={color} fontSize={8} fontWeight={700} fontFamily="ui-monospace,monospace">
            {label}
          </text>
        </>
      )}
    </g>
  );
}

export function EdrProcessDiagram({ isKo }: Props) {
  const ko = isKo;

  // 쉐브론 3단계
  const CW = 210;  // 쉐브론 너비
  const CH = 52;   // 쉐브론 높이
  const GAP = 14;  // 겹침/간격
  const Y = 30;    // 쉐브론 Y

  const steps = [
    { x: 20,                   color: "#2d3f5e", label: ko ? "관제측 이벤트 보고" : "Event Report",       step: "01" },
    { x: 20 + CW - GAP,        color: "#3a4f72", label: ko ? "분석 및 판단"       : "Analysis & Triage",  step: "02" },
    { x: 20 + (CW - GAP) * 2,  color: "#1e3a6a", label: ko ? "이상징후 대응"      : "Anomaly Response",   step: "03" },
  ] as const;

  // 아이콘 중심
  const IY = Y + CH + 36;

  // 하위 항목
  const subItems = [
    [
      { dot: "#ef4444", text: ko ? "EDR Agent 이벤트 수신" : "EDR Agent Event Received" },
      { dot: "#f59e0b", text: ko ? "Fileless / 랜섬웨어 탐지" : "Fileless / Ransomware Detected" },
    ],
    [
      { dot: "#ef4444", text: "High"   },
      { dot: "#f59e0b", text: "Medium" },
      { dot: "#38bdf8", text: "Low"    },
    ],
    [
      { dot: "#38bdf8", text: ko ? "상황보고" : "Status Report" },
      { dot: "#22c55e", text: ko ? "사고대응" : "Incident Response" },
    ],
  ];

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-border bg-card/50 p-4">
      <svg
        viewBox="0 0 690 230"
        className="min-w-[500px] w-full mx-auto"
        role="img"
        aria-label={ko ? "EDR/NGAV 운영 프로세스" : "EDR/NGAV Operations Process"}
      >
        {/* ── 쉐브론 배너 ── */}
        {steps.map((s, i) => (
          <Chevron
            key={i}
            x={s.x} y={Y} w={CW} h={CH}
            color={s.color}
            label={s.label}
            step={s.step}
            last={i === steps.length - 1}
          />
        ))}

        {/* ── 아이콘 ── */}
        <BugIcon      cx={steps[0].x + CW * 0.35} cy={IY} />
        <ChartIcon    cx={steps[1].x + CW * 0.35} cy={IY} />
        <ResponseIcon cx={steps[2].x + CW * 0.35} cy={IY} />

        {/* ── 하위 항목 ── */}
        {subItems.map((items, col) => {
          const bx = steps[col].x + CW * 0.57;
          const by = IY - 14;
          return (
            <g key={col}>
              {items.map((item, row) => (
                <g key={row}>
                  <circle cx={bx} cy={by + row * 19} r={3.5}
                    fill={item.dot} opacity={0.85} />
                  <text x={bx + 8} y={by + row * 19 + 4}
                    fill="#cbd5e1" fontSize={9.5}
                    fontFamily="'Noto Sans KR',ui-monospace,monospace">
                    {item.text}
                  </text>
                </g>
              ))}
            </g>
          );
        })}

        {/* ── 세로 구분선 ── */}
        {[1, 2].map(i => (
          <line key={i}
            x1={steps[i].x + 2} y1={IY - 34}
            x2={steps[i].x + 2} y2={IY + 34}
            stroke="#334155" strokeWidth={1} strokeDasharray="4 3" />
        ))}
      </svg>
    </div>
  );
}
