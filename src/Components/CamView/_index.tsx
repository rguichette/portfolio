//working code DO NOT DELETE

/* useEffect(() => {
    if (orbitControlsRef.current) {
      controls = orbitControlsRef.current;
      controls.enableZoom = false;
      // controls.enableRotate = false;
    }
    camera && camera.position.set(0, 1, -2);
    console.log("SCENE: ", scene);
    if (scene) {
      let character = scene.getObjectByName("charRigidBody");
      console.log("CHARACTER", character);
      if (character) {
        character.add(camera);
      }
    }
  }, [camera, scene, scene.children]);

  let charPos = new Vector3();
  const charQuaternion = new Quaternion();

  useFrame(({}) => {
    let character = scene.getObjectByName("charRigidBody");

    character?.getWorldPosition(charPos);

    if (character) {
      character.getWorldQuaternion(charQuaternion);
      character.updateWorldMatrix(true, true);
      //   console.log("CAM POS: ", camera.position)
      character.updateMatrixWorld();
    }

    camera.updateProjectionMatrix();
    camera.updateWorldMatrix(true, true);

    if (controls) {
      //   controls.target.copy(charPos);

      controls.object.updateMatrixWorld();
      controls.target = charPos.add(new Vector3(0, 1, 0));

      controls.update();
    }
  });
  */
