# Contribuindo para o Generate Test with Copilot

Obrigado por seu interesse em contribuir! Este projeto demonstra o uso do MCP Playwright e é parte do material apresentado no Chapter Técnico de Quality Engineering.

## 🚀 Como Contribuir

### 1. Reportar Bugs
- Inclua detalhes do ambiente (OS, Node.js version, Playwright version)
- Forneça passos para reproduzir o problema

### 2. Sugerir Melhorias
- Abra uma issue com o label "enhancement"
- Descreva claramente a melhoria proposta
- Explique o benefício para o projeto

### 3. Contribuir com Código

#### Setup do Ambiente
```bash
# Clone o repositório
git clone https://github.com/juniorschmitz/mcp-playwright-examples.git
cd generate-test-with-copilot

# Instale dependências
npm install

# Instale browsers do Playwright
npx playwright install

# Execute os testes
npm test
```

#### Padrões de Código
- Use TypeScript para novos arquivos
- Siga o padrão Page Object Model para testes E2E
- Inclua JSDoc para funções complexas
- Mantenha testes limpos e bem documentados

#### Estrutura de Commits
```
tipo(escopo): descrição

- feat: nova funcionalidade
- fix: correção de bug
- docs: apenas documentação
- test: adição ou correção de testes
- refactor: refatoração de código
```

### 4. Tipos de Contribuições Aceitas

#### 🧪 Novos Testes
- Cenários E2E adicionais para SauceDemo
- Testes de acessibilidade
- Testes de performance
- Validações de API

#### 📚 Documentação
- Melhorias no README
- Documentação de APIs
- Guias de uso
- Exemplos práticos

#### 🔧 Ferramentas
- Scripts de automação
- Configurações de CI/CD
- Templates de teste
- Utilitários

#### 🌐 Integrações
- Novas applications para demonstração
- Diferentes tipos de API (GraphQL, gRPC)
- Ferramentas de monitoramento
- Relatórios avançados

## 📋 Checklist para Pull Requests

- [ ] Código segue os padrões estabelecidos
- [ ] Testes passam localmente
- [ ] Documentação atualizada (se necessário)
- [ ] Commit messages seguem o padrão
- [ ] PR tem descrição clara do que foi alterado
- [ ] Screenshots incluídos (se alterações visuais)

## 🎯 Áreas de Foco

### Prioridade Alta
- Estabilidade dos testes existentes
- Documentação clara e atualizada
- Exemplos práticos de MCP Playwright

### Prioridade Média
- Novos cenários de teste
- Melhorias de performance
- Integração com outras ferramentas

### Prioridade Baixa
- Refatorações grandes
- Mudanças de arquitetura
- Features experimentais

## 🤝 Processo de Review

1. **Automated Checks**: CI executará testes automaticamente
2. **Code Review**: Mantainers farão review do código
3. **Testing**: Validação em diferentes ambientes
4. **Merge**: Após aprovação, PR será merged

## 📞 Comunicação

- **Issues**: Para bugs e melhorias
- **Discussions**: Para dúvidas e ideias
- **Email**: Para questões privadas ou sensíveis

## 🏆 Reconhecimento

Todos os contribuidores serão:
- Listados no README do projeto
- Mencionados nas release notes
- Reconhecidos nas apresentações futuras

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a MIT License.

---

**Obrigado por ajudar a tornar este projeto melhor! 🚀**
