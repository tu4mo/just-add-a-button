import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";

const Button = React.lazy(() =>
  import(/* webpackChunkName: "Button" */ "./Button")
);

const App = () => (
  <RecoilRoot>
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Suspense fallback="Loading…">
        <Button />
      </Suspense>
    </div>
  </RecoilRoot>
);

export default App;
