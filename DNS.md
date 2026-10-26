# lunchee.is – hosting

**Current setup (27.10.2026):** the domain lunchee.is is hosted on Natalia's SEOHOST server.
Every push to `main` uploads the site there automatically via `.github/workflows/deploy-seohost.yml` (FTPS),
once these 4 secrets exist in GitHub → Settings → Secrets and variables → Actions:

| Secret | What to put |
|---|---|
| `FTP_SERVER` | `h104.seohost.pl` (must end with seohost.pl – the server's certificate is *.seohost.pl) |
| `FTP_USERNAME` | `deploy@lunchee.is` |
| `FTP_PASSWORD` | FTP password |
| `FTP_SERVER_DIR` | `./` (the deploy@lunchee.is FTP account opens directly in the website folder) |

HTTPS: turn on the free SSL certificate (Let's Encrypt) for lunchee.is and www.lunchee.is in the SEOHOST panel.

The site is also still published on GitHub Pages as a test copy: https://mikchange20.github.io/lunchee-is/

---

## Alternative (not used): pointing the domain at GitHub Pages instead


Do this in the DNS panel of the lunchee.is domain (ISNIC or the reseller where it was bought).
Remove any existing A / AAAA records for `@` (the bare domain) and for `www` first.

| Type | Name / Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | mikchange20.github.io |

Changes can take from a few minutes up to 24 hours to work everywhere.

After the records are in, on GitHub: repo `lunchee-is` → Settings → Pages → Custom domain: `lunchee.is` → Save,
then tick **Enforce HTTPS** once it becomes available (the certificate can take up to an hour).

Email (info@lunchee.is) needs its own records (MX etc.) from the email provider, e.g. Google Workspace –
add them in the same panel; they don't affect the website records above.
