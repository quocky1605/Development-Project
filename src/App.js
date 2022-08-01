import { ThemeProvider } from "@mui/material/styles";
// layout
import DefaultLayout from "./Layouts/DefaultLayout";
import theme from "./Layouts/Theme";

// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PAGE_CONFIG } from "./routes/config";
import PageNotFound from "./pages/404";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            {PAGE_CONFIG.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            })}
            <Route
              path="*"
              element={
                <DefaultLayout>
                  <PageNotFound />
                </DefaultLayout>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
