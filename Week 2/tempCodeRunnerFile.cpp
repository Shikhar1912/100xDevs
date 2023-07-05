//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution{
    public:
    int lenOfLongSubarr(int A[],  int N, int K) 
    { 
        // Complete the function
        int i=0,j=0;
        int length=0;
        int sum=0;
        while(j<N){
            sum+=A[j];
            while(sum>K && i<=j){
                sum-=A[i++];
                cout<<sum<<" "<<i<<" "<<j<<endl;
            }
            if(sum==K) length=max(length,j-i+1);
            j++;
        }
        return length;
    } 

};

//{ Driver Code Starts.

int main() {
	//code
	
	int t;cin>>t;
	while(t--)
	{
	    int n, k;
	    cin>> n >> k;
	    int a[n];
	    
	    for(int i=0;i<n;i++)
	        cin>>a[i];
	   Solution ob;
	   cout << ob.lenOfLongSubarr(a, n , k)<< endl;
	    
	}
	
	return 0;
}
// } Driver Code Ends