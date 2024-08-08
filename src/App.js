import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';
import PostPageDetails from './views/OldViews/PostPageDetails';
import PostPageUpdate from './views/OldViews/PostPageUpdate';
import LandingPage from './views/LandingPage';
import ProfilePage from './views/ProfilePage';

function App() {

  console.log("App.js")
  
  const router = createBrowserRouter([
    { path: "/", element:<LandingPage /> },
    { path: "/login", element:<LoginPage /> },
    { path: "/signup", element:<SignUpPage /> },
    { path: "/profile", element: <ProfilePage/> },    
    { path: "/post/:id", element: <PostPageDetails/> },
    { path: "/update/:id", element: <PostPageUpdate/> },
  ])
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
