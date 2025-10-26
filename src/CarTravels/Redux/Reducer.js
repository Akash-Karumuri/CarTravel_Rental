import { BOOK_CAR } from "./ActionTypes"

//State
const initialCars={
    noOfCars:12
}

//Reducer

const Reducer=(state=initialCars,action)=>{
    switch(action.type){
        case BOOK_CAR:
            return{
                noOfCars:state.noOfCars-1
            }
            default:
                return state;
    }
}

export default Reducer