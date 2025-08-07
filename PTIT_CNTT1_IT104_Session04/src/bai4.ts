const handleUnionType = (input:string|number)=>{
    if(typeof input==='string'){
        console.log(input.length)
    }else if(typeof input ==="number"){
        if(input %2===0){
            console.log("day la so chan")
        }else{
            console.log("day la so le")
        }
    }
}
handleUnionType("abcd")
handleUnionType(12)