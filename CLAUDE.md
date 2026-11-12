# CLAUDE.md

Frontend do Nativ (GRAF): Next.js 16 App Router, React 19, TypeScript, Tailwind 3,
Supabase Auth. Deploy na Vercel. Siga o [CONTRIBUTING.md](CONTRIBUTING.md); abaixo está só o que é
específico para agentes.

## Verificação

Rode antes de dizer que algo está pronto e informe o resultado real:

```bash
npm run lint && npm run format:check && npx tsc --noEmit --incremental false && npm run build
```

Não há testes. Sem conta OAuth, o fluxo logado não pode ser testado por você; diga isso
explicitamente em vez de assumir que funciona.

## Coisas fáceis de errar

- **Next.js 16 é recente.** Consulte a documentação instalada em `node_modules/next/dist/docs/`
  antes de usar uma API da qual não tem certeza.
- **É `proxy.ts`, não `middleware.ts`.** A função exportada é `proxy`.
- **Rota protegida nova = dois lugares:** prefixo em `PROTECTED_PREFIXES`
  ([lib/supabase/proxy.ts](lib/supabase/proxy.ts)) e `await requireAuth()` na página.
- **No `updateSession`**, não coloque código entre `createServerClient` e `getClaims()`, e devolva
  a resposta que o `setAll` montou (com cookies e headers de cache).
- **Não use `getSession()` no servidor.** Use `getClaims()`.
- **`useAuth()` é só para UI.** Autorização acontece no servidor.
- **URLs internas sem barra no final** (`/hub`, não `/hub/`), que é o padrão do Next.js. Para
  marcar item de menu ativo, use `isActivePath()` ([lib/navigation.ts](lib/navigation.ts)).
- **Logout usa `window.location.href` de propósito** (limpa o router cache). Não troque por
  `router.push`.
- **Análises têm dados duplicados** em `app/(main)/analises/page.tsx` e
  `app/(main)/analises/[slug]/page.tsx`. Ao mudar um slug, mude nos dois.
- O `<img>` da `HeroSection` é o único warning do lint e está em standby por decisão do time.

## Contexto que não está no código

- Dados de negócio virão de uma API própria (e do GeoServer no simulador). O Supabase fica só com
  usuários e roles; RBAC ainda não foi implementado.
- Não há restrição de quem pode logar; é intencional.
- `/analises` e `/insights` são públicas de propósito.
- O e-mail de contato da página Help ainda não foi definido; não invente um.

## Git

- **Nunca faça commit na `main`.** Se estiver na `main`, crie uma branch (`tipo/descricao-curta`)
  antes de commitar. Toda mudança entra por Pull Request.
- Não faça commit, push nem abra PR sem pedido explícito.
- Migração de features grandes vem com testes.
- Commits em Conventional Commits, em inglês.
