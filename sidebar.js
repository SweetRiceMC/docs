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
                "/server/basic/skin"
            ]
        },
        {
            text: "游戏内容",
            children: [
                "/server/play/upgrade",
                "/server/play/cuilian",
                "/server/play/baptism"
            ]
        },
        {
            text: "玩家协议",
            link: '/rules'
        }
    ],
};

export default sidebar;
