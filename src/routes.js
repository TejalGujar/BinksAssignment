import UsersList from "./components/UsersList";
import DetailsPage from "./components/DetailsPage";
import LoginPage from "./components/LoginPage";

const routes = () => [
  {
    path: '/userlist',
    element: <UsersList />,
    children: []
  },
  {
    path: '/details',
    element: <DetailsPage/>,
    children: []
  },
  {
    path: '/',
    element: <LoginPage/>,
    children: []
  },
];

export default routes;
