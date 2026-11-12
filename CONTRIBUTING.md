# Como contribuir

Guia prático para desenvolver no frontend do Nativ. Para instalar e rodar o
projeto, veja o [README](README.md).

## Antes de abrir um commit

Rode tudo e só siga se passar:

```bash
npm run lint
npm run format:check   # ou npm run format para corrigir
npx tsc --noEmit
npm run build
```

O projeto ainda não tem testes automatizados. Descreva no commit ou no PR o que você verificou
manualmente (por exemplo, login, navegação logado e deslogado).

## Git

- **Nunca faça commit direto na `main`.** Toda mudança, por menor que seja, vai em uma branch e
  entra na `main` por Pull Request.
- Nomeie a branch com o tipo da mudança e uma descrição curta: `feat/odsim-simulator`,
  `fix/sidebar-alignment`, `docs/contributing`.
- Antes de abrir o PR, rode as verificações da seção acima e descreva no PR o que foi testado.
- **Migração de features grandes** (ODSim, MatMaker, Data Extractor etc.) deve vir com testes
  cobrindo a integração e o comportamento esperado.
- Mensagens seguem [Conventional Commits](https://www.conventionalcommits.org/), em inglês:
  `feat:`, `fix:`, `refactor:`, `perf:`, `style:`, `chore:`. Um assunto por commit.
- Commits de reformatação em massa vão isolados e entram no `.git-blame-ignore-revs`. Para o
  `git blame` local ignorá-los: `git config blame.ignoreRevsFile .git-blame-ignore-revs`.

## Versão

A versão segue o versionamento semântico (`MAJOR.MINOR.PATCH`) e vem do campo `version` do
`package.json`. Ela aparece no rodapé da sidebar e na página de Configurações. Para lançar uma
versão nova, use `npm version patch | minor | major`.

## Autenticação

A proteção de rotas tem duas camadas, seguindo a documentação do Next.js e do Supabase:

1. **Proxy** ([lib/supabase/proxy.ts](lib/supabase/proxy.ts)): renova a sessão a cada requisição e
   redireciona para `/login` quem acessa um prefixo protegido sem sessão.
2. **`requireAuth()`** ([lib/auth.ts](lib/auth.ts)): checagem definitiva, chamada no início de
   cada página protegida.

**Ao criar uma rota protegida, faça as duas coisas:** adicione o prefixo em `PROTECTED_PREFIXES`
no proxy e chame `await requireAuth()` na página.

Outras regras:

- No servidor, use `getClaims()` para verificar a sessão. Nunca confie em `getSession()` no
  servidor: ele lê o cookie sem validar.
- Escolha o cliente Supabase pelo contexto: `@/lib/supabase/server` em Server Components e Route
  Handlers, `@/lib/supabase/clients` no navegador.
- No cliente, use `useAuth()` ([AuthProvider](components/layout/AuthProvider.tsx)) para saber se há
  usuário logado. Ele serve só para exibição; não use para autorizar nada.
- Não faça checagem de autenticação em layouts: eles não re-renderizam na navegação.

## Páginas

- Páginas são Server Components. Use `"use client"` só quando precisar de estado, efeitos ou
  animação.
- Esqueleto padrão:

  ```tsx
  export default async function ExemploPage() {
    await requireAuth(); // só em rotas protegidas

    return (
      <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-8">
        <PageHero title="Exemplo" description="..." />
        {/* conteúdo */}
      </main>
    );
  }
  ```

- Dados estáticos ficam em um `const` no topo do arquivo, renderizados com `.map()`.
- Cada página renderiza o próprio `<main>`; o layout usa `<div>`.

## Componentes

- Antes de criar um componente, veja se `PageHero`, `LinkCard` ou `Badge` resolvem.
- `components/ui/`: componentes genéricos, com export nomeado (`export function Badge`).
- `components/layout/` e `components/landing/`: export default.
- Props tipadas inline ou com `interface XProps`. Evite `any`.

## Estilo de código

- A formatação é do Prettier (largura 100, aspas duplas, ponto e vírgula, LF). Não formate à mão;
  rode `npm run format`. O plugin do Tailwind ordena as classes automaticamente.
- Imports entre pastas usam o alias `@/` (`@/components/ui/PageHero`). Na mesma pasta, use `./`.
- Cores seguem a paleta já usada nas classes (`#0E0E0E`, `#467782`, `#6BB6C7`, `#94A3B8`,
  `#64748B`, `#E2E8F0`) e as classes `glass-card`, `glass-accent` e `glass-dark` de
  [globals.css](app/globals.css). Ícones vêm do `lucide-react`.
- Links internos usam `next/link`, sem barra no final (`/hub`, não `/hub/`). Links externos usam `<a target="_blank" rel="noopener noreferrer">`.

## Idioma

- Textos da interface e comentários: português do Brasil.
- Nomes de variáveis, funções, arquivos e mensagens de commit: inglês.

## Erros

- Chamadas ao Supabase seguem o padrão `const { data, error } = await ...`, e o erro vira redirect
  ou `notFound()`.
- Ainda não há logging nem monitoramento. Se for preciso adicionar, combine antes com o time.
