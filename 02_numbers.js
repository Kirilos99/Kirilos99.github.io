//const num = 42
//const float = 42.42
//const pow2 = 10e3
//console.log('max_value ', Number.MAX_VALUE)
//console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
//console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
//console.log('1/0', 1/0)
//console.log('nana', Number.NaN)
//console.log('2/unde', 2/undefined)
//const wierd = 2/undefined
//console.log(isNaN(wierd))
//console.log(isNaN(42))
//console.log(isFinite(Infinity))
//console.log(isFinite(42))

//const stringint = '40'
//const stringfloat = '40.42'
//console.log(parseInt(stringint) +2 )
//console.log(+stringfloat +2 )
//console.log(parseInt(stringint) +2 )

//console.log(0.2 + 0.4)
//console.log(+(0.2 + 0.4).toFixed(1))

// bigint
//console.log(typeof 90071992547409919999999n)
//console.log(90071992547409919999999n-9007199254740991999999n)
//console.log(parseInt(10n)-4)
//console.log(10n- BigInt(4))

// math
// console.log(Math.E)
// console.log(Math.sqrt(9))
// console.log(Math.abs(-43))
// console.log(Math.max(42, 12, 14, 233))
// console.log(Math.floor(4.55))
// console.log(Math.random())

// example random
function getrandom(min, max){
    return Math.floor( Math.random() * (max-min+1) + min)
}

console.log(getrandom(10, 42));