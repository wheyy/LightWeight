import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';
import PostPageAdd from './views/PostPageAdd';
import PostPageDetails from './views/PostPageDetails';
import PostPageUpdate from './views/PostPageUpdate';
import LandingPage from './views/LandingPage';

function App() {

  const router = createBrowserRouter([
    { path: "/", element:<LandingPage /> },
    { path: "/login", element:<LoginPage /> },
    { path: "/signup", element:<SignUpPage /> },
    { path: "/add", element: <PostPageAdd/> },    
    { path: "/post/:id", element: <PostPageDetails/> },
    { path: "/update/:id", element: <PostPageUpdate/> },
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
