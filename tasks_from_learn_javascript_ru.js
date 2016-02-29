// Простые числа
//Решето Эратосфена за O(n log log n)
//C++ 
int n;
vector<char> prime (n+1, true);
prime[0] = prime[1] = false;
for (int i=2; i<=n; ++i)
	if (prime[i])
		if (i * 1ll * i <= n)
			for (int j=i*i; j<=n; j+=i)
				prime[j] = false;


//Решето Эратосфена за O(n log log n)
//JS
var n=100;
var prime=[];
for(var i=2; i<n+1; i++) prime[i]=true;
for(var i=2; i*i<=n; ++i)
	if(prime[i])
			for(var j=i*i; j<=n; j+=i)
				prime[j] = false;
for(var i=2; i<n+1; i++) if(prime[i]) console.log(i);



//Решето Эратосфена с линейным временем работы (алгоритм Грайсу и Мисра) за O(n) но больше памяти
//C++
const int N = 10000000;
int lp[N+1];
vector<int> pr;
for (int i=2; i<=N; ++i) {
	if (lp[i] == 0) {
		lp[i] = i;
		pr.push_back (i);
	}
	for (int j=0; j<(int)pr.size() && pr[j]<=lp[i] && i*pr[j]<=N; ++j)
		lp[i * pr[j]] = pr[j];
}
//Решето Эратосфена с линейным временем работы (алгоритм Грайсу и Мисра) за O(n) но больше памяти
//JS за O(n)
var n=100;
var lp =[]; for(var i=0; i<n+1; i++) lp[i]=0;
var pr=[]; //contain prime numbers, can be use for factorization
for(var i=2; i<=n; ++i){
	if (lp[i] == 0) {
		lp[i] = i;
		pr.push(i);
	}
	for (var j=0; j<pr.length && pr[j]<=lp[i] && i*pr[j]<=n; ++j)
		lp[i * pr[j]] = pr[j];
}



function truncate(str, maxlength){
	if(str.length>maxlength){
		var truncatedStr=str.slice(0, maxlength - 1) + '…';
		return truncatedStr;
	}
	return str;
}


function getDecimal(n){
	return +(n%1).toFixed(6);
}


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}


function multiplyNumeric(obj){
	var key, value;
	for(key in obj){
		value=obj[key];
		if(isNumeric(value))
			obj[key]=2*value;
	}
	
};

