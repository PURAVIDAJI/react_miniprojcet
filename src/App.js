import React, { useReducer, useRef} from 'react';
import './App.css';
import Routing from './Routing';
import { AuthProvider} from './pages/Login/AuthContext';
import dummyData from './data.json';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;

    }
    case "CREATE": {

      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {

      newState = state.filter((it) => it.id !== action.targetId);
      break;

    }
    case "EDIT": {

      newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it
      );
      break;

    }

    case "ADD_TO_CART": {
      newState = state.map(item =>
        item.id === action.item.id
          ? { ...item, addedToCart: true } // 해당 항목의 addedToCart를 true로 설정
          : item
      );
      break;
    }
    default:
      return state;

  }
  return newState;
};

export const VolunteerStateContext = React.createContext();
export const VolunteerDispatchContext = React.createContext();



const App = () => {

  const [data, dispatch] = useReducer(reducer, dummyData.dummyData);
  const dataId = useRef(8);

  //create
  const onCreate = (date, content, category, location, detail, image, userid) => {
    dispatch({
      type: "CREATE", data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        category,
        location,
        detail,
        image,
        userid,
      },
    });
    dataId.current += 1;
  };

  //Remove
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }
  //Edit
  const onEdit = (targetId, date, content, category, location, detail, image, userid) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        category,
        location,
        detail,
        image,
        userid,
       
      },
    });
  };
  const addToCart = ({ id, category, content, date, location, addedToCart }) => {
    const item = { id, category, content, date, location, addedToCart };

    dispatch({ type: "ADD_TO_CART", item });
  };



  return (
    <div className='App'>

      <AuthProvider>
      <VolunteerStateContext.Provider value={data}>
        <VolunteerDispatchContext.Provider
          value={{
            onCreate,
            onEdit,
            onRemove,
            addToCart,
          }

          }>
          <Routing />
        </VolunteerDispatchContext.Provider>
      </VolunteerStateContext.Provider>
      </AuthProvider>






    </div>
  );
}

export default App;
