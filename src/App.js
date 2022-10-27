import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import "antd/dist/antd.css";
import Header from "./components/Header";
import ProductDetail from "./pages/productDetail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {publicRoutes.map((item) => {
            const Page = item.component;
            return <Route key={item.id} path={item.path} element={<Page />} />;
          })}
          <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
        <div>
          <Outlet />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
