# Creatify - Marketplace de E-books com Múltiplos Vendedores

Uma plataforma moderna e completa para compra e venda de e-books e produtos digitais com direitos de revenda.

## Funcionalidades

### Para Compradores
- 🛍️ **Catálogo Completo**: Diversos produtos digitais em várias categorias
- 🔍 **Busca e Filtros Avançados**: Encontre produtos por categoria, preço, avaliação
- ⭐ **Sistema de Avaliações**: Avaliações de 5 estrelas e comentários de clientes
- 🛒 **Carrinho de Compras**: Gestão fácil de itens e checkout seguro
- 💳 **Pagamento Seguro**: Integração com Stripe para transações seguras
- 📥 **Download Instantâneo**: Receba arquivos imediatamente após a compra
- ❤️ **Favoritos**: Salve seus produtos preferidos
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile

### Para Vendedores
- 📊 **Dashboard Completo**: Análise de vendas em tempo real
- 📈 **Gráficos de Desempenho**: Visualize suas vendas e receita
- 📦 **Gerenciamento de Produtos**: Adicione, edite e organize seus produtos
- 💰 **Rastreamento de Receita**: Veja exatamente quanto você está ganhando
- 🎯 **Marketing Integrado**: Ferramentas para promover seus produtos
- 📤 **Compartilhamento Social**: Compartilhe produtos em redes sociais
- 👥 **Gestão de Clientes**: Acesso completo aos seus compradores

### Segurança e Compliance
- 🔒 **Encriptação SSL 256-bit**: Todas as transações são seguras
- 🛡️ **Proteção de Dados**: Conformidade com LGPD e GDPR
- ✅ **Verificação de Email**: Confirmação de email para contas
- 🔐 **Autenticação Segura**: Login seguro com hash de senha
- 📋 **Termos e Privacidade**: Política completa de privacidade

## Tecnologias

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, Shadcn UI
- **Gráficos**: Recharts
- **Pagamentos**: Stripe (integração pronta)
- **Armazenamento**: Vercel Blob (pronto para integração)
- **Database**: Supabase/Neon (pronto para integração)

## Instalação

### Usando Shadcn CLI (Recomendado)

\`\`\`bash
npx shadcn-cli@latest init -d nextjs-app creatify
cd creatify
npm run dev
\`\`\`

### Instalação Manual

\`\`\`bash
git clone https://github.com/seu-usuario/creatify.git
cd creatify
npm install
npm run dev
\`\`\`

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Variáveis de Ambiente

Crie um arquivo \`.env.local\`:

\`\`\`env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=seu_chave_publica
STRIPE_SECRET_KEY=sua_chave_secreta
\`\`\`

## Estrutura do Projeto

\`\`\`
app/
├── page.tsx                 # Home page
├── catalogo/               # Catálogo de produtos
├── produto/[id]/           # Página de detalhes do produto
├── carrinho/               # Página do carrinho
├── checkout/               # Página de checkout
├── vendedor/               # Dashboard do vendedor
├── login/                  # Página de login
├── cadastro/               # Página de cadastro
├── perfil/                 # Perfil do usuário
├── dashboard/              # Dashboard de vendas
└── api/                    # API routes

components/
├── navigation.tsx          # Barra de navegação
├── footer.tsx             # Rodapé
├── hero.tsx               # Seção hero
├── product-card.tsx       # Card de produto
├── featured-products.tsx  # Produtos em destaque
└── ui/                    # Componentes Shadcn UI

lib/
├── store.ts               # Lógica de armazenamento e dados
└── utils.ts               # Funções utilitárias

hooks/
└── use-cart.ts            # Hook de carrinho de compras

public/
├── sitemap.xml            # Sitemap para SEO
└── robots.txt             # Arquivo robots.txt
\`\`\`

## Funcionalidades Principais

### Catálogo de Produtos
- Busca em tempo real
- Filtros por categoria, preço e avaliação
- Paginação eficiente
- Produtos em destaque na home

### Sistema de Avaliações
- Deixe comentários e notas
- Veja avaliações de outros usuários
- Média dinâmica de notas
- Moderação de conteúdo

### Carrinho de Compras
- Sincronização com localStorage
- Atualização de quantidade
- Cálculo automático de totais
- Persistência entre sessões

### Checkout Seguro
- Múltiplas etapas
- Validação de dados
- Confirmação de pedido
- Email de confirmação

### Dashboard do Vendedor
- Gráficos de vendas
- Análise de receita
- Gestão de produtos
- Rastreamento de performance

## Deploying

### Deploy no Vercel (Recomendado)

\`\`\`bash
vercel deploy
\`\`\`

### Deploy em Outro Servidor

\`\`\`bash
npm run build
npm start
\`\`\`

## Suporte

Para suporte, abra uma issue ou entre em contato através de:
- Email: suporte@creatify.com.br
- Website: https://creatify.com.br

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Roadmap

- [ ] Integração com Stripe (pagamentos em tempo real)
- [ ] Sistema de afiliados com comissões automáticas
- [ ] Integração com redes sociais
- [ ] Plataforma de email marketing
- [ ] Sistema de suporte com tickets
- [ ] API pública para integradores
- [ ] App mobile nativa (iOS/Android)
- [ ] Análise avançada e relatórios

## Créditos

Desenvolvido com ❤️ para empreendedores digitais.
