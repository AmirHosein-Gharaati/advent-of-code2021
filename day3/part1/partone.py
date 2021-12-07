lst = []

while True:
    try:
        lst.append(input())
    except EOFError:
        break

first_num = ['0' for _ in lst[0]]

for i in range(len(lst[0])):

    counter = 0
    for j in range(len(lst)):
        if lst[j][i] == '0':
            counter += 1
    if counter < int(len(lst)/2):
        first_num[i] = '1'

second_num = []
for i in first_num:
    if i == '0':
        second_num.append('1')
    else:
        second_num.append('0')
    
first_num = int(''.join(first_num), 2)
second_num = int(''.join(second_num), 2)

print(first_num*second_num)