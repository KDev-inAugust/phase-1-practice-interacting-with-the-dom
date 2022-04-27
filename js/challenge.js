
//Counter
let counter = document.getElementById("counter");
let counterText=0;
startCounter();

function startCounter(){
intervalID = setInterval(()=>{
counterText++;
counter.innerText=counterText;
} , 1000);
}

//--------Pause Button---------------

let pauseButton = document.querySelectorAll('button')[3];

pauseButton.addEventListener('click', counterToggle);

function counterToggle(){
    if (pauseButton.id==="pause")
        {
            clearInterval(intervalID);
            pauseButton.id="pauseD";
            pauseButton.innerText='resume';
            document.getElementById('minus').disabled = true;
            document.getElementById('plus').disabled = true;
            document.getElementById('heart').disabled = true;
        }
     else 
        { 
            startCounter ();
            pauseButton.id="pause";
            pauseButton.innerText='pause';
            document.getElementById('minus').disabled = false;
            document.getElementById('plus').disabled = false;
            document.getElementById('heart').disabled = false;
        }
    }

//-------------Manually Increment and Decrement Counter---------

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

minus.addEventListener('click', minusDecrement);
plus.addEventListener('click', plusIncrement);

function minusDecrement (){
    counterText = counterText -1; 
    counter.innerText = counterText;  
}

function plusIncrement (){
        counterText = counterText +1;
        counter.innerText = counterText;
}

//--------------------Log Comments--------------------

const commentList=document.getElementById('comment-form');
const submitButton=document.getElementById('submit');
const formData=document.getElementById('comment-input');


submitButton.addEventListener('click', (e)=> 
{e.preventDefault();
submitComment()});

function submitComment(){
    let p = document.createElement('p');
   let listItem = commentList.appendChild(p);
   listItem.innerText=`${formData.value}`;
}

//------------------------log number likes---------------

const heartButton = document.getElementById('heart');
const likeList = document.querySelector('ul');
let t;

heartButton.addEventListener('click', logTimes)

// setInterval(()=> {
// heartButton.addEventListener('click', logLike, {once : true});
// }, 1000);


function logLike (){
t=0;
let likeElement= document.createElement('p');
likeElement.id=(counter.innerText);
likeAdd = likeList.appendChild(likeElement);
}


function logTimes (){
    let lastLike = document.getElementById(counter.innerText);

    if (lastLike===null)
    {
        logLike();
        let likeTimes=likeList.lastElementChild;
        likeTimes.innerText=(`${counter.innerText} was liked ${t+1} times`);
        //console.log('nothing')
    }

    else{
        let likeTimes=likeList.lastElementChild;
        likeTimes.innerText=(`${counter.innerText} was liked ${t+1} times`);
        //console.log(lastLike);
    }

    
    t=t+1;
    
 }

 




