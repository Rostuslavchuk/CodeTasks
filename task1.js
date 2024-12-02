// all possible cases for n pairs of parentheses
// n is the count for open parentheses only, so we must also account for closed ones, making n * 2 total

function earrings(n) {
    
    let resArr = []; // array to collect all results
    let start = 0; // count for open parentheses '('
    let end = 0; // count for close parentheses ')'
    
    const count = (str) => {

        if (str.length === n * 2) { // if we have a valid case, we push it into resArr
            resArr.push(str); 
            return; // but here it’s not a simple return; it works specifically in this recursion
        }
        
        if (start < n) { // if we haven't used all open parentheses, we can place '(' since each open must have a matching close
            start++; // increment the counter for '('
            count(str + "("); // add '('
            // --
            start--;
        }
        if (end < start) {
            end++; 
            count(str + ")");
            // -- 
            end--;
        }
    }

    // -- this code runs after the return is triggered, and it’s important to note where the last count() was called
    // the code here will execute as many times as count() was called before, essentially
    // backtracking to the initial state at the point where the return was triggered, moving all others one step back 
    
    count(""); // function for counting
    return resArr;
    
}
console.log(earrings(2));
