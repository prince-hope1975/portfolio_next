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
import { ArrowUpRight, Expand, Play, RotateCcw } from "lucide-react";
const Scene = dynamic(() => import("./AssemblyScene"), { ssr: false });
const layers = [
  {
    name: "Interface",
    title: "The part you feel.",
    text: "React and Next.js interfaces that make complex products understandable.",
    tech: "React · Next.js · TypeScript",
  },
  {
    name: "API",
    title: "A clear contract.",
    text: "Typed APIs and validation connect every interaction to dependable application logic.",
    tech: "Node.js · tRPC · Validation",
  },
  {
    name: "Worker",
    title: "Keep the work moving.",
    text: "Asynchronous AI jobs, provider integrations, and explicit retries carry work to completion.",
    tech: "Python · Redis · AI providers",
  },
  {
    name: "Storage",
    title: "A result that lasts.",
    text: "Persistent data models connect content, orders, and history to the product people use.",
    tech: "PostgreSQL · Drizzle · Object storage",
  },
];
const phases = [
  "Ready when you are",
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
function AssemblyPoster({ selected }: { selected: number }) {
  return (
    <div className="assembly-poster" aria-hidden="true">
      {layers.map((layer, i) => (
        <div
          key={layer.name}
          className={`poster-slab slab-${i} ${selected === i ? "selected" : ""}`}
        >
          <span>0{i + 1}</span>
          <strong>{layer.name}</strong>
          <span>↗</span>
        </div>
      ))}
    </div>
  );
}
export function SystemAssembly({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [phase, setPhase] = useState(0);
  const [running, setRunning] = useState(false);
  const [retry, setRetry] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const reduced = !!useReducedMotion();
  const onFailure = useCallback(() => setFailed(true), []);
  const onReady = useCallback(() => setSceneReady(true), []);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2");
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
  }, [phase, running, retry, reduced]);
  const reset = () => {
    setRunning(false);
    setPhase(0);
    setSelected(0);
    setExpanded(true);
    setResetKey((k) => k + 1);
  };
  const fallback = <AssemblyPoster selected={selected} />;
  return (
    <div
      className={`system-assembly ${compact ? "assembly-compact" : ""}`}
      ref={root}
    >
      <div className="assembly-heading">
        <span className="eyebrow">FIG. 01 / A SYSTEM, IN PIECES</span>
        <span className="assembly-live">
          <span /> {failed ? "2D VIEW" : "INTERACTIVE 3D"}
        </span>
      </div>
      <div
        className="assembly-stage"
        aria-label="Four-layer interactive system sculpture"
      >
        <div className="stage-orbit" aria-hidden="true" />
        <span className="stage-cross cross-a" aria-hidden="true">
          +
        </span>
        <span className="stage-cross cross-b" aria-hidden="true">
          +
        </span>
        {ready && !failed ? (
          <SceneBoundary fallback={fallback} onFailure={onFailure}>
            <Scene
              selected={selected}
              expanded={expanded}
              active={
                running
                  ? phase === 0
                    ? 0
                    : phase === 1
                      ? 1
                      : phase === 5
                        ? 3
                        : 2
                  : -1
              }
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
            ? "EXPLORE THE LAYERS BELOW"
            : "DRAG TO TURN · SELECT A LAYER"}
        </span>
        <button
          className="assembly-expand"
          aria-pressed={expanded}
          onClick={() => setExpanded((v) => !v)}
        >
          <Expand size={14} />
          {expanded ? "Collapse" : "Expand system"}
        </button>
      </div>
      <div className="assembly-tabs" role="group" aria-label="System layers">
        {layers.map((layer, i) => (
          <button
            key={layer.name}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            <span>0{i + 1}</span>
            {layer.name}
            <ArrowUpRight size={13} />
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
            setExpanded(true);
            setRunning(true);
          }}
        >
          <Play size={13} />
          {running ? "Running…" : phase === 5 ? "Run again" : "Run a request"}
        </button>
        <button
          className="assembly-reset"
          onClick={reset}
          aria-label="Reset system"
        >
          <RotateCcw size={16} />
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
      <div className="assembly-status">
        <span role="status" aria-live="polite">
          {phase === 5 ? "✓ " : "↳ "}
          {phases[phase]}
        </span>
        <span>SIMULATION</span>
      </div>
    </div>
  );
}
