function willYouMarryMe(FightsCount){
    return new Promise((reject,resolve)=>{
        setTimeout(()=>{
            if(FightsCount>=100) reject("No!!");
            resolve("yess!!");
        },3000)
    }
    )

}

willYouMarryMe(102).then(
    function(msg){
        console.log(msg)
    },
    function(err){
        console.log(err)
    }
)