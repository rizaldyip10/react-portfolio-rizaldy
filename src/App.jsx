import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/about";

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/about", element: <About />}
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
