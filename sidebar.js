const sidebar = {
    "/": [
        {
            text: "玩家协议/服务器规则",
            link: "/rules"
        },
        {
            text: "封禁&处罚通告",
            link: "/server/banned"
        },
        
        { // start 了解甜米
            text: "📌 了解甜米",
            collapsible: true,
            children: [
                "/server",
                "/server/history",
                "/server/tale",
                "/server/hardware"
            ]
        }, // end 了解甜米

        { // start 初入甜米
            text: "🔆 初入甜米",
            collapsible: true,
            prefix: "/server/basic/",
            children: [
                "newbie",
                "gift",
                "premium",
                "qqbind",
                "title",
                "coins",
                "commands",
                "skin",
                "res",
                "faq",
            ]
        }, // end 初入甜米

        { // start 菜单
            text: "🛄 菜单",
            collapsible: true,
            prefix: "/server/menu/",
            children: [
                "", // README.md
                "pets",

                { // start 传送/世界介绍
                    text: "🌐 传送/世界介绍",
                    collapsible: true,
                    prefix: "worlds/",
                    children: [
                        "", // README.md
                        "resource",
                        "warp",
                        "living",
                        "mining",
                        "redstone",
                        "plot",
                        "crate",
                    ]
                }, // end 传送/世界介绍

                { // start 商店
                    text: "🏚 商店",
                    collapsible: true,
                    prefix: "shop/",
                    children: [
                        "", // README.md
                        "global",
                        "vanilla",
                        "furniture",
                        "leaf",
                        "vip",
                        "disc",
                        "official",
                        "cosmetic",
                    ]
                }, // end 商店
                
                "guilds",

                { // start 副本
                    text: "🛡 副本",
                    collapsible: true,
                    prefix: "rpg/",
                    children: [
                        "", // README.md

                        { // start 试炼之门
                            text: "👾 试炼之门",
                            collapsible: true,
                            prefix: "train/",
                            children: [
                                "", // README.md
                                "items",
                                "1-1",
                                "1-2",
                                "1-3",
                                "1-4",
                                "1-5",
                                "1-6",
                                "2-1",
                            ]
                        }, // end 试炼之门

                        { // start 活动副本
                            text: "🎊 活动副本",
                            collapsible: true,
                            prefix: "events/",
                            children: [
                                "", // README.md
                            ]
                        }, // end 活动副本

                        "lost"
                    ]
                }, // end 副本

                "spawn",

                { // start 日常
                    text: "🖼 日常",
                    collapsible: true,
                    prefix: "daily/",
                    children: [
                        "", // README.md
                        "online",
                        "tasks",
                        "sign",
                        "achievements"
                    ]
                }, // end 日常

                { // start 常用功能
                    text: "💻 常用功能",
                    collapsible: true,
                    prefix: "func/",
                    children: [
                        "", // README.md
                        "settings"
                    ]
                }, // end 常用功能

            ]
        }, // end 菜单

        {
            text: "📒 高级附魔",
            collapsible: true,
            prefix: "/server/enchantment/",
            children: [
                "", //README.md
                "baptism",
            ]
        },

        { // start RPG玩法介绍
            text: "🗡RPG玩法介绍",
            collapsible: true,
            prefix: "/server/rpg/",
            children: [
                "", // README.md
                "cuilian",

                { // start 锻造系统
                    text: "🕋 锻造系统",
                    collapsible: true,
                    prefix: "table/",
                    children: [
                        "", // README.md

                        { // start 锻造
                            text: "🔨 锻造",
                            collapsible: true,
                            prefix: "forge/",
                            children: [
                                "", // README.md

                                { // start 升级材料
                                    text: "💫 升级材料",
                                    collapsible: true,
                                    prefix: "upgrade/",
                                    children: [
                                        "", // README.md
                                        "初级升级石",
                                        "中级升级石",
                                        "高级升级石",
                                        "史诗升级石",
                                        "强化精铁锭",
                                        "强化幻影锭",
                                        "强化辉光石",
                                        "强化暗夜水晶"
                                    ]
                                }, // end 升级材料

                                { // start 宝箱钥匙
                                    text: "🗝宝箱钥匙",
                                    collapsible: true,
                                    prefix: "keys/",
                                    children: [
                                        "", // README.md
                                        "深层探索钥匙",
                                        "无限钥匙",
                                        "幻兽契约",
                                        "爱神钥匙"
                                    ]
                                }, // end 宝箱钥匙

                                { // start 材料
                                    text: "📦 材料",
                                    collapsible: true,
                                    prefix: "material/",
                                    children: [
                                        "", // README.md
                                        "普通强化锤",
                                        "锻造铁板",
                                        "不凡粘液锭",
                                        "黯灭神铁",
                                        "火焰宝石",
                                        "精铁锭",
                                        "幻影锭",
                                        "辉光粒",
                                        "辉光石",
                                        "暗夜锭",
                                        "金刚锭",
                                        "暗夜水晶颗粒"
                                    ]
                                }, // end 材料

                                { // start 武器/工具
                                    text: "⚔ 武器/工具",
                                    collapsible: true,
                                    prefix: "weapon/",
                                    children: [
                                        "", // README.md
                                        "坠陨之弓1"
                                    ]
                                }, // end 武器/工具

                                { // start 防具
                                    text: "🔰 防具",
                                    collapsible: true,
                                    prefix: "armor/",
                                    children: [
                                        "", // README.md
                                        "t0-1",
                                        "t1-1",
                                        "t2-1",
                                        "t2-2"
                                    ]
                                }, // end 防具

                            ]
                        }, // end 锻造

                        "recount",
                        "upgrade"
                    ]
                } // end 锻造系统

            ]
        }, // end RPG玩法介绍
        
        { // start 游戏内容
            text: "🕹 游戏内容",
            collapsible: true,
            prefix: "/server/play/",
            children: [
                "map",
                "farm",
                "brewery",
                "query",
                "shop",
                "lock"
            ]
        }, // end 游戏内容

        { // start 活动
            text: "🎉 活动",
            prefix: "/server/events/",
            children: [
                "20240520",
                "20240515"
            ]
        }, // end 活动

        "/server/update_logs",
        "/server/guide",
        "/contributing",
        "/markdown"
    ],
    "/dev": [
        {
            text: "ID列表",
            link: "/dev/ids"
        }
    ]
};

export default sidebar;
