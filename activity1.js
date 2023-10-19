//Activity 1:
/*
Create an array of random sentences. 
Then use a function to loop through the array to modify it by either adding or removing sentences.
Keep a count of how many sentences were modified and return that value.
*/

let sent = ['Welcome to Hack!', 'This is HackSchool!', "I am learning JavaScript", 'ACM hosts cool events'];
let count = 0;
function sentences(sentencesList, action, string){
  if(action == 'remove' && string){
    for(i = sentencesList.length - 1; i >= 0; i--) { //need to decrement/reverse to splice without skipping
      if(sentencesList[i] == string){
        sentencesList.splice(i, 1);
        count++;
      }
    }
    console.log(sentencesList);
  }
  else{
    if(action == 'add' && string){
      sent.push(string);
      count++;
      console.log(sentencesList);
    }
    else if(action == 'remove' && !string){
      sent.pop();
      count++;
      console.log(sentencesList);
    }
    else{
      console.log("Error, make sure arguments are: sentences list, either 'add' or 'remove', string to add or remove or null");
    }
  }
  return sentencesList;
}

const sentencesErr = sentences(sent);

const sentencesAdd = sentences(sent, 'add', 'I love Hack events!');
console.log("sentencesAdd: " + sentencesAdd);
console.log("count: " + count);

const sentencesRemove = sentences(sent, 'remove', 'This is HackSchool!');
console.log("sentencesRemove: " + sentencesRemove);
console.log("count: " + count);

const sentencesNull = sentences(sent, 'remove', null);
console.log("sentencesNull: " + sentencesNull);
console.log("count: " + count);