import Navbar from "./components/Navbar";
import Fbc from "./alltopics/01_typesofcomponent/Fbc";
import Cbc from "./alltopics/01_typesofcomponent/Cbc";
import StatesInFbc from "./alltopics/02_states/StatesInFbc";
import CounterInFbc from "./alltopics/02_states/CounterInFbc";
import StatesInCbc from "./alltopics/02_states/StatesInCbc";
import Parent1 from "./alltopics/03_props/Parent1";
import Parent2 from "./alltopics/03_props/Parent2";
import Parent3 from "./alltopics/03_props/Parent3";
import Parent4 from "./alltopics/03_props/Parent4";
import Parent5 from "./alltopics/03_props/Parent5";
import DrillParent1 from "./alltopics/04_propsDrilling/DrillParent1";
import { useEffect, useState } from "react";
import ParentA from "./alltopics/05_rerendering_of_components/ParentA";
import MyContext from "./alltopics/06_context/MyContext";
import ParentComponent from "./alltopics/07_context2/ParentComponent";
import Context2 from "./alltopics/07_context2/Context2";
import Cart from "./alltopics/07_context2/Cart";
import InlineCSS from "./alltopics/08_reactCSS/InlineCSS";
import Card from "./alltopics/08_reactCSS/Card";
import ControlledForms1 from "./alltopics/09_controlledforms/ControlledForms1";
import TodoWrapper from "./task1/TodoWrapper";
import UncontrolledForms from "./alltopics/10_uncontrolledForms/UncontrolledForms";
import LifeCycleInCBC from "./alltopics/11_LifeCycle/LifeCycleInCBC";
import LifeCycleInFBC from "./alltopics/11_LifeCycle/LifeCycleInFBC";
import FetchApi from "./alltopics/12_fetch/FetchApi";
import FetchApi2 from "./alltopics/12_fetch/FetchApi2";
import Reducer from "./alltopics/13_useReducer/Reducer";
import MyComponent from "./alltopics/14_memo_and_callback/MyComponent";
import Routing1 from "./alltopics/15_browserRouter/Routing1";
// import {ReducerComp} from "./alltopics/17_useReducer/Index"

 const App = () => {
   const [toggle, setToggle] = useState(false);

   function toggleHandle() {
     setToggle(!toggle);
   }

   return (
     <div>
       {/* <Navbar /> */}
          {/* <Fbc />  */}
       {/* <Cbc/> */}
       {/* <StatesInFbc/> */}
       {/* <CounterInFbc/> */}
       {/* <StatesInCbc/> */}
       {/* <Parent1/> */}
       {/* <Parent2/> */}
       {/* <Parent3/> */}
       {/* <Parent4/> */}
       {/* <Parent5 /> */}
       {/* <DrillParent1/> */}
       {/* <ParentA/> */}

       {/* <MyContext/> */}

       {/* <Context2>
         <ParentComponent />
         <Cart />
       </Context2> */}

       {/* <InlineCSS/> */}
       {/* <Card/> */}

       {/* <ControlledForms1/> */}

       <TodoWrapper />

       {/* <UncontrolledForms /> */}

       {/* <button onClick={toggleHandle} className="bg-amber-300">
         toggle component
       </button>

       {toggle ? <LifeCycleInCBC /> : <h1>No component</h1>} */}

      {/* <button onClick={toggleHandle}>click</button>
       {toggle ? <LifeCycleInFBC /> : <h1>No Component</h1>} */}

       {/* <FetchApi/> */}

       {/* <button onClick={toggleHandle} className="bg-red-500 mb-3">toggle</button>
       {toggle ? <FetchApi2/> : <h1>No component</h1>} */}

       {/* <Reducer/> */}

       {/* <MyComponent/> */}

       {/* <Routing1/> */}
       {/* <Routing1/> */}
       {/* <ReducerComp/> */}
     </div>
   );
   };
 export default App;


//! CODE SPLITTING EXAMPLE
// import Routing2 from "./alltopics/16_createBrowserRouter/Routing2"
// const App = () => {
//   return (
//     <div>
//       <Routing2/>
//     </div>
//   )
// }

// export default App
