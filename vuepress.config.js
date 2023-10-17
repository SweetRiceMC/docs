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
        ],
        print: false,
        pure: false,
        repo: "SweetRiceMC/docs",
        docsDir: "docs",
        plugins: {
            activeHeaderLinks: true,
            nprogress: true,
        },
        lastUpdated: false,
        breadcrumb: false,
        pageInfo: false,
        nextLinks: false,
        prevLinks: false,
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
