<h1>Este é um projeto de teste técnico</h1>
<h2>A Stack usada no projeto : node, express, sequelize, TypeScript</h2>
<p>utilizei docker e docker compose para criar a imagem da api do projeto</p>
<p> para iniciar o projeto localmente siga esses passos </p>
<ul>
  <li>fazer clone do projeto</li>
  <i>fazer clone do projeto</i>
  <li>docker compose up -d</li>
  <li>caso tenha instalado o postegres pode ocorrer um conflito e você tenha abrir a porta para o container do docker usar para isso use os comandos "sudo lsof -i :5432" para verificar quem está usando a porta e logo em seguida usar o comando "sudo kill <codigo_do_postgres_local></li>
  </ul>

  <h2>codigos importantes do typeScript e Sequelize</h2>
  <ul>
    <li>npx tsc - para fazer build do typeScript e assim conseguir rodas os comandos abaixo</li>
    <li>npx sequelize db:create - para criar o database</li>
    <li>npx sequelize db:migrate - para rodar as migrations e subir as tabelas</li>
  </ul>
