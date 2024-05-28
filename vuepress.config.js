import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import sidebar from "./sidebar.js";
import { resolve } from "path";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    title: "SweetRice 帮助文档",
    description: "解答疑惑，公开参数。",
    base: "/",
    lang: "zh-CN",
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    markdown: {
        lineNumbers: true,
    },
    theme: hopeTheme({
        favicon: "/images/logo.png",
        sidebar: sidebar,
        navbar: [
            {
                text: "主站",
                link: "https://www.pds.ink/",
            },
            {
                text: "文档",
                link: "/server",
            },
            {
                text: "玩家协议",
                link: "/rules",
            },
            {
                text: "附魔图鉴",
                link: "https://www.pds.ink/e",
            },
            {
                text: "创建/修改页面",
                link: "/contributing"
            }
        ],
        print: false,
        pure: true,
        repo: "SweetRiceMC/docs",
        docsDir: "docs",
        plugins: {
            activeHeaderLinks: true,
            nprogress: true,
        },
        lastUpdated: true,
        breadcrumb: false,
        pageInfo: false,
        nextLink: false,
        prevLink: false,
        search: true,
        searchMaxSuggestions: 10
    }),
    plugins: [
    ],
    bundler: viteBundler({
        viteOptions: {
            resolve: {
                alias: {
                    "@": resolve(__dirname, "docs"),
                },
            },
        },
        vuePluginOptions: {},
    }),
});
