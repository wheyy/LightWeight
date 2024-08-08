import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';
import LandingPage from './views/LandingPage';
import ProfilePage from './views/ProfilePage';
import WorkoutPageHome from './views/WorkoutPageHome';

function App() {

  console.log("App.js")
  
  const router = createBrowserRouter([
    { path: "/", element:<LandingPage /> },
    { path: "/login", element:<LoginPage /> },
    { path: "/signup", element:<SignUpPage /> },
    { path: "/profile", element: <ProfilePage/> },    
    { path: "/home", element: <WorkoutPageHome/> },
  ])
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
