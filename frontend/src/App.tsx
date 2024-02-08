import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DefaultLayout } from "./components/DefaultLayout";
import { AuthProvider } from "./components/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
