
![Hanjst](https://ufqi.com/dev/hanjst/hanjst-logo.201901.PNG)


# 🙋Hanjst
Han JavaScript Template Language and Engine

.

Han is the surname of my wife, and one of the given names of my daughter and son.

Han is also Chinese in Pinyin, Hànrén.

🙋Hanjst is intentionally designed to stop further "Reinventing the wheel" for HTML template engines though it sounds ridiculous.

.

## Introduction

Hanjst is a JavaScript-based template language and its engine runs on client-side and/or server-side.

Hanjst can be written with logic expressions and it provides many similar powerful functions with backend templates.


### Features

+ Hanjst's Runtime in client-side, reduce computing render in server-side;

+ Hanjst is Language-independent, not-bound with backend scripts/languages;

+ Totally-isolated between MVC, data transfer with JSON;

+ Full-support template tags with built-in logic and customerized JavaScript functions;

+ No more tags languages to be learned, just JavaScript;

+ ....


### Installation

Put these codes at the end of &lt;body>, i.e. the last element of &lt;body>:

#### Single sentence

```html

<script type="text/javascript" src="Hanjst.js" async></script>

```

#### Full sentences

```javascript

<!-- other Hanjst template sentences -->

<div id="Hanjstjsondata">
{
	"newslist":[
		{"title":"Runtime in client-side, reduce computing render in server-side;", "href":"#f1"},
		{"title":"Language-independent, not-bound with backend scripts/languages;", "href":"#f2"},
		{"title":"Totally-isolated between MVC, data transfer with JSON;", "href":"#f3"}
	],
	"copyright_year": 2018
}
</div>

<!-- Hanjst codes begin -->
<script type="text/javascript" async>
    window.Hanjst = {'JsonDataId':'Hanjstjsondata', 'IsDebug': true}; // optional
</script>
<script type="text/javascript" src="Hanjst.js" async></script>
<noscript>JavaScript Required for Hanjst.</noscript>
<!-- Hanjst codes end -->

</body>

<!-- other html sentences-->

</html>

```


### Simple Demo

Hanjst will be invoked by ***window.onload*** and the template sentences will be parsed automatically.

The target result page body will be refreshed and presented with interpreted contents.

Here is a few of short paragraphs written in Hanjst. 

```html

Features:
<div id="mynewscontentlist">
{foreach $newslist as $page}
    <ul>
        <li>
            <a href="{$newslist[$page]['href']}">{$newslist[$page]['title']}</a>
            {if $newslist[$page]['title'].length > 20}
                Length is too long.
            {else}
                Length is okay.
            {/if}
        </li>
    </ul>
{foreachelse}
	<ul><li>No Data.</li></ul>
{/foreach}
</div>

```

```html

Try to list an associative list:
<div id="anotherlistdiv">
{for var $k in $userlist}
    <li>
        Id: {$userlist[$k]['id']}, 
        Name: {$userlist[$k]['name'].substring(0, 20)}
    </li>
{forelse}
	<li>No User.</li>
{/for}
</div>

```

```html

Give random numbers:
<div id="randnum"> 
{$i=0}
{while $i<5}
    <li> 
        line {$i} 
    </li>
	{$i++}
{whileelse}
	<li>No Random Number.</li>
{/while}

</div>


```

```html
Try to be embedded in a html element:
<p>
    <a href="#atag"{if $user['feedback'] eq "fb2"} class="fb2class"{/if}>
        This is a href.
    </a>
</p>

```


### Live Demo Page
-R/j2SP 

[Hanjst Online Demo](https://ufqi.com/dev/hanjst/Hanjst.demo.html)

### Online Document and API

[Hanjst Document and API](https://wadelau.github.io/hanjst/index)

### Hanjst Blog

[Hanjst Blog](https://ufqi.com/blog/category/hanjst/)


---

---

![Hanjst](https://ufqi.com/dev/hanjst/hanjst-logo.201901.PNG)



# 🙋汉吉斯特（Hanjst）
Han JavaScript 模板语言及引擎

.

Han 是我妻子的姓(韩), 也是出现我女儿和儿子名字中的音节。

Han 也是中文“汉族”的意思。

🙋Hanjst设计用来终止在HTML模板语言领域不断地“再造轮子”的活动，尽管这听起来有些怪异。

.

## 介绍

🙋Hanjst是一种基于JavaScript的模板语言及解析引擎，她运行在客户端/服务器端。

Hanjst能够表述逻辑控制，能够实现与服务器端模块语言相同的功能。

.

### 特征/功能

+ Hanjst当完全在客户端解析时，节省服务器端计算资源;

+ Hanjst模板语言独立，不与服务器端资源做任何绑定；

+ 纯粹的MVC，层间数据用JSON格式传递；

+ 常见模板语言功能全支持，附带复杂而强大的JavaScript编程能力；

+ 无学习成本，直接使用JavaScript书写模板语言；

+ ....


### 安装及调用

#### 简单安装

将下述代码段放置于HTML页面的 body 元素中，通常位于 body 的结束符前， &lt;/body> .

```javascript

<!-- other Hanjst template sentences -->

<div id="Hanjstjsondata">
{
	"newslist":[
		{"title":"客户端解析，节省服务器端计算资源;", "href":"#f1"},
		{"title":"模板语言独立，不与服务器端资源做任何绑定;", "href":"#f2"},
		{"title":"纯粹的MVC，层间数据用JSON格式传递;", "href":"#f3"}
	],
	"copyright_year": 2018
}
</div>

<!-- Hanjst codes begin -->
<script type="text/javascript" async>
    window.Hanjst = {'JsonDataId':'Hanjstjsondata', 'IsDebug': true}; // 可选的
</script>
<script type="text/javascript" src="Hanjst.js" async></script>
<noscript>JavaScript Required for Hanjst.</noscript>
<!-- Hanjst codes end -->

</body>

<!-- other html sentences-->

</html>

```

#### NodeJS下安装（需要 node 环境）

`
npm install

or

yarn
`

#### NPM编译打包

`
npm run build

or

yarn build
`

压缩过后的框架代码输出在 dist 目录下.


### 简单示例

Hanjst在HTML页面加载时被 ***window.onload*** 自动调用。模板语句会被自动解析，结果页面内容会被自动刷新到 body 元素上.

下面是一些 Hanjst 的示例代码。

(参见英文版部分)

.

### 在线实例
-R/j2SP 

[Hanjst Online Demo](https://ufqi.com/dev/hanjst/Hanjst.demo.html)

### Hanjst 在线文档和API

### Online Document and API

[Hanjst在线文档和API](https://wadelau.github.io/hanjst/index)

### Hanjst Blog 汉吉斯特博客

[Hanjst Blog 汉吉斯特博客](https://ufqi.com/blog/category/hanjst/)



