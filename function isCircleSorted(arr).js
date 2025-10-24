function isCircleSorted(arr)
{
    if (arr.length === 0 || arr.length === 1) 
    {
        return true;
    }
    let countDecreases = 0;
    
    for (let i = 0; i < arr.length; i++) 
    {
        const current = arr[i];
        const next = arr[(i + 1) % arr.length]; 
        if (current > next) 
        {
            countDecreases++;
        }
    }
    return countDecreases === 1;
}