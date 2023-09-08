# 数组常用的方法

## Array.prototype.at()

方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

```javascript
let fruits = ["Apple", "Orange", "Plum"]

console.log(fruits[fruits.length - 1])
console.log(fruits.at(-1))          // 与上面结果相等

console.log(fruits[0])
console.log(fruits.at())            // 与上面结果相

```

只接受整数，传小数，向下取整

## Array.prototype.map() *

map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

```javascript
let lengths = ["Bilbo", "Gandalf", "Nazgui"].map(item => item.at())
console.log(lengths)
```

## Array.prototype.splice()

splice() 方法通过移除或者替换已存在的元素和/或添加新元素就地改变一个数组的内容。

## Array.prototype.slice() *

slice() 方法返回一个新的数组对象，这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end），其中 start 和 end 代表了数组元素的索引。原始数组不会被改变。

两者的区别:要创建一个删除和/或替换部分内容而不改变原数组的新数组，请使用 toSpliced()。要访问数组的一部分而不修改它，参见 slice()。

## Array.prototype.copyWithin()

copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

## Array.prototype.reduce() *

reduce() 方法对数组中的每个元素按序执行一个提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

## 几个案例

```javascript
// 输入求和
function sumInput() {
    let numbers = [];  

    while(true) {
        let value = prompt("A number please?",0)

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value)
    }

    let sum = 0;
    for(const number of numbers) {
        sum += number;
    }

    return sum;
}

/**
 * @description 横杠转驼峰
 * @param {string} str 
 * @returns background-color -> backgroundColr
 */
function camelize(str) {
    return str.split('-').map((word,index) => index  === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}

/**
 * @description 区间过滤
 * @param {array} arr
 * @param {a} 区间起始值
 * @param {b} 区间结束值
 * @returns filtered arr
 */
function filterRange(arr,a,b) {
    return arr.filter((value,index) => (value <= b && value >= a));
}


/**
 * 
 * @description 数组去重,利用set的每个元素只能存在一个的特性
 * @param {array} arr
 * @returns uniqued arr
 */
function unique(arr) {
    return Array.from(new Set(arr));
}
```
