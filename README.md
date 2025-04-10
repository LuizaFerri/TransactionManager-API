<h1>TransactionManager API </h1>
<h3> 📋 Descrição </h3>
TransactionManager API é uma API REST desenvolvida para gerenciar transações financeiras pessoais. Permite que usuários registrem suas transações de crédito e débito, visualizem o resumo de sua conta, consultem o histórico de transações e obtenham detalhes de transações específicas. <br/>
<h3>✨ Requisitos Funcionais </h3>
<ul>
  <li>
    Criação de novas transações
  </li>
  <li>
    Obtenção de resumo da conta
  </li>
  <li>
    Listagem de todas as transações do usuário
  </li>
  <li>
    Visualização detalhada de uma transação específica
  </li>
</ul>

<h3>📏 Regras de Negócio </h3>
<ul>
  <li>
    As transações podem ser do tipo crédito (adicionam ao saldo) ou débito (subtraem do saldo)
  </li>
  <li>
    Autenticação de usuário entre as requisições
  </li>
  <li>
     Usuários só podem visualizar transações que eles mesmos criaram
  </li>
</ul>

<h3>🚀 Tecnologias Utilizadas </h3>
<div style="display: inline_block"><br/>
<img align="center" alt="nodejs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img align="center" alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img align="center" alt="sqlite" src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" />
</div><br/>
<li>Knex.js (Query Builder)</li>
<li>Zod (para validação) </li>
