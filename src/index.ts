type TurnIntoString = (integer: number) => string

const transform: TurnIntoString = (input) => {
    return input + '';
};

console.log(transform(2));
