// import route modules
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import files from asset to render tree view
import { files } from './assets/js/files';

// import store to use reducers
import { store } from './store';

// import bootstrap modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import redux-provider
import { Provider } from 'react-redux'

// import pages and components here
import ConsumptionOverview from './pages/ConsumptionOverview';
import GeoraphicInsight from './pages/GeographicInsight';
import ImpactAnalysis from './pages/ImpactAnalysis';
import TrendAnalysis from './pages/TrendAnalysis';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';


function App() {

  // create new routes using create browser router
  const router = createBrowserRouter([
    {
      path: '/', element: <SideMenu files={files} />, children: [
        {
          path: "/", element: <Navbar />, children: [
            { index: true, element: <ConsumptionOverview /> },
            { path:"/geographic_insight", element: <GeoraphicInsight /> },
            { path:"/impact_analysis", element: <ImpactAnalysis /> },
            { path:"/trend_analysis", element: <TrendAnalysis /> },
          ]
        },
      ]
    }
  ])


  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;
