// Code your solutions in this file
function countDown(num){
    while (num >=0){
        console.log(num);
        num--;
    }
}
countDown(10);


 

function writeCards(namesArray, eventName){
   const messageArray = [];
    for(let i=0; i<namesArray.length; i++){
        const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        messageArray.push(message);
    }return messageArray;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");