#include <stdio.h>

#define int long long

signed main(){

    int h_position=0, depth=0, aim=0, w;
    char arr[10];

    while(scanf("%s %d", arr, &w) != EOF){
        if(arr[0] == 'f'){
            h_position += w;
            depth += aim*w;
        }

        else if(arr[0] == 'd')
            aim += w;
            
        else if(arr[0] == 'u')
            aim -= w;
    }
    
    int res = h_position*depth;
    printf("%lld\n", res);

    return 0;
}