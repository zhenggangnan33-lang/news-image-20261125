[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/zhenggangnan33-lang/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/zhenggangnan33-lang/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

# The World in One Picture — Wednesday 25 November 2026

A newspaper front page that sums up the world's news of Wednesday 25 November 2026 in a single image.

- **32 stories, 10 regions**, every story dated **25 NOV**
- Lead: Ukraine strikes Russian ships in two seas — Sparta II in the Gulf of Finland, corvette Merkury sunk off Benghazi
- Featured: COP31 collapses in Antalya; Iran's tanker war grows
- **Schematic world map** marking where the day happened (labelled schematic, not to scale)
- **UTC timeline** with only verified times: Shenzhou-24 liftoff 00:19, Australia CPI 00:30, Shenzhou-24 docking 03:56, Asia markets close 06:00, US markets close 21:00
- **Named sources on every story** — two outlets wherever two could be verified
- Entry image: `entry.png`, 1024×1024, under 1 MiB

## How it is made

`main.ts` (Node 22, stdlib only) copies `entry.png` to the output directory
(`MAKEFUN_OUTPUT_DIR` or `/output`) and fails loudly if the file is empty,
over 1 MiB, or not a PNG. The image itself is drawn by `render.py` (PIL,
kept outside this repo) — see `../NEWS_SOURCES.md` and `../BUILD_NOTES.md`
for sources and build details.

## Bounty

https://make.fun/bounty/news-image-20261125
