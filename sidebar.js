const sidebar = {
    "/server": [
        {
            text: "介绍",
            link: '/server'
        },
        {
            text: "基础",
            children: [
                "/server/basic/login",
                "/server/basic/commands",
                "/server/basic/skin",
                "/server/basic/res",
                "/server/basic/faq",
                "/server/hardware"
            ]
        },
        {
            text: "游戏内容",
            children: [
                "/server/play/upgrade",
                "/server/play/cuilian",
                "/server/play/baptism",
                "/server/play/map",
                "/server/play/farm",
                "/server/play/settings",
                "/server/play/query"
            ]
        },
        {
            text: "玩家协议",
            link: '/rules'
        }
    ],
    "/dev": [
        {
            text: "ID列表",
            link: "/dev/ids"
        }
    ],
    "/": [
        {
            text: "贡献文档",
            link: '/contributing'
        }
    ]
};

export default sidebar;
