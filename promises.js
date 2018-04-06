// nested and independent promises

let cleanRoom = function () {
    return new Promise(function(resolve, reject) {
        resolve('Cleaned the room');
    });
};

let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        resolve( message + 'remove garbage');
    });
};

let winIcecream = function (message) {
    return new Promise(function(resolve, reject) {
        resolve(message + 'won Icecream');
    });
};

Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).
then(function(){
    console.log('all finished')

});
/*Promise.race([cleanRoom(),removeGarbage(),winIcecream()]).
then(function(){
    console.log('one of them finished')

});*/
