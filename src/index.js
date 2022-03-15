import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppBook from './appModule4/AppBook';
import { AppSandBox } from './appModule4/AppSandbox';
import AppTask1 from './appModule4/AppTask1';
import AppTask2 from './appModule4/AppTask2';
import AppTask3 from './appModule4/AppTask3';
import AppTask4 from './appModule4/AppTask4';
import AppTask5 from './appModule4/AppTask5';
import AppTask6 from './appModule4/AppTask6';
import AppTask7 from './appModule4/AppTask7';

// const application3 = (
//   <BrowserRouter>
//     <AppTask3/>
//   </BrowserRouter>
// )

// const application6 = (
//   <BrowserRouter>
//     <AppTask6/>
//   </BrowserRouter>
// )

ReactDOM.render(
  <React.StrictMode>
    {/* <AppTask1/> */}
    {/* <AppTask2/> */}
    {/* { application3 } */}
    {/* <AppTask4/> */}
    {/* <AppTask5/> */}
    {/* {application6} */}
    {/* <AppTask7/> */}
    {/* <BrowserRouter>
      <AppBook/>
    </BrowserRouter> */}
    <AppSandBox/>
  </React.StrictMode>,
  document.getElementById('root')
);

