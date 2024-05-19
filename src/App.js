import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminRoutes from "./routes/AdminRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { Toaster } from "react-hot-toast";

if(localStorage.getItem('products') === null) {
  localStorage.setItem('products', JSON.stringify([]))
}


function App() {
  const isLogged = false;
  return (
    <div>
      <BrowserRouter>
        {isLogged ? <AdminRoutes /> : <PublicRoutes />}
      </BrowserRouter>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
}

export default App;
