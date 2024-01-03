import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './constants/PageLayout/Layout'
import HomePage from './pages/HomePage'
import SinglePostsPage from './pages/SinglePostsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='SinglePostsPage' element={<SinglePostsPage />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Route>
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
