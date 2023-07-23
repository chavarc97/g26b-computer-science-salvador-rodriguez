for(let i = 0; i < s.length; i++){
        const character = s[i];
        if(character === '{' || character === '(' || character === '['){
            stack.push(character);
        } else{
            if (stack.lenght === 0) return NO;
            
        }
    }

}