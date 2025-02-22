import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF("/models/programmer.glb");

  const txt = useTexture(
    props.texture ? props.texture : "textures/project/project1.png"
  );

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object_782_OnTheFly-bg_0"].geometry}
            material={materials["Material.074_40"]}
            position={[101.601, 40.622, 244.007]}
            rotation={[-Math.PI / 2, 0.078, Math.PI / 2]}
            scale={21.893}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_788_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[159.018, 47.32, 359.936]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={19.608}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_798_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[122.701, 53.533, 358.456]}
            rotation={[-Math.PI / 2, 0.163, -Math.PI]}
            scale={19.608}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_800_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[190.986, 44.577, 567.479]}
            rotation={[-Math.PI / 2, -0.089, -Math.PI]}
            scale={8.872}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_802_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[190.868, 44.628, 565.255]}
            rotation={[-Math.PI / 2, -0.089, -Math.PI]}
            scale={8.872}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_804_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[192.49, 44.42, 565.412]}
            rotation={[-Math.PI / 2, -0.089, -Math.PI]}
            scale={8.872}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_806_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[192.403, 44.401, 567.472]}
            rotation={[-Math.PI / 2, -0.089, -Math.PI]}
            scale={8.872}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_808_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[140.844, 50.582, 568.87]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_810_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[141.038, 50.582, 552.01]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.713}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_812_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[141.038, 50.582, 532.026]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.713}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_814_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[141.038, 50.582, 514.784]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.713}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_816_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[141.038, 50.582, 498.138]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.713}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_818_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[141.038, 50.582, 480.752]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.713}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_820_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[141.038, 50.582, 463.616]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.713}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_822_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[141.038, 50.582, 443.746]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.713}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_824_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[141.649, 50.885, 427.978]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.158}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_826_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[142.095, 50.955, 409.216]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.158}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_828_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[158.03, 48.549, 561.971]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_830_Material069_0.geometry}
            material={materials["Material.074_38"]}
            position={[158.03, 48.437, 543.875]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_832_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[158.03, 48.437, 528.227]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_834_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[158.03, 48.437, 509.564]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_836_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[158.03, 48.353, 494.305]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_838_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[156.657, 48.636, 594.003]}
            rotation={[-1.588, 0, Math.PI / 2]}
            scale={2.692}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_840_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[192.644, 45.65, 594.799]}
            rotation={[-Math.PI / 2, -0.12, Math.PI / 2]}
            scale={3.123}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_842_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[158.03, 48.437, 475.976]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_844_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[157.211, 48.437, 455.625]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[6.414, 5.272, 6.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_846_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[158.03, 48.437, 441.26]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_848_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[159.027, 48.639, 422.071]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={6.915}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_850_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[122.029, 53.887, 594.924]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.981}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_852_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[175.487, 47.269, 483.907]}
            rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_854_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[175.487, 47.269, 501.888]}
            rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_856_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[175.487, 47.269, 519.095]}
            rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_858_Material069_0.geometry}
            material={materials["Material.074_38"]}
            position={[175.487, 47.269, 537.014]}
            rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_860_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[175.487, 47.166, 554.659]}
            rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_862_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[175.487, 47.269, 467.983]}
            rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_864_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[175.487, 47.269, 450.283]}
            rotation={[-Math.PI / 2, -0.099, Math.PI / 2]}
            scale={6.414}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_866_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[122.444, 53.931, 578.061]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_868_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[122.058, 53.851, 561.226]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={3.17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_870_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[127.008, 53.029, 560.64]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_872_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[192.644, 45.65, 359.946]}
            rotation={[-Math.PI / 2, -0.12, Math.PI / 2]}
            scale={3.123}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_874_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[156.285, 46.937, 363.379]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={4.006}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_876_Material069_0.geometry}
            material={materials["Material.074_38"]}
            position={[122.484, 53.905, 543.373]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={3.822}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_878_Material069_0.geometry}
            material={materials["Material.074_38"]}
            position={[127.434, 53.083, 543.258]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_880_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[122.484, 53.745, 525.768]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={3.822}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_882_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[127.434, 52.923, 525.651]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_884_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[101.739, 56.424, 595.272]}
            rotation={[-Math.PI / 2, 0.141, Math.PI / 2]}
            scale={4.184}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_886_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[122.484, 53.852, 509.285]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={3.822}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_888_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[127.434, 53.031, 508.772]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_890_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[101.367, 56.132, 484.341]}
            rotation={[-Math.PI / 2, 0.151, Math.PI / 2]}
            scale={4.532}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_892_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[101.205, 56.942, 513.09]}
            rotation={[-Math.PI / 2, 0.105, Math.PI / 2]}
            scale={4.451}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_894_Material069_0.geometry}
            material={materials["Material.074_38"]}
            position={[101.205, 56.942, 530.455]}
            rotation={[-Math.PI / 2, 0.105, Math.PI / 2]}
            scale={4.451}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_896_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[101.205, 56.942, 548.203]}
            rotation={[-Math.PI / 2, 0.105, Math.PI / 2]}
            scale={4.451}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_898_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[101.205, 56.942, 565.178]}
            rotation={[-Math.PI / 2, 0.105, Math.PI / 2]}
            scale={4.451}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_900_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[101.367, 56.154, 466.894]}
            rotation={[-Math.PI / 2, 0.151, Math.PI / 2]}
            scale={4.532}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_902_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[101.367, 56.154, 449.367]}
            rotation={[-Math.PI / 2, 0.151, Math.PI / 2]}
            scale={4.532}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_904_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[101.367, 56.154, 431.949]}
            rotation={[-Math.PI / 2, 0.151, Math.PI / 2]}
            scale={4.532}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_906_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[101.473, 56.121, 402.973]}
            rotation={[-Math.PI / 2, 0.161, Math.PI / 2]}
            scale={4.501}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_908_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[101.352, 56.184, 386.481]}
            rotation={[-Math.PI / 2, 0.196, Math.PI / 2]}
            scale={4.189}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_910_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[101.352, 56.184, 368.472]}
            rotation={[-Math.PI / 2, 0.196, Math.PI / 2]}
            scale={4.189}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_912_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[101.352, 56.184, 351.349]}
            rotation={[-Math.PI / 2, 0.196, Math.PI / 2]}
            scale={4.189}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_914_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[122.484, 53.852, 491.651]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={3.822}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_916_Material068_0.geometry}
            material={materials["Material.074_37"]}
            position={[127.434, 53.03, 491.824]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_918_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[122.484, 53.821, 473.664]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={3.822}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_920_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[127.434, 52.999, 473.405]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_922_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[122.484, 53.851, 456.473]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={3.822}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_924_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[127.434, 53.03, 456.746]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_926_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[121.673, 54.096, 439.122]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={[3.822, 3.142, 3.822]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_928_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[120.313, 54.212, 419.687]}
            rotation={[-Math.PI / 2, 0.164, -Math.PI / 2]}
            scale={[3.822, 3.142, 3.822]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_930_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[127.434, 53.034, 439.361]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_932_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[127.434, 53.03, 421.591]}
            rotation={[-Math.PI / 2, 0.164, Math.PI / 2]}
            scale={4.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_934_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[186.135, 46.575, 219.396]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={4.006}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_936_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[173.52, 46.999, 585.524]}
            rotation={[-1.64, 0, -0.001]}
            scale={[6.197, 8.42, 6.209]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_938_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[175.034, 47.036, 400.009]}
            rotation={[-1.571, -0.079, 1.57]}
            scale={[6.672, 4.931, 2.742]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_940_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[175.034, 47.036, 434.853]}
            rotation={[-1.571, -0.079, 1.57]}
            scale={[4.24, 4.931, 2.742]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_942_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[176.052, 46.788, 584.43]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={[1.861, 6.968, 6.968]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_944_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[175.034, 47.036, 417.325]}
            rotation={[-1.571, -0.079, 1.57]}
            scale={[4.24, 4.931, 2.742]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_946_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[126.21, 53.665, 253.133]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.449}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_948_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[122.219, 53.893, 271.172]}
            rotation={[-Math.PI / 2, 0.214, Math.PI / 2]}
            scale={2.7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_950_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[192.324, 45.452, 259.967]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={4.419}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_952_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[197.023, 45.614, 260.99]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={3.792}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_954_Material072_0.geometry}
            material={materials["Material.012"]}
            position={[184.777, 33.32, 601.234]}
            rotation={[-Math.PI / 2, 0.09, -Math.PI]}
            scale={[5.012, 3.876, 5.012]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_956_Material072_0.geometry}
            material={materials["Material.012"]}
            position={[164.62, 35.132, 204.967]}
            rotation={[-Math.PI / 2, 0.089, 0]}
            scale={3.129}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_958_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[189.418, 46.757, 488.892]}
            rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
            scale={[4.951, 15.565, 11.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_960_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[140.393, 50.323, 267.745]}
            rotation={[-Math.PI / 2, 0.077, Math.PI / 2]}
            scale={4.079}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_962_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[145.186, 50.323, 270.034]}
            rotation={[-Math.PI / 2, 0.077, Math.PI / 2]}
            scale={2.491}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_964_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[145.186, 50.323, 234.871]}
            rotation={[-Math.PI / 2, 0.077, Math.PI / 2]}
            scale={2.491}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_966_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[157.086, 48.546, 408.618]}
            rotation={[-1.571, -0.079, 1.57]}
            scale={[6.672, 4.931, 2.742]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_968_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[158.955, 48.546, 391.27]}
            rotation={[-1.571, -0.043, 1.57]}
            scale={[6.672, 4.931, 2.742]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_970_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[140.393, 50.369, 250.493]}
            rotation={[-Math.PI / 2, 0.077, Math.PI / 2]}
            scale={4.079}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_972_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[158.805, 47.353, 358.081]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[3.749, 1.659, 5.449]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_974_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[158.529, 47.353, 360.205]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.449}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_976_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[138.806, 50.51, 591.899]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.568}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_978_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[140.393, 50.369, 233.01]}
            rotation={[-Math.PI / 2, 0.077, Math.PI / 2]}
            scale={4.079}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_980_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[143.95, 50.122, 251.216]}
            rotation={[-1.494, 0, 0]}
            scale={[2.491, 4.577, 2.508]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_982_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[100.211, 56.325, 328.505]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.522}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_984_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[100.211, 56.325, 310.762]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.522}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_986_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[100.211, 56.325, 293.444]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.522}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_988_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[158.196, 48.546, 268.318]}
            rotation={[-1.571, -0.043, 1.57]}
            scale={[5.119, 4.444, 2.472]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_990_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[162.312, 48.546, 268.012]}
            rotation={[-1.571, -0.043, 1.57]}
            scale={[3.213, 4.444, 2.472]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_992_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[158.196, 48.546, 250.902]}
            rotation={[-1.571, -0.043, 1.57]}
            scale={[5.119, 4.444, 2.472]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_994_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[158.196, 48.546, 233.224]}
            rotation={[-1.571, -0.043, 1.57]}
            scale={[5.119, 4.444, 2.472]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_996_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[162.312, 48.546, 232.693]}
            rotation={[-1.571, -0.043, 1.57]}
            scale={[3.213, 4.444, 2.472]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_998_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[191.769, 45.452, 235.883]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={3.252}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1000_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[139.974, 50.54, 592.705]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={2.459}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1002_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[141.683, 50.51, 585.651]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={5.568}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1004_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[140.515, 50.54, 584.845]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={2.459}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1006_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[192.324, 45.452, 402.259]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={2.698}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1008_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[192.324, 45.452, 377.975]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={2.698}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1010_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[192.115, 45.452, 422.374]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={2.698}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1012_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[176.052, 46.788, 581.642]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={[1.861, 6.968, 6.968]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1014_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[178.056, 46.788, 584.43]}
            rotation={[-1.502, 0, -Math.PI]}
            scale={[2.693, 9.468, 6.982]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1016_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[178.056, 46.788, 582.626]}
            rotation={[-1.502, 0, -Math.PI]}
            scale={[2.693, 9.468, 6.982]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1018_Material070_0.geometry}
            material={materials["Material.074_39"]}
            position={[177.223, 46.788, 583.339]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={[3.572, 6.968, 6.968]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1020_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[173.52, 47.036, 367.415]}
            rotation={[-1.564, 0, -0.001]}
            scale={[6.197, 11.143, 6.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1022_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[176.257, 47.093, 365.528]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={[2.188, 6.197, 6.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1024_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[176.257, 47.093, 362.251]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={[2.188, 6.197, 6.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1026_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[178.04, 47.093, 365.528]}
            rotation={[-1.502, 0, -Math.PI]}
            scale={[2.395, 11.125, 6.229]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1028_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[178.04, 47.093, 363.407]}
            rotation={[-1.502, 0, -Math.PI]}
            scale={[2.395, 11.125, 6.229]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1030_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[177.299, 47.093, 364.245]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={[4.2, 6.197, 6.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1032_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[122.224, 53.645, 358.725]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={5.449}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1034_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[122.224, 53.782, 328.505]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.522}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1036_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[122.224, 53.782, 311.134]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.522}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1038_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[122.224, 53.782, 292.768]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.522}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1040_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[152.112, 49.615, 217.775]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.449}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1042_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[123.41, 53.509, 217.775]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.449}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1044_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[140.393, 50.558, 328.601]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.522}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1046_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[140.393, 50.558, 310.089]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.522}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1048_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[140.393, 50.558, 293.029]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.522}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1050_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[126.59, 53.665, 235.644]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={5.449}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1052_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[138.832, 50.656, 360.842]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={2.99}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1054_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[138.832, 50.519, 377.705]}
            rotation={[-Math.PI / 2, 0.043, Math.PI / 2]}
            scale={2.99}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1056_Material073_0.geometry}
            material={materials["Material.073"]}
            position={[138.832, 50.625, 395.771]}
            rotation={[-Math.PI / 2, 0.043, Math.PI / 2]}
            scale={2.99}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1058_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[122.224, 53.899, 387.246]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={4.683}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1060_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[118.88, 54.414, 404.726]}
            rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
            scale={4.683}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1062_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[178.586, 47.223, 251.216]}
            rotation={[-1.494, -0.039, 0.003]}
            scale={[2.491, 4.577, 2.508]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1064_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[175.034, 47.036, 250.749]}
            rotation={[-1.571, -0.079, 1.57]}
            scale={[4.723, 4.038, 2.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1066_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[175.034, 47.036, 267.898]}
            rotation={[-1.571, -0.079, 1.57]}
            scale={[4.723, 4.038, 2.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1068_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[180.145, 47.436, 269.122]}
            rotation={[-1.571, -0.079, 1.57]}
            scale={[3.03, 2.591, 1.758]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1070_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[175.034, 47.036, 233.446]}
            rotation={[-1.571, -0.079, 1.57]}
            scale={[4.723, 4.038, 2.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1072_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[180.145, 47.583, 235.555]}
            rotation={[-1.571, -0.079, 1.57]}
            scale={[3.03, 2.591, 1.758]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1074_Material069_0.geometry}
            material={materials["Material.074_38"]}
            position={[192.115, 45.452, 545.462]}
            rotation={[-Math.PI / 2, -0.069, Math.PI / 2]}
            scale={2.698}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material_0.geometry}
            material={materials.Material}
            position={[-61.024, -0.556, 156.09]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-368.95, 731.636, 25.976]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_Material010_0.geometry}
            material={materials["Material.074"]}
            position={[-85.935, 199.7, -353.72]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[173.489, 89.971, 157.347]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012_Material011_0.geometry}
            material={materials["Material.074"]}
            position={[-85.935, 199.7, -353.72]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[173.489, 89.971, 157.347]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_Material015_0.geometry}
            material={materials["Material.074"]}
            position={[82.766, 33.228, -353.609]}
            rotation={[-Math.PI / 2, -0.237, Math.PI]}
            scale={[-5.986, 88.363, 12.138]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_Material014_0.geometry}
            material={materials["Material.074"]}
            position={[-253.445, 33.228, -353.609]}
            rotation={[-Math.PI / 2, 0.136, -Math.PI]}
            scale={[-5.979, 88.363, 12.152]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Material009_0.geometry}
            material={materials["Material.012"]}
            position={[74.209, 51.218, -262.894]}
            scale={[6.077, 6.275, 2.277]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_Material017_0.geometry}
            material={materials["Material.017"]}
            position={[79.294, 288.428, -355.562]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[50.674, 50.674, 10]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[89.589, 288.681, -355.423]}
            rotation={[0, Math.PI / 2, 0]}
            scale={108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans001_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[69.018, 288.681, -355.423]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_Material016_0.geometry}
            material={materials["Material.074_1"]}
            position={[-165.45, 224.123, -440.84]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-89.374, 0.699, 106.434]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_Material017_0.geometry}
            material={materials["Material.017"]}
            position={[79.294, 177.861, -355.562]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[50.674, 50.674, 10]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans002_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[89.589, 178.114, -355.423]}
            rotation={[0, Math.PI / 2, 0]}
            scale={108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans003_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[69.018, 178.114, -355.423]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_Material017_0.geometry}
            material={materials["Material.017"]}
            position={[-251.377, 292.349, -334.899]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[50.674, 50.674, 10]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans004_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[-241.083, 292.602, -334.76]}
            rotation={[0, Math.PI / 2, 0]}
            scale={108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans005_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[-261.653, 292.602, -334.76]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_Material017_0.geometry}
            material={materials["Material.017"]}
            position={[-171.544, 344.359, -355.43]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[51.513, 51.513, 10.165]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans006_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[-171.287, 333.894, -355.289]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={110.314}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans007_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[-171.287, 354.805, -355.289]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={110.314}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_Material020_0.geometry}
            material={materials["Material.074_2"]}
            position={[-96.107, 78.826, -363.398]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[160.681, 73.933, 34.312]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_Material018_0.geometry}
            material={materials["Material.074"]}
            position={[-108.064, 346.353, -354.981]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.187, 57.542, 10.785]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_Material017_0.geometry}
            material={materials["Material.017"]}
            position={[-44.548, 344.359, -355.43]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[51.513, 51.513, 10.165]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans008_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[-44.291, 333.894, -355.289]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={110.314}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_case_fans009_aorus_case_fans_0.geometry}
            material={materials["Material.074_0"]}
            position={[-44.291, 354.805, -355.289]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={110.314}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Material019_0.geometry}
            material={materials["Material.012"]}
            position={[-277.544, 457.86, -407.854]}
            rotation={[-1.514, 0, 0]}
            scale={4.86}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_Material019_0.geometry}
            material={materials["Material.012"]}
            position={[-277.544, 457.86, -439.732]}
            rotation={[-1.62, 0, 0]}
            scale={4.86}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.IOSHIELD_IOSHIELD_0.geometry}
            material={materials["Material.074_3"]}
            position={[-259.689, 284.799, -422.491]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[26.475, 30.855, 31.832]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_Material021_0.geometry}
            material={materials["Material.074"]}
            position={[93.781, 228.59, -355.282]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-11.991, 59.265, 117.81]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_Material022_0.geometry}
            material={materials["Material.074"]}
            position={[-265.096, 291.702, -335.09]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[6.378, 55.458, 55.458]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0.geometry
            }
            material={materials["Material.074_4"]}
            position={[-235.591, 287.747, -423.919]}
            rotation={[0, 0, 0.651]}
            scale={6.343}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_Material023_0.geometry}
            material={materials["Material.023"]}
            position={[-165.45, 224.123, -440.84]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-89.374, 0.699, 106.434]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_Material024_0.geometry}
            material={materials["Material.024"]}
            position={[-165.45, 224.123, -440.84]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-89.374, 0.699, 106.434]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["metal-mesh-500x500_metal-mesh-500x500_0"].geometry}
            material={materials["Material.074_5"]}
            position={[-42.312, 356.984, -354.164]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[100, 133.705, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["metal-mesh-500x500001_metal-mesh-500x500_0"].geometry
            }
            material={materials["Material.074_5"]}
            position={[-174.205, 356.984, -354.164]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[100, 133.705, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["metal-mesh-500x500002_metal-mesh-500x500_0"].geometry
            }
            material={materials["Material.074_5"]}
            position={[-270.9, 291.514, -335.328]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[79.555, 106.369, 79.555]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_Material008_0.geometry}
            material={materials["Material.074_6"]}
            position={[-96.406, 270.963, -430.927]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-1.513, 10.916, 44.29]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_Material026_0.geometry}
            material={materials["Material.074_7"]}
            position={[-95.71, 270.963, -432.409]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-1.051, 9.735, 44.411]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_Material025_0.geometry}
            material={materials["Material.012"]}
            position={[-96.387, 270.963, -432.409]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-0.25, 9.339, 46.663]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_Material026_0.geometry}
            material={materials["Material.074_7"]}
            position={[-96.996, 270.963, -451.701]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-1.051, 9.735, 44.411]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031_Material008_0.geometry}
            material={materials["Material.074_6"]}
            position={[-103.687, 270.963, -430.927]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-1.513, 10.916, 44.29]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_Material026_0.geometry}
            material={materials["Material.074_7"]}
            position={[-102.99, 270.963, -432.409]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-1.051, 9.735, 44.411]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_Material025_0.geometry}
            material={materials["Material.012"]}
            position={[-103.667, 270.963, -432.409]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-0.25, 9.339, 46.663]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034_Material026_0.geometry}
            material={materials["Material.074_7"]}
            position={[-104.276, 270.963, -451.701]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-1.051, 9.735, 44.411]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube035_Material008_0.geometry}
            material={materials["Material.074_6"]}
            position={[-110.551, 270.963, -430.927]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-1.513, 10.916, 44.29]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_Material026_0.geometry}
            material={materials["Material.074_7"]}
            position={[-109.854, 270.963, -432.409]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-1.051, 9.735, 44.411]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_Material025_0.geometry}
            material={materials["Material.012"]}
            position={[-110.532, 270.963, -432.409]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-0.25, 9.339, 46.663]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_Material026_0.geometry}
            material={materials["Material.074_7"]}
            position={[-111.14, 270.963, -451.701]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-1.051, 9.735, 44.411]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_Material008_0.geometry}
            material={materials["Material.074_6"]}
            position={[-117.502, 270.963, -430.927]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-1.513, 10.916, 44.29]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_Material026_0.geometry}
            material={materials["Material.074_7"]}
            position={[-116.805, 270.963, -432.409]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-1.051, 9.735, 44.411]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_Material025_0.geometry}
            material={materials["Material.012"]}
            position={[-117.483, 270.963, -432.409]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-0.25, 9.339, 46.663]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042_Material026_0.geometry}
            material={materials["Material.074_7"]}
            position={[-118.091, 270.963, -451.701]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-1.051, 9.735, 44.411]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["metal-mesh-500x500003_metal-mesh-500x500_0"].geometry
            }
            material={materials["Material.074_5"]}
            position={[-257.977, 182.039, -359.049]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[109.082, 106.369, 79.555]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube043_Material012_0.geometry}
            material={materials["Material.012"]}
            position={[-219.486, 85.339, -71.149]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[49.177, 29.278, 59.658]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube045_Material027_0.geometry}
            material={materials["Material.074_8"]}
            position={[-212.14, 79.399, -298.228]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[35.476, 5.166, 20.568]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0"].geometry
            }
            material={materials["Material.074_9"]}
            position={[-93.477, 83.167, -288.796]}
            scale={36.942}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["maxresdefault_(1)_maxresdefault_(1)_0"].geometry}
            material={materials["Material.074_10"]}
            position={[87.714, 83.615, -355.312]}
            rotation={[0, Math.PI / 2, 0]}
            scale={39.411}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Material028_0.geometry}
            material={materials["Material.074_11"]}
            position={[-169.225, 114.406, -71.644]}
            rotation={[-1.571, 1.554, 0]}
            scale={[19.4, 19.4, 2.506]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_Material029_0.geometry}
            material={materials["Material.074_11"]}
            position={[-166.369, 70.647, -71.644]}
            rotation={[-Math.PI / 2, 1.536, 0]}
            scale={[10.298, 10.298, 1.33]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube044_Material012_0.geometry}
            material={materials["Material.012"]}
            position={[-219.486, 85.339, 671.433]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[49.177, 29.278, 59.658]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_Material031_0.geometry}
            material={materials["Material.074_11"]}
            position={[-169.225, 114.406, 670.937]}
            rotation={[-1.571, 1.554, 0]}
            scale={[19.4, 19.4, 2.506]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_Material030_0.geometry}
            material={materials["Material.074_11"]}
            position={[-166.369, 70.647, 670.937]}
            rotation={[-Math.PI / 2, 1.536, 0]}
            scale={[10.298, 10.298, 1.33]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NVIDIA_LOGO_NVIDIA_LOGO_0.geometry}
            material={materials["Material.074_12"]}
            position={[0.586, 70.428, -289.066]}
            scale={45.189}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.psuback_psuback_0.geometry}
            material={materials["Material.074_13"]}
            position={[-260.266, 77.97, -352.752]}
            rotation={[0, Math.PI / 2, 0]}
            scale={59.489}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.usb_usb_0.geometry}
            material={materials["Material.074_14"]}
            position={[70.473, 357.15, -289.695]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={7.342}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.usb001_usb_0.geometry}
            material={materials["Material.074_14"]}
            position={[70.473, 357.15, -321.003]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={7.342}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.usb002_usb_0.geometry}
            material={materials["Material.074_14"]}
            position={[70.473, 357.15, -352.59]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={7.342}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_Material013_0.geometry}
            material={materials["Material.013"]}
            position={[69.926, 356.741, -407.005]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.297}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus001_Material032_0.geometry}
            material={materials["Material.032"]}
            position={[69.926, 356.741, -423.729]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.297}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.usb003_usb_0.geometry}
            material={materials["Material.074_14"]}
            position={[70.473, 357.15, -384.891]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={7.342}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube046_Material034_0.geometry}
            material={materials["Material.034"]}
            position={[-188.16, 268.516, -368.194]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[9.278, 42.446, 42.446]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube047_Material033_0.geometry}
            material={materials["Material.034"]}
            position={[-134.664, 268.516, -368.194]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[9.278, 42.446, 42.446]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube048_Material035_0.geometry}
            material={materials["Material.074_15"]}
            position={[-161.354, 268.242, -368.171]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[17.436, 39.405, 40.075]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_Material040_0.geometry}
            material={materials["Material.074_16"]}
            position={[-161.354, 268.242, -368.171]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[17.436, 39.405, 40.075]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_Material038_0.geometry}
            material={materials["Material.074_16"]}
            position={[-161.354, 268.242, -368.171]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[17.436, 39.405, 40.075]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube051_Material042_0.geometry}
            material={materials["Material.042"]}
            position={[-161.354, 268.242, -368.171]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[17.436, 39.405, 40.075]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_Material041_0.geometry}
            material={materials["Material.074_17"]}
            position={[-161.139, 268.658, -369.024]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[32.71, 32.71, 34.213]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_Material045_0.geometry}
            material={materials["Material.045"]}
            position={[-173.934, 242.501, -421.74]}
            rotation={[0.474, 0, Math.PI]}
            scale={[2.055, 2.055, 16.973]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["metal-mesh-500x500004_metal-mesh-500x500_0"].geometry
            }
            material={materials["Material.074_5"]}
            position={[-257.977, 220.723, -359.049]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[109.082, 106.369, 79.555]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text_Material046_0.geometry}
            material={materials["Material.046"]}
            position={[-143.804, 250.193, -325.724]}
            rotation={[0, 0, Math.PI / 2]}
            scale={2.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube052_Material047_0.geometry}
            material={materials["Material.012"]}
            position={[83.515, 83.276, -355.599]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[5.75, 46.281, 28.867]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes[
                "test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2_0"
              ].geometry
            }
            material={materials["Material.074_18"]}
            position={[-115.854, 150.748, -435.223]}
            scale={35.194}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053_Material048_0.geometry}
            material={materials["Material.048"]}
            position={[-165.45, 224.123, -440.84]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-89.374, 0.699, 106.434]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube054_Material049_0.geometry}
            material={materials["Material.049"]}
            position={[-165.45, 224.123, -440.84]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-89.374, 0.699, 106.434]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube055_Material054_0.geometry}
            material={materials["Material.054"]}
            position={[-122.286, 185.076, -370.559]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[133.163, 54.534, 13.174]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube056_Material061_0.geometry}
            material={materials["Material.061"]}
            position={[-127.222, 200.081, -370.559]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[128.059, 52.443, 12.669]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_Material050_0.geometry}
            material={materials["Material.074_19"]}
            position={[-209.451, 184.616, -370.096]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[36.354, 38.222, 10.575]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_Material051_0.geometry}
            material={materials["Material.074_20"]}
            position={[-124.439, 184.616, -370.096]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[36.354, 38.222, 10.575]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_Material052_0.geometry}
            material={materials["Material.074_19"]}
            position={[-37.777, 184.616, -370.096]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[36.354, 38.222, 10.575]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material053_0.geometry}
            material={materials["Material.074_21"]}
            position={[117.182, 25.605, -29.165]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[124.427, 154.111, 119.911]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geforcertx_Material056_0.geometry}
            material={materials["Material.056"]}
            position={[-229.271, 204.826, -315.957]}
            scale={[10.377, 10.377, 10.91]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube057_Material059_0.geometry}
            material={materials["Material.074_22"]}
            position={[-127.222, 200.081, -370.559]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[128.059, 52.443, 12.669]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube059_Material058_0.geometry}
            material={materials["Material.058"]}
            position={[-127.222, 200.081, -370.559]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[128.059, 52.443, 12.669]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube060_Material062_0.geometry}
            material={materials["Material.062"]}
            position={[-123.744, 264.277, -316.795]}
            scale={[133.257, 53.22, 0.824]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube058_Material063_0.geometry}
            material={materials["Material.074_23"]}
            position={[-122.591, 213.709, -370.429]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[133.259, 54.504, 0.809]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aorus_logotranspa_aorus_logotranspa_0.geometry}
            material={materials["Material.074_24"]}
            position={[-182.428, 181.699, -315.847]}
            scale={[8.646, 8.646, 9.09]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube061_Material064_0.geometry}
            material={materials["Material.012"]}
            position={[-122.286, 185.076, -370.559]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[133.163, 54.534, 13.174]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube062_Material065_0.geometry}
            material={materials["Material.012"]}
            position={[-165.45, 224.123, -440.84]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-89.374, 0.699, 106.434]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube064_Material074_0.geometry}
            material={materials["Material.074_25"]}
            position={[111.413, 32.447, -27.406]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={[-42.887, 42.887, 22.902]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube067_Material075_0.geometry}
            material={materials["Material.075"]}
            position={[111.413, 32.447, -27.406]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={[-42.887, 42.887, 22.902]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube063_Material074_0.geometry}
            material={materials["Material.074_25"]}
            position={[111.413, 32.495, -27.406]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={[-42.887, 42.887, 22.902]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube065_Material074_0.geometry}
            material={materials["Material.074_25"]}
            position={[111.413, 32.495, -27.406]}
            rotation={[Math.PI / 2, -0.011, Math.PI]}
            scale={[-42.887, 42.887, 22.902]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube066_Material076_0.geometry}
            material={materials["Material.076"]}
            position={[111.461, 32.287, -27.292]}
            rotation={[Math.PI / 2, -0.011, Math.PI]}
            scale={[-42.887, 42.887, 22.902]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube072_Material078_0.geometry}
            material={materials["Material.012"]}
            position={[111.413, 32.447, -27.406]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={[-42.887, 42.887, 22.902]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube073_Material079_0.geometry}
            material={materials["Material.074_6"]}
            position={[111.413, 32.447, -27.406]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={[-42.887, 42.887, 22.902]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube076_Material080_0.geometry}
            material={materials["Material.074_25"]}
            position={[65.926, 34.461, -27.346]}
            rotation={[Math.PI / 2, -0.234, -Math.PI]}
            scale={[-42.887, 42.887, 22.902]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_Material081_0.geometry}
            material={materials["Material.012"]}
            position={[77.222, 34.525, -28.482]}
            rotation={[0, -0.001, 0]}
            scale={[11.574, 11.574, 2.501]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_Material077_0.geometry}
            material={materials["Material.077"]}
            position={[77.222, 34.525, -27.858]}
            rotation={[0, -0.001, 0]}
            scale={[11.891, 11.891, 0.393]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_Material082_0.geometry}
            material={materials["Material.082"]}
            position={[77.223, 34.525, -28.709]}
            rotation={[0, -0.001, 0]}
            scale={[10.438, 10.438, 2.868]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve001_Material085_0.geometry}
            material={materials["Material.085"]}
            position={[-57.663, 118.32, -315.595]}
            rotation={[1.571, -1.234, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube074_Material084_0.geometry}
            material={materials["Material.012"]}
            position={[-92.944, 206.719, -314.862]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[5.642, 5.4, 4.234]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube075_Material086_0.geometry}
            material={materials["Material.074_26"]}
            position={[-258.007, 195.512, -371.511]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.163, 52.435, 17.743]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve002_Material087_0.geometry}
            material={materials["Material.087"]}
            position={[-31.438, 183.785, -440.156]}
            rotation={[1.571, -1.234, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube077_Material083_0.geometry}
            material={materials["Material.012"]}
            position={[-81.678, 266.506, -437.411]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.849, 4.872, 17.377]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube078_Material083_0.geometry}
            material={materials["Material.012"]}
            position={[70.352, 334.375, -437.411]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.849, 4.872, 12.046]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve_Material088_0.geometry}
            material={materials["Material.088"]}
            position={[73.034, 238.196, -437.388]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube079_Material089_0.geometry}
            material={materials["Material.012"]}
            position={[-269.84, 182.61, -338.408]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[16.038, 9.162, 4.326]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube080_Material089_0.geometry}
            material={materials["Material.012"]}
            position={[-158.493, 199.975, 375.163]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[16.038, 9.162, 4.326]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve003_Material091_0.geometry}
            material={materials["Material.012"]}
            position={[-158.898, 127.661, 299.394]}
            rotation={[2.464, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube081_Material090_0.geometry}
            material={materials["Material.090"]}
            position={[93.215, 47.658, -27.747]}
            rotation={[-1.544, -0.233, 0]}
            scale={[2.623, 1.334, 2.237]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube068_Material092_0.geometry}
            material={materials["Material.092"]}
            position={[129.119, 44.5, -27.607]}
            rotation={[-Math.PI / 2, 0.284, 0]}
            scale={[5.964, 5.964, 2.081]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["Color-PewDiePie-Logo_Color-PewDiePie-Logo_0"].geometry
            }
            material={materials["Material.074_27"]}
            position={[129.541, 46.552, -27.476]}
            rotation={[-Math.PI / 2, 0.284, Math.PI / 2]}
            scale={12.411}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube069_Material093_0.geometry}
            material={materials["Material.012"]}
            position={[111.413, 32.447, -27.406]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={[-42.887, 44.821, 22.902]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_Material094_0.geometry}
            material={materials["Material.094"]}
            position={[83.027, 308.225, -282.193]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[9.856, 9.856, 4.879]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_Material095_0.geometry}
            material={materials["Material.088"]}
            position={[84.52, 280.424, -282.193]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[6.544, 6.544, 3.239]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_Material096_0.geometry}
            material={materials["Material.088"]}
            position={[84.52, 254.307, -282.193]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[6.67, 6.67, 3.302]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text001_Material097_0.geometry}
            material={materials["Material.012"]}
            position={[87.586, 202.482, -275.486]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[10.325, 8.384, 9.718]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube088_Material098_0.geometry}
            material={materials["Material.098"]}
            position={[98.958, 38.352, -8.162]}
            rotation={[-Math.PI / 2, -0.129, 0]}
            scale={[5.453, 4.946, 1.909]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve004_Material099_0.geometry}
            material={materials["Material.012"]}
            position={[-33.393, 29.826, -26.834]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube070_Material100_0.geometry}
            material={materials["Material.012"]}
            position={[-266.849, 260.335, -432.751]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.668, 2.324, 5.236]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube071_Material101_0.geometry}
            material={materials["Material.012"]}
            position={[-266.849, 260.335, -426.843]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.668, 2.324, 5.236]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube082_Material101_0.geometry}
            material={materials["Material.012"]}
            position={[-266.849, 274.042, -426.641]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.668, 2.324, 5.236]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016_Material102_0.geometry}
            material={materials["Material.012"]}
            position={[-263.633, 248.737, -421.76]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[3.07, 3.07, 5.454]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCircle_Material104_0.geometry}
            material={materials["Material.104"]}
            position={[87.654, 308.188, -282.266]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={5.703}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve005_Material103_0.geometry}
            material={materials["Material.012"]}
            position={[83.413, 25.966, 360.696]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve006_Material106_0.geometry}
            material={materials["Material.012"]}
            position={[-275.73, 25.966, 569.745]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve007_Material105_0.geometry}
            material={materials["Material.012"]}
            position={[-271.339, 25.966, 569.745]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve008_Material107_0.geometry}
            material={materials["Material.012"]}
            position={[-280.431, 25.966, 28.498]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material055_0.geometry}
            material={materials["Material.055"]}
            position={[-138.594, 295.654, 300.405]}
            rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
            scale={[325.342, 4.051, 184.091]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Material044_0.geometry}
            material={materials["Material.044"]}
            position={[-146.706, 263.678, 300.405]}
            rotation={[-Math.PI / 2, -0.122, Math.PI / 2]}
            scale={[-325.341, 14.747, 152.853]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.gallerymodel_gallerymodel_0.geometry}
            material={materials["Material.074_28"]}
            position={[-142.04, 164.813, 596.081]}
            rotation={[0.441, -1.284, 0.441]}
            scale={80.689}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Material001_0.geometry}
            material={materials["Material.012"]}
            position={[-157.131, 447.652, 300.405]}
            rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
            scale={[325.342, 4.051, 31.034]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bg2_bg2_0.geometry}
            material={materials["Material.074_29"]}
            position={[-153.705, 194.917, 83.027]}
            rotation={[1.572, -1.442, 1.567]}
            scale={113.034}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MY_SCREEN_MY_SCREEN_0.geometry}
            mesh
            position={[-136.177, 300.132, 300.405]}
            rotation={[-Math.PI / 2, 1.501, Math.PI / 2]}
            scale={[331.621, 348.065, 331.621]}
          >
            <meshStandardMaterial map={txt} />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-148.741, 180.97, 299.246]}
            rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
            scale={[167.599, 17.793, 193.498]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[-186.532, 291.564, 297.425]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[16.32, 28.812, 12.936]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_Material043_0.geometry}
            material={materials["Material.043"]}
            position={[-202.956, -64.822, 300.405]}
            rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
            scale={[40.588, 16.64, 531.608]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_Material037_0.geometry}
            material={materials["Material.037"]}
            position={[-213.018, 35.333, 296.055]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[-193.85, 54.116, 9.321]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_Material036_0.geometry}
            material={materials["Material.039"]}
            position={[-80.199, 31.648, 453.149]}
            rotation={[-Math.PI / 2, 0, 1.249]}
            scale={[49.07, 108.779, 5.648]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_Material039_0.geometry}
            material={materials["Material.039"]}
            position={[-80.199, 31.648, 163.795]}
            rotation={[-Math.PI / 2, 0, 1.861]}
            scale={[49.07, 108.779, 5.648]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_Material006_0.geometry}
            material={materials["Material.006"]}
            position={[-181.146, 31.637, 295.796]}
            rotation={[-Math.PI / 2, 0, 3.136]}
            scale={[43.412, 96.236, 4.997]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8_Tastatur_Seite_0.geometry}
            material={materials.Tastatur_Seite}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10_Tastatur_Unterseite_0.geometry}
            material={materials.Tastatur_Unterseite}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12_Tastatur_Unterseite_0.geometry}
            material={materials.Tastatur_Unterseite}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24_Tastatur_Seite_0.geometry}
            material={materials.Tastatur_Seite}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30_Material007_0.geometry}
            material={materials["Material.007"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36_Tastatur_Seite_0.geometry}
            material={materials.Tastatur_Seite}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38_Tastatur_Seite_0.geometry}
            material={materials.Tastatur_Seite}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40_Tastatur_Seite_0.geometry}
            material={materials.Tastatur_Seite}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42_Tastatur_Seite_0.geometry}
            material={materials.Tastatur_Seite}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44_Tastatur_Seite_0.geometry}
            material={materials.Tastatur_Seite}
            position={[147.709, 33.245, 403.086]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47_Material005_0.geometry}
            material={materials["Material.074_32"]}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_55_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_57_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_59_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_63_Material060_0.geometry}
            material={materials["Material.074_34"]}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_65_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_67_Material067_0.geometry}
            material={materials["Material.074_36"]}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_69_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_71_Tasten_2_0.geometry}
            material={materials.Tasten_2}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_73_Material057_0.geometry}
            material={materials["Material.074_33"]}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_75_Material066_0.geometry}
            material={materials["Material.074_35"]}
            position={[147.709, 32.601, 403.086]}
            rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
            scale={91.415}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/programmer.glb");

export default HackerRoom;
