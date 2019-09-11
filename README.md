

npm install redux react-redux

# *Index.js*

 1. **Store** => contains seprated shared data 
 2. **Actions** => deccribe what i wanna do => action called increment its job is increment a counter
 3. **Reducer** => checks what action i did and update the Store
 4. **Dispatch** => send action to reduce to check and update data

### Coding

     import {createStore, combineReducers} from 'redux'


    //ACTION : Simple function that returns an object
    const increment = (nbr) => {
        return {
            type: 'INCREMENT',
            payload: nbr
        }
    }




    //REDUCER : Simple function that returns an object
    const counter = (state = 0, action)=> {
        switch(action.type){
            case "INCREMENT" : 
                return state + action.playload;
        }
    }




    //STORE : add reducer to Store
    let allReducers = combineReducers({
        counter: counter,
    })
    let store = createStore(allReducers)


    // Display the store
    store.subscribe(
            ()=> console.log(store.getState())
        )
    

    //DISPATCH: to dispatch an action
    store.dispatch(increment())
    store.dispatch(increment())


    import {Provider} from 'react-redux';

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provuder>
        , document....
    )



# *App.js*

    import {useSelector, useDispatch} from 'react-redux';
    import {increment} from './actions';
    .
    .
    .
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    .
    .
    <div>
        <button onClick={() => dispatch(increment())}>+<button>
        Counter: {counter}
    </div>

    


# *CHROME TOOLS*

 - install : redux DevTools and follow the **instructions**

