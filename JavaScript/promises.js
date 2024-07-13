// let watchingmovie = false;

// let p = new Promise(function(resolve, reject){
//     if(watchingmovie) return resolve("popcorn yess!!");
//     reject("popcorn No!!");
// })

// p.then(
//     function(msg){
//         console.log("success", msg);
//     },
//     function(err){
//         console.log("failure" , err);
//     }
// )





let watchingmovie = false;

function Delay(){
    let currentTime = new Date().getTime();
    while(currentTime+2000 > new Date().getTime()){

    }
}

let p = new Promise(function(resolve, reject){
    Delay();                                                       //it will took 2 second delay
    if(watchingmovie) return resolve("popcorn yess!!");
    reject("popcorn No!!");
})

p.then(
    function(msg){
        console.log("success", msg);
    },
    function(err){
        console.log("failure" , err);
    }
)


