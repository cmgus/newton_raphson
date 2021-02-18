const mjs = require('mathjs')

const newthon_raphson = (Fxfx, condition, xk, k = 0) => {
    const f = mjs.evaluate(Fxfx.replace(/x/g, xk))
    const print = `${k} | ${xk.toFixed(12)}\t${f}\t`
    xk = mjs.evaluate(`${xk} - ${f}`)
    console.log(`${print}\t${xk}`)
    return mjs.evaluate(condition.replace(/x/g, xk)) || k > 9
        ? xk
        : newthon_raphson(Fxfx, condition, xk, ++k)
}
/* const x0 = 10
const Fxfx = '(72 * x ^ 3 - 234 * x ^ 2 + 241 * x - 78) / (216 * x ^ 2 - 468 * x + 241)'
const condition = ''

console.log(newthon_raphson(Fxfx, condition, x0)) */

//
const x0 = 3.5
const Fxfx = '(x ^ x - 100) / (x ^ x (1 + log(x)))'
const condition = 'x ^ x == 100'

console.log(newthon_raphson(Fxfx, condition, x0))

