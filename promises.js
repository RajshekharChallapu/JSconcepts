                                          //callback function
let promiseToFinishTheGame =  new Promise(function(resolve, reject){
    
    //Finish the Game
    let isFinish =false;
    
    if(isFinish){
        resolve('Finish');
        
    }else{
        reject('not clean');
    }
});            
//calling promise to check is resolved//callback
promiseToFinishTheGame.then(function(fromResolve){
    
    console.log('the room is' + fromResolve );
    // to check error if reject
}).catch(function(fromReject){
    console.log('the room is' + fromReject);
    
});