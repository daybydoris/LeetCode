/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = '';
    const targetWord = strs[0];
    
    for(let i=0;i<targetWord.length;i++) {
        let targetLetter = targetWord[i];
        const stringsWithoutTargetLetter = strs.filter((item) => item[i] !== targetLetter);
        if(stringsWithoutTargetLetter.length > 0) {
            break;
        }
        prefix += targetLetter;
    }
    return prefix;
};