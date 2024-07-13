function download(url){
    console.log("downloading...");
    return new Promise((reject,resolve)=>{
        let downloadedFile = url.split('/').pop();
        setTimeout(()=>{
            resolve(downloadedFile);

        },2000)
    })
}

function compress(downloadedFile){

}

function upload(compressedFile){

}

download('http://codingblocks/Myfile.mp4')
.then(
    ((downloadedFile)=>{
        console.log(downloadedFile);
    })
)
.catch(
    ((err)=>{
        console.log("error occured");
    })
)