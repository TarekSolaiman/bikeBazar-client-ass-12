import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./Routers/routers";

function App() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
