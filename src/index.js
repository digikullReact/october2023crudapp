import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Feedbackform from './components/Feedbackform';
import ShowData from './components/ShowData';
import FeedBackEditComponent from './components/FeedBackEditComponent';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "feedback",
        element: <Feedbackform/>
      },

      {
        path: "showdata",
        element: <ShowData/>
      },

      {
        path: "feedbackedit",
        element: <FeedBackEditComponent/>
      },

    ]
  },


 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
