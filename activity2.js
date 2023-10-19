//Activity 2:
/*
Create an asynchronous function where someone gets to a typing speed of 80 wpm if they practice
*/
const improveTyping = async (didPractice) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didPractice) {
                resolve(80);
            } else {
                reject(new Error("I failed"));
            }
        }, 2000);
    });
};

// If the didPractice argument is false, it returns an error message
// If the didPractice argument is true, it returns a success message
improveTyping(true)
    .then((result) => {
        console.log(`I have a typing speed of ${result} wpm!`);
    })
    .catch((error) => {
        console.log(error);
    })