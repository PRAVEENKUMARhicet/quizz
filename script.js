function correct(){
    let ans=document.getElementsByTagName("p");
    let btn=document.getElementsByTagName("button");
    ans[2].style.backgroundColor="green";
    ans[2].style.color="white";
    btn[2].style.backgroundColor="green";
}

function wronga(){
    let ans=document.getElementsByTagName("p");
    let btn=document.getElementsByTagName("button");
    ans[0].style.backgroundColor="red";
    ans[0].style.color="white";
    btn[0].style.backgroundColor="red";
}

function wrongb(){
    let ans=document.getElementsByTagName("p");
    let btn=document.getElementsByTagName("button");
    ans[1].style.backgroundColor="red";
    ans[1].style.color="white";
    btn[1].style.backgroundColor="red";
}

function wrongd(){
    let ans=document.getElementsByTagName("p");
    let btn=document.getElementsByTagName("button");
    ans[3].style.backgroundColor="red";
    ans[3].style.color="white";
    btn[3].style.backgroundColor="red";
}