import { useRef } from "react";

const Lights = () => {
  const pointLight = useRef<any>();

  // useHelper(pointLight, PointLightHelper, 5, "red");
  return (
    <>
      <pointLight
        position={[0, 100, 0]}
        intensity={1000}
        ref={pointLight}
        color={"#ffffff"}
        castShadow
      />
      <pointLight
        position={[0, 0, 100]}
        intensity={1000}
        ref={pointLight}
        color={"#ffffff"}
        castShadow
      />
      <pointLight
        position={[100, 0, 0]}
        intensity={1000}
        ref={pointLight}
        color={"#ffffff"}
        castShadow
      />

      {/* <pointLight position={[0, -30, 0]} intensity={1000} ref={pointLight} /> */}
    </>
  );
};

export default Lights;
