# uptimerobot-cloudflare-workers

First project on JS. Free replacement of VPS with nginx. Free custom domain solution for uptimerobot service.

More (main) examples for cloudflare workers [here](https://developers.cloudflare.com/workers/examples).

## DNS configuration
One line - one magic.

| Type  | Name    | Content | TTL  | Proxy status |
| ----- | --------| ------- | ---- | ------------ |
| AAAA  | status  | 100::   | 60   | Enabled      |
