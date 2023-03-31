// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const addTimeTodb = (time) => {
    let newTime;
    const storedTime = localStorage.getItem('break-time');

    if(storedTime){
        newTime= JSON.parse(storedTime);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(newTime));
}
const getStoredTime = () => {
    let breakTime;
    const storedTime = localStorage.getItem('break-time');
    if(storedTime){
        breakTime= JSON.parse(storedTime);
    }
    return breakTime;
}
const getStoredCart = () =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}




export {
    addToDb, 
    getStoredCart,
    
}