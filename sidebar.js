const sidebar = {
    "/": [
        {
            text: "玩家协议/服务器规则",
            link: '/rules'
        },
        {
            text: "封禁&处罚通告",
            link: '/server/banned'
        },
        
        { // start 了解甜米
            text: "了解甜米",
            collapsible: true,
            children: [
                '/server',
                '/server/history',
                '/server/tale',
                "/server/hardware"
            ]
        }, // end 了解甜米

        { // start 初入甜米
            text: "初入甜米",
            collapsible: true,
            children: [
                "/server/basic/newbie",
                "/server/basic/gift",
                "/server/basic/premium",
                "/server/basic/qqbind",
                "/server/basic/title",
                "/server/basic/coins",
                "/server/basic/commands",
                "/server/basic/skin",
                "/server/basic/res",
                "/server/basic/faq"
            ]
        }, // end 初入甜米

        { // start 菜单
            text: "菜单",
            collapsible: true,
            link: '/server/menu',
            children: [
                '/server/menu/pets',

                { // start 传送/世界介绍
                    text: "传送/世界介绍",
                    collapsible: true,
                    link: '/server/menu/worlds',
                    children: [
                        '/server/menu/worlds/resource',
                        '/server/menu/worlds/warp',
                        '/server/menu/worlds/living',
                        '/server/menu/worlds/mining',
                        '/server/menu/worlds/redstone',
                        '/server/menu/worlds/plot',
                        '/server/menu/worlds/crate'
                    ]
                }, // end 传送/世界介绍

                { // start 商店
                    text: "商店",
                    collapsible: true,
                    link: '/server/menu/shop',
                    children: [
                        '/server/menu/shop/global',
                        '/server/menu/shop/vanilla',
                        '/server/menu/shop/furniture',
                        '/server/menu/shop/leaf',
                        '/server/menu/shop/vip',
                        '/server/menu/shop/disc',
                        '/server/menu/shop/official',
                        '/server/menu/shop/cosmetic'
                    ]
                }, // end 商店
                
                '/server/menu/guilds',

                { // start 副本
                    text: "副本",
                    collapsible: true,
                    link: '/server/menu/rpg',
                    children: [
                        { // start 试炼之门
                            text: "试炼之门",
                            collapsible: true,
                            link: '/server/menu/rpg/train',
                            children: [
                                '/server/menu/rpg/train/items',
                                '/server/menu/rpg/train/1-1',
                                '/server/menu/rpg/train/1-2',
                                '/server/menu/rpg/train/1-3',
                                '/server/menu/rpg/train/1-4',
                                '/server/menu/rpg/train/1-5',
                                '/server/menu/rpg/train/1-6',
                                '/server/menu/rpg/train/2-1'
                            ]
                        }, // end 试炼之门

                        { // start 活动副本
                            text: "活动副本",
                            collapsible: true,
                            link: '/server/menu/rpg/events'
                        }, // end 活动副本

                        '/server/menu/rpg/lost'
                    ]
                }, // end 副本

                '/server/menu/spawn',

                { // start 日常
                    text: "日常",
                    collapsible: true,
                    link: '/server/menu/daily',
                    children: [
                        '/server/menu/daily/online',
                        '/server/menu/daily/tasks',
                        '/server/menu/daily/sign',
                        '/server/menu/daily/achievements'
                    ]
                }, // end 日常

                { // start 常用功能
                    text: "常用功能",
                    collapsible: true,
                    link: '/server/menu/func',
                    children: [
                        '/server/menu/func/settings'
                    ]
                }, // end 常用功能

            ]
        }, // end 菜单

        {
            text: "高级附魔",
            collapsible: true,
            children: [
                "/server/enchantment/baptism",
            ]
        },

        { // start RPG玩法介绍
            text: "RPG玩法介绍",
            collapsible: true,
            children: [
                "/server/rpg/cuilian",

                { // start 锻造系统
                    text: "锻造系统",
                    collapsible: true,
                    link: "/server/rpg/table",
                    children: [

                        { // start 锻造
                            text: "锻造",
                            collapsible: true,
                            link: "/server/rpg/table/forge",
                            children: [

                                { // start 升级材料
                                    text: "升级材料",
                                    collapsible: true,
                                    link: "/server/rpg/table/forge/upgrade",
                                    children: [
                                        "/server/rpg/table/forge/upgrade/初级升级石",
                                        "/server/rpg/table/forge/upgrade/中级升级石",
                                        "/server/rpg/table/forge/upgrade/高级升级石",
                                        "/server/rpg/table/forge/upgrade/史诗升级石",
                                        "/server/rpg/table/forge/upgrade/强化精铁锭",
                                        "/server/rpg/table/forge/upgrade/强化幻影锭",
                                        "/server/rpg/table/forge/upgrade/强化辉光石",
                                        "/server/rpg/table/forge/upgrade/强化暗夜水晶"
                                    ]
                                }, // end 升级材料

                                { // start 宝箱钥匙
                                    text: "宝箱钥匙",
                                    collapsible: true,
                                    link: "/server/rpg/table/forge/keys",
                                    children: [
                                        "/server/rpg/table/forge/keys/深层探索钥匙",
                                        "/server/rpg/table/forge/keys/无限钥匙",
                                        "/server/rpg/table/forge/keys/幻兽契约",
                                        "/server/rpg/table/forge/keys/爱神钥匙"
                                    ]
                                }, // end 宝箱钥匙

                                { // start 材料
                                    text: "材料",
                                    collapsible: true,
                                    link: "/server/rpg/table/forge/material",
                                    children: [
                                        "/server/rpg/table/forge/material/普通强化锤",
                                        "/server/rpg/table/forge/material/锻造铁板",
                                        "/server/rpg/table/forge/material/不凡粘液锭",
                                        "/server/rpg/table/forge/material/黯灭神铁",
                                        "/server/rpg/table/forge/material/火焰宝石",
                                        "/server/rpg/table/forge/material/精铁锭",
                                        "/server/rpg/table/forge/material/幻影锭",
                                        "/server/rpg/table/forge/material/辉光粒",
                                        "/server/rpg/table/forge/material/辉光石",
                                        "/server/rpg/table/forge/material/暗夜锭",
                                        "/server/rpg/table/forge/material/金刚锭",
                                        "/server/rpg/table/forge/material/暗夜水晶颗粒"
                                    ]
                                }, // end 材料

                                { // start 武器/工具
                                    text: "武器/工具",
                                    collapsible: true,
                                    link: "/server/rpg/table/forge/weapon",
                                    children: [
                                        "/server/rpg/table/forge/weapon/坠陨之弓1"
                                    ]
                                }, // end 武器/工具

                                { // start 防具
                                    text: "防具",
                                    collapsible: true,
                                    link: "/server/rpg/table/forge/armor",
                                    children: [
                                        "/server/rpg/table/forge/armor/t0-1",
                                        "/server/rpg/table/forge/armor/t1-1",
                                        "/server/rpg/table/forge/armor/t2-1",
                                        "/server/rpg/table/forge/armor/t2-2"
                                    ]
                                }, // end 防具

                            ]
                        }, // end 锻造

                        '/server/rpg/table/recount',
                        '/server/rpg/table/upgrade'
                    ]
                } // end 锻造系统

            ]
        }, // end RPG玩法介绍
        
        { // start 游戏内容
            text: "游戏内容",
            collapsible: true,
            children: [
                "/server/play/map",
                "/server/play/farm",
                "/server/play/brewery",
                "/server/play/query"
            ]
        }, // end 游戏内容

        { // start 活动
            text: "活动",
            link: "/server/events",
            children: [
                "/server/events/20240520",
                "/server/events/20240515"
            ]
        }, // end 活动

        '/server/update_logs',
        '/server/guide',
        {
            text: "贡献文档",
            link: '/contributing'
        }
    ],
    "/dev": [
        {
            text: "ID列表",
            link: "/dev/ids"
        }
    ]
};

export default sidebar;
