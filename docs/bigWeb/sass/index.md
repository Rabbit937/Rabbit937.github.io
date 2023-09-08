# sass快速入门

## 声明变量

```scss
$highlight-color : #F90; 
```

当变量定义在css规则块内，那么该变量只能在此规则块内使用。

```scss
$nav-color : #F90;
nav {
    $width : 100px;
    width : $width;
    color : $nav-color;
}
```

声明在nav**内部的$width**没办法在其他地方使用，只能在内部使用

### 变量名用中划线还是下划线分隔

```scss
$link-color : blue;
a {
    color : $link_color;
}
```

`$link-color`和`$link_color`其实指向的是同一个变量。但是在sass中纯css部分不互通，比如类名、ID或属性名。

## 嵌套CSS规则

### 简单的嵌套

```scss
#content {
    article {
        h1 { color : #333; }
        p { margin-bottom : 1.4em;}
    }

    aside {background-color : #EEE;}
}

// 编译之后
#content article h1 { color : #333; }
#content article p { margin-bottom : 1.4em; }
#content aside { background-color : #EEE; }
```

### 父选择器的标识符&

为什么需要这个标识符？

```scss
    article a {
        color : blue;
        :hover { 
            color : red
        }
    }
```

这样的使用，会给a标签所有的子元素添加上hover伪类属性，而不是a标签本身。

正确的用法:

```scss
    article a {
        color : blue;
        &:hover { 
            color : red
        }
    }
```

当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是&被父选择器直接替换：

```scss
article a { color: blue }
article a:hover { color: red }
```

## 群组选择器的嵌套

```scss
.container  {
    h1, h2,h3 {margin-bottom : .8em}
}

// 编译后
.container h1, .container h2, .container h3 { margin-bottom: .8em }

nav, aside {
  a {color: blue}
}

// 编译后
nav a, aside a {color: blue}
```

## 子组合选择器和同层组合选择器：>、+和~

```scss
article section { margin: 5px }
article > section { border: 1px solid #ccc }
```

第一个选择器会选择article下的所有命中section选择器的元素。第二个选择器只会选择article下紧跟着的子元素中命中section选择器的元素。

同层相邻组合选择器+选择header元素后紧跟的p元素

```scss
header + p { font-size: 1.1em }
```

同层全体组合选择器~，选择所有跟在article后的同层article元素，不管它们之间隔了多少其他元素

```scss
article ~ article { border-top : 1px dashed #ccc;}
```

## 嵌套属性

```scss
nav {
    border {
        style : solid;
        width : 1px;
        color : #ccc;
    }
}

// 编译后
nav {
    border-style : solid;
    border-width : 1px;
    border-color : #ccc;
}
```

## 导入SASS文件

```scss
theme.scss    
$theme-color : rgb(31, 164, 216)

index.scss
@import "./theme.scss"

nav {
    background-color: $theme-color;
}
```

### 默认值变量

```scss
$fancybox-width : 400px !default;
.facybox {
    width : $fancybox-width;
}
```

在导入你的sass局部文件之前声明了一个`$fancybox-width`变量，那么你的局部文件中对`$fancybox-width`赋值400px的操作就无效。如果用户没有做这样的声明，则`$fancybox-width`将默认为400px。

### 静默注释

```scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /*这种注释内容会出现在生成的css文件中*/
}
```

## 混合器

```scss
@mixin rounded-corners {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

notice {
    background-color : green;
    border: 2px solid #00aa00; 
    @include rounded-corners;
}

// 编译后
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

混合器太好用了，一不小心你可能会过度使用。大量的重用可能会导致生成的样式表过大，导致加载缓慢。

### 混合器中的CSS规则

```scss
@mixin no-bullets {
    list-style:none;
    li { 
        list-style-image : none;
        list-style-type : none;
        margin-left : 0px;
    }
}


ul.plain {
    color : #444;
    @include no-bullets;
}

// 编译后
ul.plain {
    color : #444;
    list-style : none;
}

ul.plain li {
    list-style-image : none;
    list-style-type : none;
    margin-left : 0px;
}
```

### 给混合器传参

```scss
@mixin link-colors($normal,$hover,$visited) {
        color : $normal;
        &:hover {color : $hover;}
        &:visited { color : $visited;}
}

a {
    @include link-colors(blue,red,green)
}

// 第二种传值方式
a {
    @include link-colors({
        $normal : blue;
        $hover : red;
        $visited : green;
    })
}

// 编译后
a {color : blue;}
a:hover {color : red;}
a:visited { color : green;}
```

### 默认参数值

```scss
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}

a {
    @include link-colors(red)
}

// 编译后
a { color : red;}
a:hover { color : red;}
a:visited { color : red;}
```

## 使用选择器继承来精简CSS

```scss
.error{
    border : 1px solid red;
    background-color : #fdd;
}

.seriousError {
    @extend .error;
    border-width : 3px;
}

// 编译后
.seriousError {
    border-width : 3px;
}
.error,.seriousError{
    border : 1px solid red;
    background-color : #fdd;
}
```
