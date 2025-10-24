function hasTwoCubeSums(n) 
{
    let count = 0;
    const limit = Math.floor(Math.cbrt(n)) + 1;
    
    for (let a = 1; a < limit; a++) 
    {
        const a3 = a * a * a;
        if (a3 >= n) break;
        
        for (let b = a + 1; b < limit; b++) 
        {
            const b3 = b * b * b;
            const sum = a3 + b3;
            if (sum > n) break;
           
            if (sum === n) 
            {
                count++;
                if (count >= 2) 
                {
                    return true;
                }
                break; 
            }
        }
    }
    return false;
}
console.log(hasTwoCubeSums(1729)); 
console.log(hasTwoCubeSums(42));   
console.log(hasTwoCubeSums(4104)); 
function hasTwoCubeSumsOptimized(n) 
{
    let count = 0;
    const limit = Math.floor(Math.cbrt(n));
    
    let left = 1;
    let right = limit;
    
    while (left < right) 
    {
        const left3 = left * left * left;
        const right3 = right * right * right;
        const sum = left3 + right3;
        
        if (sum === n) 
        {
            count++;
            if (count >= 2) return true;
            left++;
            right--;
        } else if (sum < n) 
        {
            left++;
        } else 
        {
            right--;
        }
    }
    
    return false;
}
console.log("Тесты:");
console.log("1729:", hasTwoCubeSums(1729)); 
console.log("42:", hasTwoCubeSums(42));     
console.log("4104:", hasTwoCubeSums(4104)); 
console.log("13832:", hasTwoCubeSums(13832));