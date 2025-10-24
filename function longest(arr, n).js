function longest(arr, n) 
{
    if (!arr || arr.length === 0) return null;
    if (n < 1 || n > arr.length) return null;
    const stringsWithIndex = arr.map((str, index) => {
        return { text: str, originalIndex: index };
    });
    stringsWithIndex.sort((a, b) => {
        if (a.text.length !== b.text.length)
        {
            return b.text.length - a.text.length; 
        } else 
        {
            return a.originalIndex - b.originalIndex; 
        }
    });
    return stringsWithIndex[n - 1].text;
}