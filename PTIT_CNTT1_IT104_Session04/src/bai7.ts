const processInput = (input: string | number | boolean)=>{
    if(typeof input == 'string'){
        if(!isNaN(Number(input))){
            console.log(Number(input)**2)
        }else{
            let letterCount:number = 0
            for(let i = 0; i < input.length; i++){
                if(isLetter(input[i]!)){
                    letterCount++
                }
            }
            console.log(`${letterCount} ki tu chu cai`)
        }
    }

    if(typeof input == 'number'){
        if(isPrime(input)){
            console.log(`La so nguyen to`)
        }else{
            console.log(`Khong phai la so nguyen to`)
        }
    }

    if(typeof input == 'boolean'){
        if(input){
            console.log(`Gia tri la true - tien hanh xu li`)
        }else{
            console.log(`Gia tri la false - dung xu li`)
        }
    }
}
processInput("123");
processInput("abc123");
processInput(false);
processInput(5);
processInput(10);



//ham kiem tra ki tu
function isLetter(char: string): boolean {
    return /^[a-zA-Z]$/.test(char);
}

function isPrime(n: number): boolean {
    if (n < 2 ) return false;
    if (n === 2) return true;
    if(n % 2 === 0) return false
    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0){
            return false;
        }
    }
    return true;
}