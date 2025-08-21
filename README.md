# Generate Test with Copilot - MCP Playwright Example

![MCP Playwright](https://img.shields.io/badge/MCP-Playwright-blue?style=for-the-badge)
![Quality Engineering](https://img.shields.io/badge/QE-Chapter%20T%C3%A9cnico-green?style=for-the-badge)
![Postman](https://img.shields.io/badge/Postman-Collections-orange?style=for-the-badge)

Este repositório demonstra o uso prático do **Model Context Protocol (MCP) com Playwright** para automação de testes e geração de artefatos de qualidade. Foi apresentado no **Chapter Técnico de Quality Engineering em 21/08/2025**.

## 🎯 Objetivo

Demonstrar como o MCP Playwright pode ser utilizado para:
- 🔍 Navegação e análise automatizada de aplicações web
- 📝 Geração automática de casos de teste
- 🧪 Criação de collections Postman baseadas em análise de API
- 📊 Mapeamento completo de funcionalidades através de exploração visual

## 🏗️ Estrutura do Projeto

```
generate-test-with-copilot/
├── README.md                           # Este arquivo
├── package.json                        # Configurações do projeto Node.js
├── playwright.config.ts                # Configuração do Playwright
├── .github/
│   └── prompts/
│       └── api_mapping.md              # Prompt para mapeamento de APIs
├── tests/                              # Testes automatizados
│   ├── saucedemo-purchase-flow.spec.ts # Fluxo de compra no SauceDemo
│   ├── saucedemo-additional-scenarios.spec.ts # Cenários adicionais
│   ├── data/
│   │   └── testData.ts                 # Dados de teste
│   └── pages/
│       ├── PageManager.ts              # Gerenciador de páginas
│       ├── LoginPage.ts                # Page Object - Login
│       ├── InventoryPage.ts            # Page Object - Inventário
│       ├── CartPage.ts                 # Page Object - Carrinho
│       ├── CheckoutInformationPage.ts  # Page Object - Checkout Info
│       ├── CheckoutOverviewPage.ts     # Page Object - Checkout Overview
│       └── CheckoutCompletePage.ts     # Page Object - Checkout Complete
├── postman/                            # Collections e documentação Postman
│   ├── README.md                       # Guia de uso das collections
│   ├── ServeRest_Environment.json      # Environment do Postman
│   ├── ServeRest_API_Collection.json   # Collection completa da API
│   └── ServeRest_API_Documentation.md  # Documentação detalhada
├── exploratory/                        # Testes exploratórios (vazio)
├── playwright-report/                  # Relatórios do Playwright
└── test-results/                       # Resultados dos testes
```

## 🚀 Exemplos Implementados

### 1. 🛒 Testes E2E - SauceDemo
**Localização**: `tests/`

Demonstra a geração automática de testes end-to-end usando MCP Playwright para explorar e mapear a aplicação SauceDemo.

#### Funcionalidades Testadas:
- ✅ **Login/Logout** com diferentes tipos de usuários
- ✅ **Fluxo de compra completo** (adicionar produtos → checkout → finalização)
- ✅ **Validações de carrinho** (adicionar/remover produtos)
- ✅ **Ordenação de produtos** por preço e nome
- ✅ **Validação de URLs** e navegação
- ✅ **Tratamento de erros** e cenários negativos

#### Arquitetura:
- 🏗️ **Page Object Model** - Estrutura organizada e reutilizável
- 📊 **Data-driven testing** - Dados centralizados em `testData.ts`
- 🎭 **Playwright best practices** - Configuração otimizada

### 2. 🌐 Mapeamento de APIs - ServeRest
**Localização**: `postman/`

Demonstra como o MCP Playwright pode navegar e analisar documentação Swagger para gerar automaticamente collections Postman completas.

#### Recursos Gerados:
- 🔧 **Environment configurado** com variáveis dinâmicas
- 📋 **Collection completa** com 20+ endpoints mapeados
- 🧪 **Testes automatizados** integrados em cada requisição
- 📖 **Documentação detalhada** das APIs e dependências
- 🔒 **Fluxos de autenticação** e autorização
- ❌ **Cenários de erro** e validações

#### APIs Mapeadas:
- **Autenticação**: Login com JWT
- **Usuários**: CRUD completo
- **Produtos**: Gerenciamento (requer admin)
- **Carrinhos**: Fluxo de compra completo

## 🛠️ Tecnologias Utilizadas

- **[Playwright](https://playwright.dev/)** - Framework de automação web
- **[MCP (Model Context Protocol)](https://docs.anthropic.com/claude/docs/mcp)** - Protocolo para integração com modelos
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem principal
- **[Postman](https://www.postman.com/)** - Collections para testes de API
- **[SauceDemo](https://www.saucedemo.com/)** - Aplicação de demonstração
- **[ServeRest](https://serverest.dev/)** - API REST para estudos

## 🚦 Como Executar

### Pré-requisitos
```bash
# Instalar dependências
npm install

# Instalar browsers do Playwright
npx playwright install
```

### Executar Testes E2E
```bash
# Executar todos os testes
npm test

# Executar em modo headed (visível)
npx playwright test --headed

# Executar um teste específico
npx playwright test saucedemo-purchase-flow

# Gerar relatório
npx playwright show-report
```

### Usar Collections Postman
1. Importar `postman/ServeRest_Environment.json`
2. Importar `postman/ServeRest_API_Collection.json`
3. Seguir instruções em `postman/README.md`

## 🎭 MCP Playwright em Ação

### Como o MCP Playwright foi Utilizado:

#### 1. **Exploração Automática** 🔍
```typescript
// O MCP navega automaticamente pela aplicação
await page.goto('https://www.saucedemo.com');
await page.locator('[data-test="username"]').fill('standard_user');
// Analisa elementos e gera code patterns
```

#### 2. **Mapeamento de APIs** 🌐
```typescript
// Navega pela documentação Swagger
await page.goto('https://serverest.dev/');
// Analisa endpoints e gera collections Postman automaticamente
```

#### 3. **Geração de Page Objects** 🏗️
```typescript
// Identifica elementos e cria abstrações
export class LoginPage {
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

## 🎓 Apresentação Chapter Técnico QE

**Data**: 21 de Agosto de 2025
**Tema**: "Automação Inteligente com MCP Playwright"

### Pontos Destacados:
- 🤖 **Automação Inteligente**: Como IA pode acelerar criação de testes
- 🔄 **Fluxo End-to-End**: Da exploração manual à automação completa
- 📊 **Qualidade Escalável**: Geração rápida de cobertura de testes
- 🔧 **Ferramentas Integradas**: Playwright + Postman + Documentation

### Benefícios Demonstrados:
- 🎯 **Precisão**: Mapeamento completo sem gaps
- 📚 **Documentação**: Geração automática de docs atualizadas
- 🔄 **Manutenibilidade**: Código estruturado e reutilizável

### Pontos de Atenção:
- As LLMs geram o mínimo necessário para atender às instruções dos usuários, ou seja, o código precisa ser revisado e complementado.
- Sempre que o contexto for maior (padrões de projeto, casos de uso, estruturação, etc), os resultados serão melhores, porém isto não exclui a revisão humana.

## 🔮 Próximos Passos

- [ ] Integração com CI/CD pipelines
- [ ] Testes de performance automatizados
- [ ] Geração de testes de acessibilidade
- [ ] Expansão para outras aplicações
- [ ] Integração com ferramentas de monitoramento

## Inspiração
O repositório base foi criado/inspirado para acelerar a estrutura a partir de https://github.com/debs-obrien/generate-test-with-copilot, e do vídeo/abordagem apresentados em https://www.youtube.com/watch?v=AaCj939XIQ4.

## 🤝 Contribuições

Este projeto serve como exemplo e base para:
- 👨‍💻 QE Engineers interessados em automação inteligente
- 🏢 Times que querem acelerar criação de testes
- 🎓 Estudantes aprendendo Playwright e MCP
- 🔧 DevOps implementando qualidade em pipelines

## 📄 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

---

**🎯 Conclusão**: Este repositório demonstra o poder do MCP Playwright para transformar exploração manual em automação robusta, acelerando significativamente o processo de Quality Engineering.

*Apresentado com ❤️ no Chapter Técnico de QE - Agosto 2025*
