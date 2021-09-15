// console.log("hello");
let i = 0;
function dfs(){
    const arr = [
            'url("/img/hd1.jpg")',
            'url("img/salvador-godoy-ksLWYYmK-0k-unsplash.jpg")',
            'url("/img/ff01.jpg")', 
            'url("https://i.pinimg.com/564x/9c/bd/6a/9cbd6a55a8a4b5c307ad0fe1aa1e6f9d.jpg")',
            'url("https://images.hugoboss.com/is/image/hugobossdm/HB_Guide_02_SuitRules_008_sRGB?$large$&cropN=0.0179687,0.0023447,0.8820313,0.9988277&align=0,-1&fit=crop,1&ts=1602665779628&wid=768")',      
            'url("/img/hd2.jpg")',   
            'url("/img/ff04.jpg")',     
            'url("/img/hd4.jpg")',        
            'url("/img/hd8.jpg")',        
            'url("/img/hd9.jpg")',     
            'url("/img/ff05.jpg")',
            'url("/img/hd10.jpg")', 
            'url("/img/et1.jpg")', 
            'url("/img/et3.jpg")', 
            'url("/img/et4.jpg")',
            'url("/img/ff1.jpg")',
            'url("/img/ff2.jpeg")',
            'url("/img/ff3.jpg")',
            'url("/img/ff5.jpg")',
            'url("/img/ff6.jpg")',
            'url("/img/ff7.jpg")',
            'url("/img/ff9.jpg")',
            'url("/img/ff03.jpg")',
            'url("/img/ff10.jpg")',
            'url("/img/ff11.png")',
            'url("/img/ff12.jpg")',
            'url("/img/ff13.jfif")',
            'url("/img/ff16.jpg")',
            'url("/img/ff02.jpg")'
    ]
    const head = document.getElementById('header');
    const bg = arr[Math.floor((i+1) % arr.length)];
    console.log(i);
    head.style.backgroundImage = bg;
    i++;
    if(i >= arr.length){
        i=1;
    }
}
setInterval(dfs, 3000);

let j =0;
function abt(){
    const arr = [
            'url("/img/hd13.png")',   
            'url("/img/hd14.png")',        
            'url("/img/hd15.png")',        
            'url("/img/hd16.png")',        
            'url("/img/hd17.png")',
            
            'url("https://64.media.tumblr.com/85d7bc0d22d5342ebf2fdecfb2e1fc8c/tumblr_ng2r0u9jXm1s3n41po1_500.jpg")',
            'url("https://i.pinimg.com/564x/31/d3/20/31d32076608dc06f769a67e14ac25434.jpg")',
            'url("https://i.pinimg.com/564x/61/5b/fe/615bfecd28a6ea55807311a3140df78e.jpg")',
            
            'url("https://i.pinimg.com/564x/e7/de/f2/e7def25e588c38dbf98e0205a80b862f.jpg")',
            'url("https://i.pinimg.com/564x/58/2a/16/582a16c06fe6d2cb4f700450675d00ab.jpg")',
            'url("https://i.pinimg.com/564x/cc/07/79/cc0779c6701e0bf054e26a754779497e.jpg")',
            'url("https://i.pinimg.com/564x/a9/5f/29/a95f29de749d4df52e9d41bdedb67d26.jpg")',
            'url("https://i.pinimg.com/564x/fe/89/16/fe89162bfbe1adfd50e2d273fd9b3da9.jpg")',
            'url("https://i.pinimg.com/564x/fe/89/16/fe89162bfbe1adfd50e2d273fd9b3da9.jpg")',
            'url("/img/112.jfif")',
            'url("https://i.pinimg.com/564x/4c/16/0e/4c160ee371de796da174d19a49b080ba.jpg")',

    ]
    let head = document.getElementById('about-img2');
    let imm =  document.getElementById('imgid');
    let ag = arr[Math.floor((j+1) % arr.length)];
    console.log(j);
    head.style.backgroundImage = ag;
    j++;
    if(j >= arr.length){
        j=1;
    }
}
setInterval(abt, 2000);

let k =0;
function abt2(){
    const arr = [
      'url("/img/pp4.jpg")',
      'url("/img/as.jfif")',
      'url("/img/113.jfif")',
      'url("https://i.pinimg.com/564x/8b/69/01/8b690165c28bd6fb717a695420937096.jpg")',
      'url("https://img.freepik.com/free-photo/tailor-standing-near-male-client-measuring-back-tailor-woman-taking-measures-new-business-shirt-using-tape-meter-young-fashion-designer-taking-measurement-man-wearing-shirt-store_256588-1177.jpg?size=626&ext=jpg")',   
            
            'url("data:image/jpeg;base64,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")',   
    ]
    let head = document.getElementById('about-img');
    let imm =  document.getElementById('imgid');
    let ag = arr[Math.floor((k+1) % arr.length)];
    console.log(k);
    head.style.backgroundImage = ag;
    k++;
    if(k >= arr.length){
        k=0;
    }
}
setInterval(abt2, 2000);
