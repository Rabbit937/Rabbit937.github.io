# 迭代器

迭代器是一个对象，它定义一个序列，并在终止时可能返回一个返回值。

## 使用for...of遍历对象

```javascript
// 直接使用
let range = {
    from : 1,
    to : 5,
}

for(const num of range) {
    console.log(num)
}
```

直接使用的话:
![typeError](./image/iterator_typeError.png)

正确的使用方式:

1.使用Object.entries,Object.values等等方法，然后在使用for...of便利，这些方法会产生内部转化

```javascript
for(const [key,value] of Object.entries(range)) {
    console.log(num)
}

for(const value of Object.values(range)) {
    console.log(num)
}
```

2.自己给对象定义一个可以迭代属性

```javascript
let range = {
    from: 1,
    to: 5
}

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }
            } else {
                return { done: true }
            }
        }
    }
}

for (const num of range) {
    console.log(num)
}

```

可以自定义next函数的返回值，注意返回结束条件
