
function play(){ 
     const homeSec = document.getElementById('home');
   homeSec.classList.add('hidden');
   const playSec = document.getElementById('play-ground');
   playSec.classList.remove('hidden');
  randomAlpha();
  
}
function randomAlpha(){
   const alphabets = 'abcdefghigklmnopqrstuvwxyz';
      const alphabet = alphabets.split('');
       console.log(alphabet);
       const randomNumber = Math.random() * 25;
       // console.log(randomNumber);
       const index= Math.round(randomNumber);
    console.log(index);
    const word = alphabet[index];
    console.log(word);
    const elementId = document.getElementById('current');
      elementId.innerText = word;
    setColor(word);
}
function setColor(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-black');
   
   }
   


