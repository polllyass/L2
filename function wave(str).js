function wave(str) 
{
    const waveArray = [];
    for (let i = 0; i < str.length; i++) 
    {
        const currentChar = str[i];
        if (currentChar === ' ')
        {
            continue;
        }
        let waveString = '';
        waveString += str.substring(0, i);
        waveString += currentChar.toUpperCase();
        waveString += str.substring(i + 1);
        waveArray.push(waveString);
    }
    return waveArray;
}