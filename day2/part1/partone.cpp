#include <bits/stdc++.h>

using namespace std;

#define int long long
#define fast ios_base::sync_with_stdio(false);cin.tie(nullptr);cout.tie(nullptr);
typedef pair<int, int> ii;

signed main(){

    fast;
    int x=0, y=0, w;
    char c;

    while(cin >> c){
        cin.ignore(10, ' ');
        cin >> w;
        if(c == 'f')
            x += w;

        else if(c == 'd')
            y += w;

        else if(c == 'u')
            y += -w;
    }

    cout << x * y<< endl;

    return 0;
}