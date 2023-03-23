const initialState = {
    test: ''
}

type Action = {
    type: string
}

export default function testReducer(state = initialState, action: Action){
    switch(action.type){
        default: 
            return state;
    }
}
