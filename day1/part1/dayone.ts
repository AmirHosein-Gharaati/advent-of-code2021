import { readFileSync } from "fs";

function pipe(...fns: Function[]) : Function {
    return (value: any) => {
        fns.forEach((fn: Function) => value = fn(value));
        return value;
    }
}

function read(path: string): String{
    return readFileSync(path, 'utf-8')
}

function split(data: String): String[] {
    return data.split('\n');
}

function mapToNumber(data: String[]): number[] {
    return data.map((str: String) => +str)
}

function count(numbers: number[]) : number {
    let counter = 0
    for(let i = 1 ; i < numbers.length ; i++)
        if(numbers[i] > numbers[i-1])
            counter++;
    return counter
}

const ans = pipe(read, split, mapToNumber, count)('./data.txt')
console.log(ans);