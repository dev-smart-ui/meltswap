import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import {   ROUTES} from "./constanst/routes";
import {Layout} from "./components/layout/layout";

const App = ()=>{
  const reactRouterConfig =Object.entries(ROUTES).map(r=>( {
       path:r[1].path,
      element:r[1].element
  }));

  const router =createBrowserRouter( [{
      element: <Layout/>,
      children:reactRouterConfig
  }])
  return  <RouterProvider router={router}/>

}

export default App
