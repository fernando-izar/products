import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DefaultLayout } from "./components/DefaultLayout";
import { AuthProvider } from "./components/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
