---
title: C语言概述
---

```c
#include<stdio.h>
```

- #include <stdio.h>的作用相当于把stdio.h文件中的所有内容都输入该行所在的位置。
- #include这行代码是一条C预处理器指令（preprocessor directive）。
- C编译器软件包都提供stdio.h文件。该文件中包含了供编译器使用的输入和输出函数（如，printf()）信息。该文件名的含义是标准输入/输出头文件。

```c
int main(void)
```

- C程序一定从main()函数开始执行（目前不必考虑例外的情况）。
- int是main()函数的返回类型。

```c
int num;
```

- 在函数中有一个名为num的变量（variable）。
- int表明num是一个整数（即，没有小数点或小数部分的数）。

数据类型：C语言可以处理多种类型的数据，如整数、字符和浮点数。把变量声明为整型或字符类型，计算机才能正确地存储、读取和解释数据。

变量命名：给变量命名时要使用有意义的变量名或标识符（如，程序中需要一个变量数羊，该变量名应该是sheep_count而不是x3）。如果变量名无法清楚地表达自身的用途，可在注释中进一步说明。这是一种良好的编程习惯和编程技巧。

变量命名规则：可以用小写字母、大写字母、数字和下划线（_）来命名。而且，名称的第1个字符必须是字母或下划线，不能是数字。

```c
#include<stdio.h>
void butler(void);  // 函数原型
int main(void) {
    printf("I will summon the butler function.\n");
    butler();
    printf("Yes. Bring me some tea and writeable DVDs. \n");

    return 0;
} 

void butler(void) {
    printf("You rang,sir?\n");
}
```

- 函数原型是一种声明形式，告知编译器正在使用某函数，因此函数原型也被称为函数声明（function declaration）。
