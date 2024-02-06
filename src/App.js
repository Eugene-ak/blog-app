import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './constants/PageLayout/Layout'
import HomePage from './pages/HomePage'
import SinglePostsPage from './pages/SinglePostsPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import Dashboard from './cms/Dashboard';
import Overview from './cms/Overview';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='SinglePostsPage' element={<SinglePostsPage />} />
        <Route path='ContactPage' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
      <Route path='/admin' element={<Dashboard />}>
        <Route index element={<Overview />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
