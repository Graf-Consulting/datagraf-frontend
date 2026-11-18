# Nativ — Frontend

Brazilian Infrastructure Technical Room

Plataforma da GRAF para análise de dados públicos de infraestrutura e simulação de transporte
multimodal. Este repositório é o frontend em Next.js, que substitui gradualmente a primeira versão
em Streamlit (ODSim, MatMaker e Data Extractor, hoje em `data-dev.grafconsulting.com.br`).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3**, framer-motion e lucide-react
- **Supabase Auth** para login (Google e Microsoft) e, futuramente, roles de usuário
- Deploy na **Vercel**

Os dados de negócio virão de uma API própria (e do GeoServer, no caso do simulador). Por enquanto,
o conteúdo das páginas é estático.

## Rodando localmente

Requisitos: Node 22 e npm.

```bash
npm install
cp .env.example .env.local   # preencha com as chaves do projeto Supabase
npm run dev                  # http://localhost:3000
```

Para o login funcionar localmente, o projeto Supabase precisa ter os providers Google e Azure
habilitados e `http://localhost:3000/auth/callback` na lista de Redirect URLs.

| Variável                               | Descrição                              |
| -------------------------------------- | -------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`             | URL do projeto Supabase                |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Chave pública (publishable) do projeto |

## Scripts

| Comando                | O que faz                                  |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Servidor de desenvolvimento                |
| `npm run build`        | Build de produção                          |
| `npm run start`        | Sobe o build de produção                   |
| `npm run lint`         | ESLint                                     |
| `npm run format`       | Formata o código com Prettier              |
| `npm run format:check` | Verifica a formatação sem alterar arquivos |

## Rotas

| Rota                                                                    | Acesso  | Observação                                  |
| ----------------------------------------------------------------------- | ------- | ------------------------------------------- |
| `/`                                                                     | Público | Landing; usuário logado vai para `/hub`     |
| `/analises`, `/analises/[slug]`, `/insights`                            | Público | Painéis e relatórios                        |
| `/login`, `/auth/callback`                                              | Público | Login OAuth                                 |
| `/hub`, `/odsim/*`, `/matmaker`, `/clipping`, `/configuration`, `/help` | Logado  | Protegidas pelo proxy e por `requireAuth()` |

## Estrutura

```
app/
├── (main)/                  # Rotas com header, sidebar e footer
│   ├── analises/
│   │   ├── [slug]/page.tsx  # Detalhe de cada análise (gerado em build)
│   │   └── page.tsx
│   ├── clipping/
│   ├── configuration/
│   ├── help/
│   ├── hub/                 # Página inicial do usuário logado
│   ├── insights/
│   ├── matmaker/
│   ├── odsim/
│   │   ├── history/
│   │   ├── simulator/
│   │   └── page.tsx
│   ├── layout.tsx           # AuthProvider + MainLayoutWrapper
│   ├── loading.tsx
│   ├── page.tsx             # Landing pública
│   └── template.tsx         # Transição entre páginas
├── auth/callback/route.ts   # Troca o code do OAuth pela sessão
├── login/                   # Tela de login (layout próprio)
├── sections/                # Seções da landing
├── globals.css              # Tailwind + classes glass-*
├── layout.tsx               # Layout raiz
└── not-found.tsx
components/
├── landing/                 # Cards da landing
├── layout/                  # AuthProvider, MainLayoutWrapper, MenuHeader, Sidebar, Footer
└── ui/                      # Badge, LinkCard, LoadingScreen, PageHero
lib/
├── analises.ts              # Dados das análises (lista e detalhe)
├── auth.ts                  # requireAuth(): guarda das páginas protegidas
├── navigation.ts            # isActivePath(): item de menu ativo
├── useMediaQuery.ts         # Hook para media queries (sidebar no mobile)
└── supabase/
    ├── clients.ts           # Cliente para o navegador
    ├── proxy.ts             # Renovação de sessão e redirect de rotas protegidas
    └── server.ts            # Cliente para Server Components e Route Handlers
public/assets/               # Logos e imagens
proxy.ts                     # Proxy do Next.js 16 (antigo middleware.ts)
```

## Contribuindo

Veja o [CONTRIBUTING.md](CONTRIBUTING.md).
