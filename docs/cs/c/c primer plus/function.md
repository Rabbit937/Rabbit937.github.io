---
tag: 
  - C语言
---

# 函数

- 函数原型（function prototype）告诉编译器函数 starbar()的类型；函数调用（function call）表明在此处执行函数；函数定义（function definition）明确地指定了函数要做什么。
- 标准推荐使用 formal parameter），简称形参。和定义在函数中变量一样，形式参数也是局部变量，属该函数私有。这意味着在其他函数中使用同名变量不会引起名称冲突。每次调用函数，就会给这些变量赋值。
- 形式参数是被调函数（called function）中的变量，实际参数是主调函数（calling function）赋给被调函数的具体值。
- 当 float 类型被作为参数传递时会被升级为 double 类型
- 错误和警告的区别是：错误导致无法编译，而警告仍然允许编译。一些编译器在进行类似的类型转换时不会通知用户，因为 C 标准中对此未作要求。不过，许多编译器都允许用户选择警告级别来控制编译器在描述警告时的详细程度。
- 函数原型是 C 语言的一个强有力的工具，它让编译器捕获在使用函数时可能出现的许多错误或疏漏。

## 递归

- C 允许函数调用它自己，这种调用过程称为递归（recursion）。递归有时难以捉摸，有时却很方便实用。结束递归是使用递归的难点，因为如果递归代码中没有终止递归的条件测试部分，一个调用自己的函数会无限递归。可以使用循环的地方通常都可以使用递归。有时用循环解决问题比较好，但有时用递归更好。递归方案更简洁，但效率却没有循环高。
- 最简单的递归形式是把递归调用置于函数的末尾，即正好在 return 语句之前。这种形式的递归被称为尾递归（tail recursion），因为递归调用在函数的末尾。尾递归是最简单的递归形式，因为它相当于循环。
- 递归调用的数量受限于内存空间。
- 递归既有优点也有缺点。优点是递归为某些编程问题提供了最简单的解决方案。缺点是一些递归算法会快速消耗计算机的内存资源。另外，递归不方便阅读和维护。

## 查找地址：&运算符

- 指针（pointer）是 C 语言最重要的（有时也是最复杂的）概念之一，用于存储变量的地址。

## 指针简介

- 指针（pointer）是一个值为内存地址的变量（或数据对象）。
- 地址运算符：&，后跟一个变量名时，&给出该变量的地址。后跟一个变量名时，&给出该变量的地址。
- 简介（或解引用）运算符：\*，后跟一个变量名时，&给出该变量的地址。
- 编写程序时，可以认为变量有两个属性：名称和值（还有其他性质，如类型，暂不讨论）。计算机编译和加载程序后，认为变量也有两个属性：地址和值。地址就是变量在计算机内部的名称。
- 普通变量把值作为基本量，把地址作为通过&运算符获得的派生量，而指针变量把地址作为基本量，把值作为通过\*运算符获得的派生量。
- 函数可以作为组成大型程序的构件块。每个函数都应该有一个单独且定义好的功能。使用参数把值传给函数，使用关键字 return 把值返回函数。如果函数返回的值不是 int 类型，则必须在函数定义和函数原型中指定函数的类型。如果需要在被调函数中修改主调函数的变量，使用地址或指针作为参数。
- ANSI C 提供了一个强大的工具——函数原型，允许编译器验证函数调用中使用的参数个数和类型是否正确。
- C 函数可以调用本身，这种调用方式被称为递归。一些编程问题要用递归来解决，但是递归不仅消耗内存多，效率不高，而且费时。
