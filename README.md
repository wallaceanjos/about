# Losanjos Studios — links

Link-in-bio da Losanjos Studios, de Wallace dos Anjos: <https://wallaceanjos.github.io/about/>

- **The System** — o app que transforma a sua rotina num jogo (Google Play, web e, em breve, App Store).
- **Advento** — o MMORPG cristão em desenvolvimento, com o documento de design do jogo.
- Redes e contato.

Os links ficam em [`src/links.ts`](src/links.ts). As imagens ficam em `public/img/`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # tsc --noEmit
npm run build    # dist/ (base /about/)
```

O deploy é automático: todo push no `master` publica no GitHub Pages (`.github/workflows/pages.yml`).
