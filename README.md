# news-image-20261125 — The World in One Picture (v2)

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/zhenggangnan33-lang/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/zhenggangnan33-lang/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

Sum up the world's news of **Wednesday 25 November 2026** in one image:
[make.fun/bounty/news-image-20261125](https://make.fun/bounty/news-image-20261125)

## The picture

A newspaper front page, 1024×1024, drawn from scratch with PIL
(`render.py`): one lead story, two featured stories and thirty
illustrated tiles — **33 stories in all**, across ten regions, every
one dated 25 November 2026.

- **Lead — Ukraine strikes at sea, twice.** Zelenskyy confirms drone
  attacks on a Russian cargo ship in the Gulf of Finland and a warship
  sunk off Benghazi, Libya. Moscow calls the strikes "terrorism".
- **COP31 collapses.** The UN climate summit in Antalya ends with no
  deal — the first failure since Copenhagen 2009.
- **Iran's tanker war grows.** 25 tankers hit near Hormuz in a week;
  Iran says it struck US radars in Bahrain and will test the blockade.
- Plus: Houthi strikes on Riyadh and threats to Jeddah; Russian drones
  hit Kyiv flats; Moscow warns Estonia; Sarkozy ordered to trial;
  Sweden votes on its PM; China probes a Politburo member; the
  Australia–Solomon Islands pact; Eisenkot's first coalition deal;
  Gaza toll 74,746; 266 million face acute hunger; Nepal–India joint
  statement; the reef's lost corals; the oldest quasar; Shenzhou-24;
  England level the T20 series; Suryavanshi's 204; Nvidia's fading
  rally; Asia's tariff sell-off; Trump's Ecuador pause and turkey
  pardon; Abrego Garcia leaves; the Iowa blast; Iran ship hacks;
  El Chapo Isidro to trial; Microsoft's "Code Red"; US confidence at
  a two-year high; Australian inflation; Bitcoin at $59,257.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`, failing loudly if the copy is empty or over
1 MiB. The image is deterministic: rendering it twice produces the
same bytes. See `NEWS_SOURCES.md` for a source per story.

## License

MIT — see `LICENSE`.
