import React from "react";
import Navl from "./NavL/Navl";

import Welcome from "./Welcome/Welcome";
import Vision from "./Vision/Vision";
import Opiniones from "./Opiniones/Opiniones";

function Landing() {
  return (
    <div>
      {<Navl />}
      {<Welcome />}

      {/*     <Vision />
      <Opiniones /> */}
    </div>
  );
}

export default Landing;
