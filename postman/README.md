# Como Usar as Collections e Environment do ServeRest

## Arquivos Criados

Este diretório contém os seguintes arquivos para teste da API ServeRest:

1. **`ServeRest_Environment.json`** - Environment do Postman com variáveis pré-configuradas
2. **`ServeRest_API_Collection.json`** - Collection completa com todos os endpoints mapeados
3. **`ServeRest_API_Documentation.md`** - Documentação detalhada das APIs e dependências

## Passo a Passo para Importação no Postman

### 1. Importar o Environment
1. Abra o Postman
2. Clique em "Import" no canto superior esquerdo
3. Selecione o arquivo `ServeRest_Environment.json`
4. Clique em "Import"
5. No canto superior direito, selecione "ServeRest Environment" no dropdown de environments

### 2. Importar a Collection
1. Clique em "Import" novamente
2. Selecione o arquivo `ServeRest_API_Collection.json`
3. Clique em "Import"
4. A collection "ServeRest API Collection" aparecerá na barra lateral esquerda

## Execução Recomendada

### Primeira Execução (Setup)
Execute nesta ordem para configurar o ambiente:

1. **Authentication → Login**
   - Faz login com credenciais de admin
   - Salva automaticamente o token de autenticação

2. **Products → List Products**
   - Lista produtos existentes
   - Salva automaticamente um productId para uso posterior

3. **Users → Create User**
   - Cria um usuário de teste
   - Salva automaticamente o userId

### Fluxo Completo de Teste
Após o setup, você pode executar:

1. **Users → Get User by ID** - Busca o usuário criado
2. **Products → Create Product** - Cria um novo produto (requer admin)
3. **Shopping Cart → Create Cart** - Cria carrinho com produtos
4. **Shopping Cart → Get Cart by ID** - Visualiza o carrinho
5. **Shopping Cart → Complete Purchase** - Finaliza a compra

### Testes de Cenários de Erro
Na pasta "Error Scenarios":

1. **Login Invalid Credentials** - Testa login com credenciais inválidas
2. **Create User Duplicate Email** - Testa criação com email duplicado
3. **Access Product Without Auth** - Testa acesso sem autenticação

## Recursos dos Testes Automatizados

Cada requisição inclui testes automáticos que verificam:

- ✅ **Status codes** corretos
- ✅ **Estrutura de resposta** JSON válida
- ✅ **Propriedades obrigatórias** nos objetos
- ✅ **Extração automática de dados** (IDs, tokens) para uso entre requisições
- ✅ **Validação de content-type** headers
- ✅ **Mensagens de erro** específicas
- ✅ **Tempo de resposta** aceitável

## Variáveis Disponíveis

O environment inclui estas variáveis pré-configuradas:

| Variável | Valor Padrão | Descrição |
|----------|--------------|-----------|
| `baseURL` | `https://compassuol.serverest.dev` | URL base da API |
| `authToken` | (auto) | Token de autenticação (preenchido pelo login) |
| `userId` | (auto) | ID do usuário (preenchido na criação) |
| `productId` | (auto) | ID do produto (preenchido automaticamente) |
| `cartId` | (auto) | ID do carrinho (preenchido na criação) |
| `adminEmail` | `fulano@qa.com` | Email do admin padrão |
| `adminPassword` | `teste` | Senha do admin padrão |
| `userEmail` | `usuario@teste.com` | Email para teste de usuário |
| `userPassword` | `teste123` | Senha para teste de usuário |

## Executando Todos os Testes

### Via Postman Interface
1. Clique com botão direito na collection "ServeRest API Collection"
2. Selecione "Run collection"
3. Configure os parâmetros desejados
4. Clique em "Run ServeRest API Collection"

### Via Newman (CLI)
Se você tem o Newman instalado:

```bash
# Instalar Newman (se não tiver)
npm install -g newman

# Executar a collection
newman run ServeRest_API_Collection.json -e ServeRest_Environment.json
```

## Estrutura da Collection

```
ServeRest API Collection/
├── Authentication/
│   └── Login
├── Users/
│   ├── List Users
│   ├── Create User
│   ├── Get User by ID
│   ├── Update User
│   └── Delete User
├── Products/
│   ├── List Products
│   ├── Create Product
│   ├── Get Product by ID
│   ├── Update Product
│   └── Delete Product
├── Shopping Cart/
│   ├── List Carts
│   ├── Create Cart
│   ├── Get Cart by ID
│   ├── Complete Purchase
│   └── Cancel Purchase
└── Error Scenarios/
    ├── Login Invalid Credentials
    ├── Create User Duplicate Email
    └── Access Product Without Auth
```

## Personalizando os Testes

### Modificando Dados de Teste
Você pode alterar as variáveis no environment ou diretamente nos request bodies:

- Modifique `userEmail` e `userPassword` para usar dados diferentes
- Ajuste os dados de produtos nos requests de criação
- Customize as quantidades nos carrinhos

### Adicionando Novos Testes
Para adicionar validações customizadas, edite a aba "Tests" de qualquer request:

```javascript
pm.test('Meu teste customizado', function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson.meuCampo).to.equal('valorEsperado');
});
```

## Dicas e Boas Práticas

1. **Execute o Login primeiro** - Muitas operações requerem autenticação
2. **Verifique o environment** - Certifique-se de que o environment correto está selecionado
3. **Analise os logs** - Use o console do Postman para debug
4. **Salve alterações** - Se modificar requests, salve a collection
5. **Use variáveis** - Aproveite as variáveis para reutilizar dados entre requests

## Troubleshooting

### Token Expirado
Se receber erro 401, execute novamente o request de Login para renovar o token.

### IDs Não Encontrados
Se algum ID não for encontrado, execute primeiro os requests que criam os recursos (usuários, produtos, carrinhos).

### Problemas de Conectividade
Verifique se a URL base `https://compassuol.serverest.dev` está acessível.

## Suporte

Para dúvidas sobre a API ServeRest:
- Consulte a documentação em `ServeRest_API_Documentation.md`
- Visite o repositório: https://github.com/ServeRest/ServeRest
- Abra uma issue: https://github.com/ServeRest/ServeRest/issues

---

*Collections criadas através de análise automatizada usando Playwright MCP para garantir mapeamento completo e validação end-to-end.*
