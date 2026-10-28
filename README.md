# Losanjos Studios — links

Link-in-bio da Losanjos Studios, de Wallace dos Anjos: <https://wallaceanjos.github.io/about/>

Dois cards cabem na primeira dobra (375×667), cada um como a tela de título de um jogo com o seu menu:

- **The System** — o app que transforma a sua rotina num jogo: Android (Google Play), iOS (em breve) e web.
- **Advento** — o MMORPG cristão em desenvolvimento: "Seja um colaborador" (a vaquinha) e o GDD.
- Redes e contato numa fileira de ícones abaixo.

Os links ficam em [`src/links.ts`](src/links.ts). As imagens ficam em `public/img/`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # tsc --noEmit
npm run build    # dist/ (base /about/)
```

O deploy é automático: todo push no `master` publica no GitHub Pages (`.github/workflows/pages.yml`).
