import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p className="mt-4 whitespace-nowrap font-mono text-xs text-code-green">
        {progress !== 0 ? `loading ${progress.toFixed(0)}%` : "loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
