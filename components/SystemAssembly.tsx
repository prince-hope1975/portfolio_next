import dynamic from "next/dynamic";
import {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, Pause, Play, RotateCcw } from "lucide-react";
const Scene = dynamic(() => import("./AssemblyScene"), { ssr: false });
const layers = [
  {
    name: "Interface",
    title: "An interface people can use.",
    text: "React and Next.js turn complex product workflows into clear, responsive interactions.",
    tech: "React / Next.js / TypeScript",
  },
  {
    name: "API",
    title: "Every action has a contract.",
    text: "Typed APIs validate the request and connect the interface to application logic.",
    tech: "Node.js / tRPC / Validation",
  },
  {
    name: "Worker",
    title: "Work continues behind the screen.",
    text: "Asynchronous jobs coordinate AI providers, processing, and explicit retries.",
    tech: "Python / Redis / AI integrations",
  },
  {
    name: "Storage",
    title: "The result becomes part of the product.",
    text: "Persistent models keep content, orders, and history available after the request completes.",
    tech: "PostgreSQL / Drizzle / Object storage",
  },
];
const phases = [
  "Ready to receive a request",
  "Request validated",
  "Job queued",
  "Processing job",
  "Provider timeout · retrying",
  "Result saved",
];
class SceneBoundary extends Component<
  { children: ReactNode; fallback: ReactNode; onFailure: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onFailure();
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
function AssemblyPoster({
  selected,
  active,
}: {
  selected: number;
  active: number;
}) {
  return (
    <div className="assembly-poster" aria-hidden="true">
      <svg viewBox="0 0 640 340" fill="none">
        <path
          d="M105 185H235V115H345V240H505V130"
          stroke="#42606c"
          strokeWidth="3"
        />
        {[
          [105, 185],
          [235, 115],
          [345, 240],
          [505, 130],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            <rect
              x="-52"
              y="-39"
              width="104"
              height="78"
              rx={i === 1 ? 30 : 8}
              fill="#202a32"
              stroke={selected === i || active === i ? "#61e5f3" : "#4c616e"}
              strokeWidth="2"
            />
            <text
              y="-7"
              fill="#61e5f3"
              textAnchor="middle"
              fontSize="12"
              fontFamily="monospace"
            >
              0{i + 1}
            </text>
            <text
              y="15"
              fill="#edf2f5"
              textAnchor="middle"
              fontSize="14"
              fontFamily="sans-serif"
            >
              {layers[i].name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
export function SystemAssembly({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState(0);
  const [phase, setPhase] = useState(0);
  const [running, setRunning] = useState(false);
  const [retry, setRetry] = useState(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = !!useReducedMotion();
  const reduced = ready && prefersReducedMotion;
  const onFailure = useCallback(() => setFailed(true), []);
  const onReady = useCallback(() => setSceneReady(true), []);
  const active =
    phase === 0 ? (running ? 0 : -1) : phase === 1 ? 1 : phase === 5 ? 3 : 2;
  useEffect(() => {
    try {
      const gl = document.createElement("canvas").getContext("webgl2");
      if (!gl) setFailed(true);
      else gl.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      setFailed(true);
    }
    setReady(true);
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0].isIntersecting),
      { rootMargin: "100px" },
    );
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!running) return;
    if (phase === 5) {
      setRunning(false);
      return;
    }
    const timer = window.setTimeout(
      () => {
        const next = phase === 3 && !retry ? 5 : phase + 1;
        setPhase(next);
        setSelected(next === 1 ? 1 : next === 5 ? 3 : 2);
      },
      reduced ? 350 : phase === 4 ? 1400 : 950,
    );
    return () => window.clearTimeout(timer);
  }, [running, phase, retry, reduced]);
  const reset = () => {
    setRunning(false);
    setPhase(0);
    setSelected(0);
    setResetKey((k) => k + 1);
  };
  const fallback = <AssemblyPoster selected={selected} active={active} />;
  return (
    <div
      className={`system-assembly ${compact ? "assembly-compact" : ""}`}
      ref={root}
    >
      <div className="assembly-heading">
        <span className="eyebrow">SYSTEM / 01</span>
        <span className="assembly-live">
          <span />
          {failed ? "SCHEMATIC" : "INTERACTIVE 3D"}
        </span>
      </div>
      <div
        className="assembly-stage"
        aria-label="Connected interface, API, worker and storage apparatus"
      >
        {ready && !failed ? (
          <SceneBoundary fallback={fallback} onFailure={onFailure}>
            <Scene
              selected={selected}
              active={active}
              phase={phase}
              running={running}
              paused={paused}
              reduced={reduced}
              visible={visible}
              onSelect={setSelected}
              onFailure={onFailure}
              onReady={onReady}
              resetKey={resetKey}
            />
          </SceneBoundary>
        ) : (
          fallback
        )}
        {ready && !failed && !sceneReady && fallback}
        <span className="stage-instruction">
          {failed
            ? "SELECT A COMPONENT BELOW"
            : "DRAG TO ROTATE / SELECT A COMPONENT"}
        </span>
        <button
          className="motion-toggle"
          aria-pressed={paused}
          onClick={() => setPaused((v) => !v)}
          disabled={reduced}
        >
          {paused || reduced ? <Play size={14} /> : <Pause size={14} />}{" "}
          {reduced
            ? "Reduced motion"
            : paused
              ? "Resume motion"
              : "Pause motion"}
        </button>
      </div>
      <div
        className="assembly-tabs"
        role="group"
        aria-label="System components"
      >
        {layers.map((layer, i) => (
          <button
            key={layer.name}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            <span>0{i + 1}</span>
            {layer.name}
            <ArrowUpRight size={14} />
          </button>
        ))}
      </div>
      <div className="assembly-description">
        <h3>{layers[selected].title}</h3>
        <p>{layers[selected].text}</p>
        <span>{layers[selected].tech}</span>
      </div>
      <div className="assembly-run">
        <button
          className="run-button"
          disabled={running}
          onClick={() => {
            setPhase(0);
            setSelected(0);
            setRunning(true);
          }}
        >
          <Play size={15} />
          {running
            ? "Request in progress"
            : phase === 5
              ? "Send another"
              : "Send a request"}
        </button>
        <button
          className="assembly-reset"
          onClick={reset}
          aria-label="Reset system"
        >
          <RotateCcw size={18} />
        </button>
        <label>
          <input
            type="checkbox"
            checked={retry}
            disabled={running}
            onChange={(e) => setRetry(e.target.checked)}
          />
          Include retry
        </label>
      </div>
      <div className={`assembly-status ${phase === 4 ? "is-retry" : ""}`}>
        <span role="status" aria-live="polite">
          {phase === 5 ? "✓ " : "↳ "}
          {phases[phase]}
        </span>
        <span>LOCAL SIMULATION</span>
      </div>
      {phase > 0 && (
        <ol className="event-trace" aria-label="Simulated request events">
          {phases
            .slice(1, phase + 1)
            .map((label, i) => ({ label, index: i + 1 }))
            .filter((event) => retry || event.index !== 4)
            .slice(-3)
            .map((event) => (
              <li key={event.index}>
                <span>0{event.index}</span>
                <span>{event.label}</span>
                <span>
                  {event.index === phase && running ? "ACTIVE" : "DONE"}
                </span>
              </li>
            ))}
        </ol>
      )}
    </div>
  );
}
