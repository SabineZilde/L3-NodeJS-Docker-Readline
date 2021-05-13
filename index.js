import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Please enter your input. ', function (answer) {
    const cleanedUpStirng = answer.toLowerCase().replace(/ /g, ''); // Turns parameter in lower case and removes spaces (One Two = onetwo)
    const reverseString = cleanedUpStirng.split('').reverse().join('');
    if (reverseString === cleanedUpStirng) {
        console.log(`${reverseString} is a palindrome`);
    } else {
        console.log(`${reverseString} is not a palindrome`);
    }
    rl.close();
})