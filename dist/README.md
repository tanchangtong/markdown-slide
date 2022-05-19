# Markdown-Slide

[点击进入我们的展示网站](http://online-ppt-education.gitee.io/markdownslide)

##  介绍
Markdown-Slide 是借助于前端静态界面和浏览器功能创建的一个用于教育的快速自动编排幻灯片软件，类似于 PPT ，但它是在浏览器上展示的，可以查看在线的幻灯片，也可以打开本地的幻灯片进行展示。

在展示过程中，我们的项目使用浏览器作为平台，所以在各个设备上的呈现结果是一致的，并不会有格式混乱，字体乱码等问题。

在使用者编写文本的时候，我们采用了 [Markdown](https://baike.baidu.com/item/markdown/3245829?fr=aladdin) 作为编写幻灯片的基础语法。

![百度百科对于markdown的描述](https://cdn.jsdelivr.net/gh/KonghaYao/notuse/ppt/markdown-des.png)

上面是百度百科对于 Markdown 的描述。Markdown 被广泛用于编写项目说明，帮助文件，博客等文本文件。其最大的优势是将排版这一过程交给了解释 Markdown 的软件, 编写者可以只靠文本编辑器编写文件，而且完全不用担心排版的问题。

<br>

##  快速开始
在这一部分，我们将会编写一个 Markdown 用来渲染我们的在线 PPT。

### 第一步 —— 编写 Markdown 文件
您可以在一个 **.txt 文件** 中编写符合 markdown 语法的文件然后更改后缀名为 .md。

在编写的时候，由于排版原因，您可能需要在编写完成之后放置到我们的软件中进行查看，若不符合您的要求，则需要自己更改。

```markdown
# --- 划分页面 这是第一页

---

## 这是第二页

- - -

# 如果是 - - - 的话是竖直排列
```

您可以将上面这一段写入一个 .md 后缀名的文件中，然后拖拽上传。

[关于 Markdown 语法对应的详细渲染，请点击这里](http://online-ppt-education.gitee.io/markdownslide/show.html?file=https://cdn.jsdelivr.net/gh/KonghaYao/notuse/ppt/markdown.md)

[您可以在这里在线编辑哦](http://online-ppt-education.gitee.io/markdownslide)
### 第二步 —— 根据需要打包您的文件
- 可以直接进行展示的有 .md 后缀名的文件，但是若是这个文件中引入了本地的图片等多媒体文件，需要使用下面的方式引入
- 若是您需要导入本地的图片，可以将 .md　文件连同您的图片一起压缩为 .zip 格式，我们的软件可以自动解析并还原您打包内的图片文件。
- 若您拥有像 github 这样的代码仓库，可以直接使用 url 地址导入您的在线文件而不需要下载。

![使用本地 zip 文件](https://cdn.jsdelivr.net/gh/KonghaYao/notuse/ppt/zipfile.png)



### 第三步 —— 展示文件
我们的软件基于 Gitee Pages 页面进行操作，

我们的主页：[点击进入我们的展示网站](http://online-ppt-education.gitee.io/markdownslide)

[上传文件进行展示的网址](http://online-ppt-education.gitee.io/markdownslide/input.html)

您可以通过下面的方式载入。
 1. **使用 URL 展示。**
         http://online-ppt-education.gitee.io/markdownslide/show.html?file= `您的 URL`
    您的 URL 必须是 md 文件或 zip 文件。

    - 例子：http://online-ppt-education.gitee.io/markdownslide/show.html?file=https://cdn.jsdelivr.net/gh/KonghaYao/notuse/ppt/markdown.md

<br>

2. **使用上传的方式查看。**
    http://online-ppt-education.gitee.io/markdownslide/input.html
在我们的这个网站可以直接拖拽上传您的文件。


## 简单的幻灯片操作
1. 使用方向键更换幻灯片 
2. 在幻灯片打开的时候，按 f 键可以开关全屏状态。
3. 在幻灯片打开的时候，按 o 键可以开关预览模式


### 关于项目

感谢所有的开源插件的开发者，他们的成果为我们的项目提供了极大的帮助。


#### 项目依赖

- 整个项目基于 **[reveal.js](https://github.com/hakimel/reveal.js)** 提供的 api 进行文本转幻灯片的操作。
- 同时，我们使用了很好用的 **[weetalert2](https://github.com/sweetalert2/sweetalert2)** 作为通知插件。
- 我们的项目通过 [jsDelivr](http://www.jsdelivr.com/) 引入了相关的 js 和 css, 所有的插件通过这个网站提供的免费 api 载入。
- 我们将项目迁移到了 [Gitee](https://gitee.com/) 仓库中，并通过Gitee Pages 搭建了这个应用。



#### 项目的创新

- 原本 reveal.js 是不支持在线自动解析 Markdown 文本的，但是经过我们的努力，我们使用 HTML5 和 js Ajax 的特性，成功地将这个软件制作出来，使得我们的项目**可以通过网络 URL 或本地上传的方式注入您的幻灯片**。

详细见上面的加载方式

<br>

- reveal.js 原本是直接 “翻译” Markdown 文本作为幻灯片页面，但是我们通过 Javascript 和 css 扩充了**排版结构和问题选项**，若是未来有可能，我们将会扩充更加多的方便的扩展功能。


[详见我们的 Markdown 渲染语法](http://online-ppt-education.gitee.io/markdownslide/show.html?file=https://cdn.jsdelivr.net/gh/KonghaYao/notuse/ppt/markdown.md)

- 我们制作了一个用于查看渲染情况的编辑器，用于文本编辑，并直接将文本渲染为幻灯片。

[您可以在这里在线编辑哦](http://online-ppt-education.gitee.io/markdownslide)

