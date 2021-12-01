#!/bin/bash

filename='data.txt'

declare -a arr

n=0
while read line; do
    arr[$n]=$line
    n=$((n+1))
done < $filename
arr[$n]=$line


counter=0
len=${#arr[@]}
for (( index=3; index<$len; index++ )); do
    if [[ ${arr[$index]} -gt ${arr[$index-3]} ]]; then
        counter=$((counter+1))
    fi
done

echo $counter