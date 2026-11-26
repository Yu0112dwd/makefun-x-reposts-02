# Get the most reposts and likes on make.fun's newest X posts

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Rank](https://make.fun/badge/makefun-x-reposts-02/Yu0112dwd/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Reward](https://make.fun/badge/makefun-x-reposts-02/Yu0112dwd/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for the [make.fun bounty "Get the most reposts and likes on make.fun's newest X posts"](https://make.fun/bounty/makefun-x-reposts-02) — $500 over 50 places, deadline 2026-11-28 16:30 JST.

## What the entry is

The entry is my own posts on X, each one a quote of, or a direct reply to, a
different post of make.fun's pool (@makefunai posts from
https://x.com/makefunai/status/2125053632605196760 on), all from one public
X account. Each post's own words carry make.fun and/or @makefunai plus my
make.fun play code. Places go by the score: 2 points per repost, 2 per quote,
1 per like, summed over all my posts as the house reads them at the deadline.

The drafts are in [posts.md](posts.md). Post each one from the public X
account, then put the posts' addresses in `POSTS.json`.

## Files

- `main.ts` — Node 22, standard library only. Copies `POSTS.json` to
  `/output/POSTS.json`. That is all the program does; nothing it writes is scored.
- `POSTS.json` — the list of my X posts' addresses, `{"posts": [...]}`.
  Replace the placeholder with the real addresses after posting (up to 15).
- `posts.md` — the drafted post texts, one per pool post, with how to post each.
- `AGENT.md` — the task in one page.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Run it twice: both runs write the same bytes.
