import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./components/Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";
import Demo from "./components/Utils/Demo";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;
