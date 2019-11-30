import React, { Suspense } from "react";

const Button = React.lazy(() =>
  import(/* webpackChunkName: "Button" */ "./Button")
);

const App = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Suspense fallback="Loading…">
      <Button />
    </Suspense>
  </div>
);

export default App;
