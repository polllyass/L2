function toWeirdCase(string) 
{
    const words = string.split(' ');
    const resultWords = [];
    for (let word of words) 
    {
        let newWord = '';
        for (let charIndex = 0; charIndex < word.length; charIndex++) 
        {
            const currentChar = word[charIndex];
            if (charIndex % 2 === 0) 
            {
                newWord += currentChar.toUpperCase();
            }
            else 
            {
                newWord += currentChar.toLowerCase();
            }
        }
        resultWords.push(newWord);
    }
    return resultWords.join(' ');
}