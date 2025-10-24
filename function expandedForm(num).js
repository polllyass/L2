function expandedForm(num) 
{
    const numberString = num.toString();
    const parts = []; 
    for (let i = 0; i < numberString.length; i++) 
    {
        const currentDigit = numberString[i];
        if (currentDigit === '0')
        {
            continue;
        }
        const position = numberString.length - i - 1;
        let zeros = '';
        for (let j = 0; j < position; j++) 
        {
            zeros += '0';
        }
        const part = currentDigit + zeros;
        parts.push(part);
    }
    return parts.join(' + ');
}