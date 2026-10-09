import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import { Group, Mesh, MathUtils, OrthographicCamera } from "three";

type Props = {
  selected: number;
  expanded: boolean;
  active: number;
  reduced: boolean;
  visible: boolean;
  onSelect: (index: number) => void;
  onFailure: () => void;
  resetKey: number;
  onReady: () => void;
};
const colors = ["#2448e8", "#f5edc8", "#d94745", "#a9b3bf"];
function Layer({
  index,
  selected,
  expanded,
  active,
  reduced,
  onSelect,
}: Pick<Props, "selected" | "expanded" | "active" | "reduced" | "onSelect"> & {
  index: number;
}) {
  const group = useRef<Group>(null);
  const { invalidate } = useThree();
  const target = (1.5 - index) * (expanded ? 1.12 : 0.6);
  useEffect(() => invalidate(), [target, selected, active, invalidate]);
  useFrame((_, dt) => {
    if (!group.current) return;
    const previous = group.current.position.y;
    group.current.position.y = reduced
      ? target
      : MathUtils.damp(previous, target, 8, dt);
    if (Math.abs(previous - target) > 0.001) invalidate();
  });
  return (
    <group ref={group} position={[0, target, 0]}>
      <RoundedBox
        args={[3.55, 0.32, 2.45]}
        radius={0.12}
        smoothness={4}
        onClick={(event) => {
          event.stopPropagation();
          onSelect(index);
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "";
        }}
      >
        <meshStandardMaterial
          color={colors[index]}
          roughness={index === 3 ? 0.26 : 0.42}
          metalness={index === 3 ? 0.65 : 0.12}
          emissive={colors[index]}
          emissiveIntensity={
            active === index ? 0.45 : selected === index ? 0.09 : 0
          }
        />
      </RoundedBox>
      {index === 0 ? (
        <group position={[0, 0.18, 0]}>
          <RoundedBox args={[2.85, 0.04, 1.85]} radius={0.05}>
            <meshStandardMaterial color="#172b97" roughness={0.45} />
          </RoundedBox>
          {[-0.8, -0.1, 0.6].map((x, i) => (
            <RoundedBox
              key={x}
              args={[0.48, 0.05, 0.78]}
              radius={0.03}
              position={[x, 0.04, 0.15]}
            >
              <meshStandardMaterial color={i === 1 ? "#d94745" : "#f5edc8"} />
            </RoundedBox>
          ))}
          <mesh position={[-0.6, 0.04, -0.62]}>
            <boxGeometry args={[1.7, 0.04, 0.12]} />
            <meshStandardMaterial color="#f5edc8" />
          </mesh>
        </group>
      ) : index === 1 ? (
        <group position={[0, 0.19, 0]}>
          {[-0.8, 0, 0.8].map((x) => (
            <mesh key={x} position={[x, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.24, 0.055, 12, 36]} />
              <meshStandardMaterial
                color="#2448e8"
                metalness={0.3}
                roughness={0.3}
              />
            </mesh>
          ))}
        </group>
      ) : index === 2 ? (
        <group position={[0, 0.2, 0]}>
          {[-0.7, 0, 0.7].map((x, i) => (
            <mesh key={x} position={[x, 0, i % 2 ? 0.3 : -0.3]}>
              <boxGeometry args={[0.38, 0.06, 0.38]} />
              <meshStandardMaterial color="#f5edc8" />
            </mesh>
          ))}
        </group>
      ) : (
        <group position={[0, 0.2, 0]}>
          {[-0.65, 0.65].map((x) => (
            <mesh key={x} position={[x, 0.1, 0]}>
              <cylinderGeometry args={[0.36, 0.36, 0.22, 48]} />
              <meshStandardMaterial
                color="#2448e8"
                roughness={0.3}
                metalness={0.35}
              />
            </mesh>
          ))}
        </group>
      )}
      {[-1.47, 1.47].map((x) => (
        <mesh key={x} position={[x, 0, 1.231]}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial
            color={active === index ? "#ffffff" : "#20221e"}
            emissive="#ffffff"
            emissiveIntensity={active === index ? 2 : 0}
          />
        </mesh>
      ))}
    </group>
  );
}
function RequestSignal({
  active,
  expanded,
  reduced,
}: {
  active: number;
  expanded: boolean;
  reduced: boolean;
}) {
  const marker = useRef<Mesh>(null);
  const { invalidate } = useThree();
  useEffect(() => invalidate(), [active, expanded, invalidate]);
  useFrame((state, dt) => {
    if (!marker.current || active < 0) return;
    const y = (1.5 - active) * (expanded ? 1.12 : 0.6) + 0.25;
    marker.current.position.y = reduced
      ? y
      : MathUtils.damp(marker.current.position.y, y, 5, dt);
    const scale = reduced
      ? 1
      : 1 + Math.sin(state.clock.elapsedTime * 6) * 0.15;
    marker.current.scale.setScalar(scale);
    if (!reduced) invalidate();
  });
  return (
    <mesh ref={marker} visible={active >= 0} position={[1.7, 1.9, 1.3]}>
      <sphereGeometry args={[0.13, 24, 24]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={1.2}
      />
    </mesh>
  );
}
function ContextGuard({ onFailure }: { onFailure: () => void }) {
  const { gl } = useThree();
  useEffect(() => {
    const canvas = gl.domElement;
    const lost = (e: Event) => {
      e.preventDefault();
      onFailure();
    };
    canvas.addEventListener("webglcontextlost", lost);
    return () => canvas.removeEventListener("webglcontextlost", lost);
  }, [gl, onFailure]);
  return null;
}
function FitCamera({ onReady }: { onReady: () => void }) {
  const { camera, size, invalidate } = useThree();
  useEffect(() => {
    const cam = camera as OrthographicCamera;
    cam.zoom = Math.min(size.width / 6.4, size.height / 5.9);
    cam.updateProjectionMatrix();
    invalidate();
  }, [camera, size.width, size.height, invalidate]);
  const announced = useRef(false);
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
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(
    () => () => {
      document.body.style.cursor = "";
    },
    [],
  );
  return (
    <Canvas
      key={props.resetKey}
      dpr={[1, 1.5]}
      frameloop={props.visible && documentVisible ? "demand" : "never"}
      orthographic
      camera={{ position: [6, 5, 7], zoom: 75, near: 0.1, far: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#f5edc8", 0);
      }}
    >
      <ambientLight intensity={1.8} />
      <directionalLight position={[4, 8, 4]} intensity={3} />
      <directionalLight
        position={[-5, 2, -3]}
        intensity={1.2}
        color="#cbd4ff"
      />
      <group rotation={[0, -0.25, 0]}>
        {colors.map((_, index) => (
          <Layer key={index} index={index} {...props} />
        ))}
        <RequestSignal
          active={props.active}
          expanded={props.expanded}
          reduced={props.reduced}
        />
      </group>
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        enableDamping={!props.reduced}
        minPolarAngle={0.65}
        maxPolarAngle={1.4}
        rotateSpeed={0.5}
      />
      <FitCamera onReady={props.onReady} />
      <ContextGuard onFailure={props.onFailure} />
    </Canvas>
  );
}
