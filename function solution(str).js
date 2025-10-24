function solution(str) 
{
    const pairs = [];
    if (str.length % 2 === 1) 
    {
        str += '_';
    }
    let i = 0;
    while (i < str.length) 
    {
        pairs.push(str[i] + str[i + 1]);
        i += 2;
    }
    return pairs;
}