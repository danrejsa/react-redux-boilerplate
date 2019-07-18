import { GET_X, DELETE_Y , ADD_Z, _LOADING} from "../actions/types";
const initialState = { 
 // xxxxxx: [],  
 // isLoading:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_X: return {
        ...state,
//     xxxxxx: action.payload,
//        isLoading:false
      };
      case DELETE_Y:
      return {
     //   ...state,
      //  xxxxxx:state.items.filter( c => c._id !== action.payload)
      };
      case ADD_Z:
        return {
       //   ...state,
       //   xxxxxx:[action.payload,...state.items]
        };
        case _LOADING:
        return {
      //    ...state,
       //   isLoading:true
        };
    default:
      return state;
  }
}


