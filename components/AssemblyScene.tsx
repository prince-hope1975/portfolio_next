import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import {
  CatmullRomCurve3,
  Group,
  Mesh,
  OrthographicCamera,
  Vector3,
} from "three";

type Props = {
  selected: number;
  active: number;
  phase: number;
  running: boolean;
  paused: boolean;
  reduced: boolean;
  visible: boolean;
  resetKey: number;
  onSelect: (index: number) => void;
  onFailure: () => void;
  onReady: () => void;
};
const positions: [number, number, number][] = [
  [-2.9, 0, 0.45],
  [-0.75, 0, -0.8],
  [1.0, 0, 0.8],
  [2.9, 0, -0.7],
];
const routePoints: [number, number, number][][] = [
  [
    [-2.9, 0.18, 0.45],
    [-2, 0.18, 0.45],
    [-1.8, 0.18, -0.8],
    [-0.75, 0.18, -0.8],
  ],
  [
    [-0.75, 0.18, -0.8],
    [0.1, 0.18, -0.8],
    [0.2, 0.18, 0.8],
    [1, 0.18, 0.8],
  ],
  [
    [1, 0.18, 0.8],
    [2, 0.18, 0.8],
    [2.05, 0.18, -0.7],
    [2.9, 0.18, -0.7],
  ],
];
const curves = routePoints.map(
  (points) =>
    new CatmullRomCurve3(
      points.map((p) => new Vector3(...p)),
      false,
      "catmullrom",
      0.12,
    ),
);
function Node({
  index,
  selected,
  active,
  running,
  paused,
  reduced,
  onSelect,
}: Pick<
  Props,
  "selected" | "active" | "running" | "paused" | "reduced" | "onSelect"
> & { index: number }) {
  const rotor = useRef<Group>(null);
  const { invalidate } = useThree();
  const lit = selected === index || active === index;
  useEffect(
    () => invalidate(),
    [selected, active, running, paused, reduced, invalidate],
  );
  useFrame((_, dt) => {
    if (index === 2 && rotor.current && !paused && !reduced) {
      rotor.current.rotation.y += Math.min(dt, 0.05) * (running ? 1.2 : 0.12);
      invalidate();
    }
  });
  const metal = (
    <meshStandardMaterial
      color={lit ? "#66878e" : "#505e67"}
      metalness={0.7}
      roughness={0.3}
    />
  );
  const cyan = (
    <meshStandardMaterial
      color="#61e5f3"
      emissive="#61e5f3"
      emissiveIntensity={lit ? 0.8 : 0.25}
      roughness={0.35}
    />
  );
  return (
    <group
      position={positions[index]}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(index);
      }}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "";
      }}
    >
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry
          args={[
            index === 0 ? 1.12 : 0.93,
            index === 0 ? 1.12 : 0.93,
            0.12,
            64,
          ]}
        />
        <meshStandardMaterial
          color="#242d34"
          metalness={0.4}
          roughness={0.55}
        />
      </mesh>
      <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[index === 0 ? 1.08 : 0.89, 0.025, 8, 64]} />
        <meshStandardMaterial
          color={lit ? "#61e5f3" : "#42545e"}
          emissive="#61e5f3"
          emissiveIntensity={lit ? 0.7 : 0}
        />
      </mesh>
      {index === 0 ? (
        <group>
          <mesh position={[0, 0.55, 0]}>
            <cylinderGeometry args={[0.09, 0.14, 0.7, 24]} />
            {metal}
          </mesh>
          <group position={[0, 1.25, 0]} rotation={[-0.12, 0, 0]}>
            <RoundedBox args={[2.1, 1.45, 0.17]} radius={0.08} smoothness={4}>
              {metal}
            </RoundedBox>
            <RoundedBox
              args={[1.9, 1.25, 0.03]}
              radius={0.03}
              position={[0, 0, 0.1]}
            >
              <meshStandardMaterial color="#111b22" roughness={0.5} />
            </RoundedBox>
            <mesh position={[-0.45, 0.4, 0.13]}>
              <boxGeometry args={[0.7, 0.055, 0.02]} />
              {cyan}
            </mesh>
            {[-0.53, 0, 0.53].map((x, i) => (
              <RoundedBox
                key={x}
                args={[0.43, 0.43, 0.025]}
                radius={0.025}
                position={[x, -0.05, 0.14]}
              >
                <meshStandardMaterial
                  color={i === 1 ? "#61e5f3" : "#3b5260"}
                  emissive={i === 1 ? "#61e5f3" : "#000000"}
                  emissiveIntensity={0.2}
                />
              </RoundedBox>
            ))}
            <mesh position={[0, -0.45, 0.14]}>
              <boxGeometry args={[1.5, 0.045, 0.02]} />
              <meshStandardMaterial color="#5e707c" />
            </mesh>
          </group>
        </group>
      ) : index === 1 ? (
        <group position={[0, 0.85, 0]}>
          <mesh rotation={[0, Math.PI / 4, 0]}>
            <octahedronGeometry args={[0.74, 0]} />
            <meshStandardMaterial
              color="#293a43"
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
          <mesh rotation={[0, Math.PI / 4, 0]}>
            <octahedronGeometry args={[0.755, 0]} />
            <meshBasicMaterial color={lit ? "#61e5f3" : "#658c98"} wireframe />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.84, 0.025, 8, 64]} />
            {cyan}
          </mesh>
        </group>
      ) : index === 2 ? (
        <group position={[0, 0.4, 0]}>
          <group ref={rotor}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.6, 0.16, 12, 48]} />
              {metal}
            </mesh>
            {Array.from({ length: 12 }, (_, i) => {
              const a = (i * Math.PI) / 6;
              return (
                <mesh
                  key={i}
                  position={[Math.cos(a) * 0.77, 0, Math.sin(a) * 0.77]}
                  rotation={[0, -a, 0]}
                >
                  <boxGeometry args={[0.28, 0.26, 0.19]} />
                  {metal}
                </mesh>
              );
            })}
            {[0, 1, 2].map((i) => (
              <mesh key={i} rotation={[0, (i * Math.PI) / 3, 0]}>
                <boxGeometry args={[1.15, 0.12, 0.09]} />
                {metal}
              </mesh>
            ))}
          </group>
          <mesh position={[0, 0.11, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.22, 32]} />
            {cyan}
          </mesh>
        </group>
      ) : (
        <group position={[0, 0.38, 0]}>
          {[0, 0.3, 0.6].map((y, i) => (
            <group key={y} position={[0, y, 0]}>
              <mesh>
                <cylinderGeometry args={[0.64, 0.64, 0.24, 64]} />
                {metal}
              </mesh>
              <mesh position={[0, 0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.61, 0.025, 8, 64]} />
                {cyan}
              </mesh>
              {i === 2 && (
                <mesh position={[0, 0.14, 0]}>
                  <cylinderGeometry args={[0.19, 0.19, 0.03, 32]} />
                  <meshStandardMaterial color="#222e35" />
                </mesh>
              )}
            </group>
          ))}
        </group>
      )}
    </group>
  );
}
function Signals({
  active,
  phase,
  running,
  paused,
  reduced,
}: Pick<Props, "active" | "phase" | "running" | "paused" | "reduced">) {
  const marker = useRef<Mesh>(null);
  const started = useRef(0);
  const { invalidate } = useThree();
  useEffect(() => {
    started.current = 0;
    invalidate();
  }, [active, phase, running, paused, reduced, invalidate]);
  useFrame((state) => {
    if (!marker.current) return;
    if (!started.current) started.current = state.clock.elapsedTime;
    const route = curves[Math.max(0, Math.min(2, active - 1))];
    const elapsed = state.clock.elapsedTime - started.current;
    const progress =
      reduced || paused || phase === 3 || phase === 4
        ? 1
        : Math.min(elapsed / 0.7, 1);
    marker.current.position.copy(route.getPointAt(progress));
    marker.current.position.y = 0.3;
    if ((running || phase === 5) && !paused && !reduced && progress < 1)
      invalidate();
  });
  return (
    <group>
      {curves.map((curve, i) => (
        <mesh key={i}>
          <tubeGeometry args={[curve, 60, 0.035, 8, false]} />
          <meshStandardMaterial
            color={
              running && active - 1 === i
                ? phase === 4
                  ? "#f4bb62"
                  : "#61e5f3"
                : "#42606c"
            }
            emissive={phase === 4 ? "#f4bb62" : "#61e5f3"}
            emissiveIntensity={running && active - 1 === i ? 1 : 0.1}
          />
        </mesh>
      ))}
      <mesh ref={marker} visible={(running && active > 0) || phase === 5}>
        <sphereGeometry args={[0.095, 20, 20]} />
        <meshStandardMaterial
          color={phase === 4 ? "#f4bb62" : "#ffffff"}
          emissive={phase === 4 ? "#f4bb62" : "#61e5f3"}
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}
function CameraAndContext({
  onReady,
  onFailure,
}: {
  onReady: () => void;
  onFailure: () => void;
}) {
  const { camera, size, invalidate, gl } = useThree();
  const announced = useRef(false);
  useEffect(() => {
    const cam = camera as OrthographicCamera;
    cam.zoom = Math.min(size.width / 10.4, size.height / 6.7);
    cam.updateProjectionMatrix();
    invalidate();
  }, [camera, size.width, size.height, invalidate]);
  useEffect(() => {
    const canvas = gl.domElement;
    const lost = (e: Event) => {
      e.preventDefault();
      onFailure();
    };
    canvas.addEventListener("webglcontextlost", lost);
    return () => canvas.removeEventListener("webglcontextlost", lost);
  }, [gl, onFailure]);
  useFrame(() => {
    if (!announced.current) {
      announced.current = true;
      requestAnimationFrame(onReady);
    }
  });
  return null;
}
export default function AssemblyScene(props: Props) {
  const [documentVisible, setDocumentVisible] = useState(true);
  useEffect(() => {
    const update = () => setDocumentVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(
    () => () => {
      document.body.style.cursor = "";
    },
    [],
  );
  const bolts = useMemo(
    () => [
      [-3.95, -1.85],
      [-3.95, 1.85],
      [3.95, -1.85],
      [3.95, 1.85],
    ],
    [],
  );
  return (
    <Canvas
      key={props.resetKey}
      dpr={[1, 1.5]}
      frameloop={props.visible && documentVisible ? "demand" : "never"}
      orthographic
      camera={{ position: [7, 8.5, 11], zoom: 55, near: 0.1, far: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => gl.setClearColor("#15191d", 0)}
    >
      <ambientLight intensity={1.3} />
      <directionalLight position={[-4, 8, 6]} intensity={3} />
      <directionalLight position={[4, 4, -5]} intensity={2} color="#91dce5" />
      <group rotation={[0, -0.16, 0]}>
        <RoundedBox
          args={[8.7, 0.18, 4.4]}
          radius={0.12}
          smoothness={4}
          position={[0, -0.08, 0]}
        >
          <meshStandardMaterial
            color="#202a32"
            roughness={0.7}
            metalness={0.35}
          />
        </RoundedBox>
        <RoundedBox
          args={[8.4, 0.06, 4.1]}
          radius={0.08}
          smoothness={4}
          position={[0, 0.04, 0]}
        >
          <meshStandardMaterial color="#172129" roughness={0.8} />
        </RoundedBox>
        {bolts.map(([x, z], i) => (
          <mesh key={i} position={[x, 0.1, z]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.045, 12]} />
            <meshBasicMaterial color="#60727f" />
          </mesh>
        ))}
        <Signals {...props} />
        {positions.map((_, index) => (
          <Node key={index} index={index} {...props} />
        ))}
      </group>
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        enableDamping={!props.reduced && !props.paused}
        minPolarAngle={0.55}
        maxPolarAngle={1.2}
        minAzimuthAngle={-0.4}
        maxAzimuthAngle={0.85}
        rotateSpeed={0.45}
      />
      <CameraAndContext onReady={props.onReady} onFailure={props.onFailure} />
    </Canvas>
  );
}
