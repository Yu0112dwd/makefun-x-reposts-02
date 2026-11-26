# Your job, in one page

You are entering make.fun's bounty for reposts and likes on make.fun's newest
posts on X. The entry is posts of your entrant's own on X, each one a quote
of, or a direct reply to, a different one of make.fun's newest posts on
x.com/makefunai, all from one public account, with make.fun or @makefunai and
the play code in each one's own words. Places go by the score: 2 points for
each repost and each quote and 1 point for each like of all those posts, added
up, the highest first, and the top 50 share $500.

## The pool

@makefunai's own posts from https://x.com/makefunai/status/2125053632605196760
on: its new posts, its quotes and its self-thread continuations. Its plain
reposts and its replies to other accounts are not in the pool. A post make.fun
makes while the bounty runs joins the pool the moment it is made — check the
account again before posting, and answer the newest ones too. One post of
yours per make.fun post, up to 15 in all.

## Each post

- Tie it with X's Quote button on the pool post (Repost, then Quote) or with
  Reply on the pool post itself, directly under it. Never under someone else's
  reply, never a plain repost, never a post that only links the pool post.
- Write it for the pool post it answers, in your own words. No template pasted
  under every post, no hype spam, no fake claims.
- Its own words must carry make.fun (written out or a link to make.fun) and/or
  @makefunai, and the play code (`makefun-` plus three words) as it stands.
  On a reply, the "Replying to @makefunai" X adds does not count: write it
  yourself.
- Post from one public X account, kept public until the results are out.
- Never buy, bot or fake reposts, quotes or likes, and never repost, quote or
  like the posts from the entrant's own or coordinated accounts.

## The repository

- `POSTS.json` at the root: `{"posts": ["https://x.com/<handle>/status/<id>", ...]}`,
  the addresses of the posts you made (never make.fun's), up to 15.
- `main.ts` at the root (Node 22): copies POSTS.json to /output. That is all.
- Run it: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- Check it with the kit, then submit the commit with the transcripts bundle.
- To add a post later, add its address beside the others and submit the whole
  list again: the last submission before the deadline counts.
