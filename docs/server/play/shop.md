---
title: "📦箱子商店"
---

# 箱子商店

约定俗成的基础商店系统，玩家之间金币流通的主要渠道。

# 创建商店

手持需要出售/收购的物品，`鼠标左键`点击以下任意一种类型的方块
+ 箱子
+ 陷阱箱
+ 木桶 *(新增)*

点击后，聊天栏会出现提示，此时在聊天中发送`价格`即可创建商店。

::: tip 示例
我想要出售钻石，定价为45金币。  
首先，我需要手持钻石，`鼠标左键`点击我面前的箱子，  
然后按`T`键(默认)打开聊天栏，输入`45`，按回车键`Enter`发送到聊天栏。
商店就创建好啦！
:::

# 收购商店

商店创建完成之后，默认是`出售商店`。  
如果需要把商店改为`收购商店`，可以使用以下其中一种方法
+ 右键点击牌子，然后打开聊天栏，鼠标点击商店类型进行修改
+ 准星对准商店牌子，然后输入命令 `/qs buy` 修改商店类型

# 出售商店

商店创建完成之后，默认是`出售商店`。  
如果需要把商店改为`出售商店`，可以使用以下其中一种方法
+ 右键点击牌子，然后打开聊天栏，鼠标点击商店类型进行修改
+ 准星对准商店牌子，然后输入命令 `/qs sell` 修改商店类型

# 商店助手

一个人管理商店(主要是补货)是不是太吃力了？  
想让你最好的朋友帮你补货吗？  
你可以使用商店助手功能，让其他人拥有商店权限，可打开商店箱子进行补货。

准星对准商店牌子，然后输入命令
+ `/qs staff add 玩家名` 添加商店助手
+ `/qs staff del 玩家名` 移除商店助手
+ `/qs staff list` 查看商店助手列表
+ `/qs staff clear` 移除所有商店助手

一个一个商店添加或移除商店助手太麻烦了？那么请接着往下看

我们需要一个`铁砧`和一支`箭`。
打开`铁砧`界面，将`箭`放在第一格，将其改名为
+ `staff add 玩家名`，改名后，手持箭左键点击商店，即可**添加**商店助手
+ `staff remove 玩家名`，改名后，手持箭左键点击商店，即可**移除**商店助手
+ `staff clear`，改名后，手持箭左键点击商店，即可**移除所有**商店助手

# 领地联动

在其他服务器，`领地 Residence` 和 `箱子商店 QuickShop` 的冲突经常困扰着我。  
在刷怪塔或者其他什么的场所，或许你想要给玩家开放容器权限，甚至是建筑权限，但这样一来玩家就可以在容器上面新建箱子商店了，你作为领地主却不能拆除玩家创建的商店。

我们为领地添加了 `quickshop` 权限，将其关闭，无权限的玩家将无法在领地内新建箱子商店。