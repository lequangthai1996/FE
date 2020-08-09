const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


const otherNames = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const addresses = ['the soup kitchen', 'Disneyland', 'the White House'];
const nextInfors = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function randomArray(arr) {
  let randomIndex = Math.floor(Math.random()*(arr.length));
  return arr[randomIndex];
}

randomize.addEventListener('click', generateResult);

function generateResult() {
  let inputName = customName.value;
  if(inputName !== '') {
    let temp = checkChooseLanguage() ? 'It was 94 fahrenheit outside' : 'It was 34 centigrade outside';
    let weight = checkChooseLanguage ? '300 pounds' : '21 stone';
    let nameTarget = randomArray(otherNames);
    let addressTarget = randomArray(addresses);
    let inforTarget = randomArray(nextInfors);
    let result = `${temp}, so ${nameTarget} went for a walk. When they got to ${addressTarget}, they stared in horror for a few moments, ${inforTarget}. ${inputName} saw the whole thing, but was not surprised — ${nameTarget} weighs ${weight}, and it was a hot day.`;
    story.textContent = result;
    story.style.visibility = 'visible';
  }
}

function checkChooseLanguage() {
  const chooseLanguage = document.getElementById('uk');
  return chooseLanguage.checked;
}
