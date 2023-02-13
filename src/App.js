import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./Routers/routers";

function App() {
  return (
    <div >
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
