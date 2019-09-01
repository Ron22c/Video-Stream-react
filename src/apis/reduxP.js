const createPolicy= (name, amount)=>{
    return {
        type:"CREATE_POLICY",
        payload:{
            name = name,
            amount = amount
        }
    }
}

const claim = (name, amountToBeClaimed) =>{
    return {
        type:'CLAIM_POLICY',
        payload:{
            name:name,
            amountToBeClaimed:amountToBeClaimed
        }
    }
}

const deletePolicy = (name)=>{
    return {
        type:'DELETE_POLICY',
        payload:{
            name:name
        }
    }
}

const claims = (oldPolicies=[],action) =>{
    if(action.type==='CLAIM_POLICY'){
        return [...oldPolicies, action.payload]
    }
    else{
        return oldPolicies
    }
}
const accounting = (bagofmoney, action)=>{
    if(action.type==='CLAIM_POLICY'){
        return bagofmoney - action.payload.amountToBeClaimed
    }
    else if(action.type === 'CREATE_POLICY'){
        return bagofmoney + action.payload.amount
    }
    else{
        return bagofmoney
    }
}
const Policy = (oldPolicies, action)=>{
    if(action.type==='DELETE_POLICY'){
        return oldPolicies.filter(name=> name!== action.payload.name)
    }
    else if(action.type==='CLAIM_POLICY'){
        return [...oldPolicies, action.payload.name]
    }
    else return oldPolicies
}
const {createStore, combineReducers} = Redux

const ourReducers = combineReducers({
    claims: claims,
    accounting: accounting,
    Policy: Policy
})

const store = createStore(ourReducers)
store.dispatch(claim)
console.log(store.getState())