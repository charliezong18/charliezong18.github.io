# charliezong18.github.io

根域仓。存在的理由只有一个：`.well-known/apple-app-site-association`——门下 iOS App 的
Universal Links 需要 AASA 挂在根域（menxia-ios 仓 aasa-staging/ 有实验序说明；SPEC §8.3 M1 闸门）。
根路径重定向到 /menxia/。别在这仓里放别的东西。

**2026-10-19 起门下迁到 `https://menxia-reader.github.io/menxia/`**（独立 org，origin 隔离，Q10）。
本仓接管旧址：`menxia/index.html` 带 query+hash 转新站；`404.html` 把 `/menxia/<子路径>` 原样转过去；
`menxia/menxia-sw-kill.json` 让旧源上残留的 Service Worker 自毁。旧 AASA 保留（iOS 过渡期两个域都认）。
