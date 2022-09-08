function one(){
    /* 시간이 오래걸리는 작업 */
    // setTimeout(()=>작업내용,시간);
    setTimeout(() => {
        console.log('One...')
        
    }, 3000);
}

function two(){
    /* 적은 시간이 걸리는 작업 */
    setTimeout(()=>{
        console.log('Two...');
    },1000);
}

one();
two();