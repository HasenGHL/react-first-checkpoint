//task 1

function numWords(str){
for (let i=0; i < str.length; i = i+1){
    let result = 0;
    if (str[i] == ''){
        result = result+1;
    }
}
console.log(numWords)
}

function vowels(str){
    for (let i=0; i < str.length; i = i+1){
        let result = 0;
        if (str[i] == ['a','e','i','u','y','o']){
            result = result+1;
        }
    }
console.log(vowels)
}



//task 2

function sumOfSet(set1, set2){
    for (let i = 0; i<set1.length && i<set2.length; i = i +1){
    let sum = 0;
    if (set1[i] == set2[i]){
        sum = set1[i] + set2[i];
    }
    }
}
