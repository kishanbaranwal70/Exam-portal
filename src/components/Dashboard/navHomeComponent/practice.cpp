#include<bits/stdc++.h>
using namespace std;
#define int  long long
#define vc vector<int> 
#define F first
#define S second
#define eb emplace_back
#define map map<int,int> 
#define For(j,n,ju) for(int i=j;i<n;i+=ju)
#define Forr(j,ju) for(int i=j;i>-1;i-=ju)
int power(int x, int y, int p) 
{ 
    int res = 1;      
    x = x % p;  
    while (y > 0) 
    { 
      
        if (y & 1) 
            res = (res*x) % p; 
  
        
        y = y>>1; // y = y/2 
        x = (x*x) % p; 
    } 
    return res; 
} 
  

int modInverse(int n, int p) 
{ 
    return power(n, p-2, p); 
} 
  
 
int nCrModPFermat(int n, int r, int p) 
{ 
 
   if (r==0) 
      return 1; 
  
   
    int fac[n+1]; 
    fac[0] = 1; 
    for (int i=1 ; i<=n; i++) 
        fac[i] = fac[i-1]*i%p; 
  
    return (fac[n]* modInverse(fac[r], p) % p * 
            modInverse(fac[n-r], p) % p) % p; 
} 
/*
// dsu started 
int a[1000000],b[1000000];
    int find(int x){
        if(b[x]==x) return x;
        b[x]= find(b[x]);
      return b[x];
    }
    void uniona(int x,int y){
        x=find(x);
        y=find(y);
        if (x!=y) {
            a[y]<a[x] ? b[x]=b[y]:b[y]=b[x];
        }
    }
//cut from here
int n,k;
    cin>>n>>k;
     
   
     for(int i=1;i<=n;i++){
    cin>>a[i];
    b[i]=i;
    }
     for(int i=1;i<=k;i++){
    int t1,t2;
    cin>>t1>>t2;// basic code for dsu
    uniona(t1,t2);
//dsu ends
*/
     void exe(){
        int n,k;
        
     }
int32_t main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    // cout<<"enter\n";
int t;
// cin>>t;
t=1;
while(t--){
    
    exe();
}
}