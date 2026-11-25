# news-image-20261125 — The World in One Picture

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/zhenggangnan33-lang/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/zhenggangnan33-lang/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

Sum up the world's news of **Wednesday 25 November 2026** in one image:
[make.fun/bounty/news-image-20261125](https://make.fun/bounty/news-image-20261125)

## The picture

A newspaper front page, 1024×1024, drawn from scratch with PIL
(`render.py`): one lead story, two featured stories and ten tiles —
13 stories in all.

- **Lead — Ukraine strikes at sea, twice.** Zelenskyy confirms drone
  attacks on a Russian cargo ship in the Gulf of Finland and a warship
  sunk off Benghazi, Libya. Moscow calls the strikes "terrorism".
- **COP31 collapses.** The UN climate summit in Antalya ends with no
  deal — the first failure since Copenhagen 2009.
- **Riyadh tower hit again.** A Houthi drone strikes the capital's
  tallest tower, wounding 11 — the second attack in under a week.
- Plus: Russian drones hit flats near Kyiv (11 killed); Sarkozy ordered
  to trial; Nvidia soars as Huang returns as CEO; Trump pardons the
  Thanksgiving turkeys; Nepal's PM ends an India visit; Gaza toll
  74,746; 266 million face acute hunger; England level the T20 series;
  12 "lost" coral species found on the Great Barrier Reef; Sweden votes
  on its prime minister.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The image is deterministic: rendering it twice
produces the same bytes. See `NEWS_SOURCES.md` for a source per story.

## License

MIT — see `LICENSE`.
