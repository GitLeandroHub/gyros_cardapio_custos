PWA de Custos do Cardápio — Entrega

O que este projeto já faz:
- Cadastro de ingredientes com preço de compra, quantidade-base e perda.
- Cadastro de preparos/fichas técnicas com rendimento (BOM em camadas).
- Cadastro de embalagens no custo final.
- Cadastro de itens finais e combos que podem puxar outros itens como base.
- Rateio de aluguel e outros custos fixos pelo total de itens ativos do cardápio.
- Dashboard com margem, custo total e preço sugerido por meta.
- Exportação e importação em JSON.
- Instalação como PWA (quando servido por HTTP/HTTPS).

Observações:
- O arquivo já vem com uma base inspirada no seu cardápio enviado.
- Alguns combos usam “bases internas médias” para acelerar o começo. Ajuste quando quiser para refletir a sua operação real.
- Para o PWA funcionar completo, abra a pasta em um servidor estático simples. Exemplo:
  python -m http.server 8080
  Depois acesse http://localhost:8080

Arquivos principais:
- index.html
- app.js
- manifest.webmanifest
- sw.js
- icons/


Se estiver atualizando uma versão anterior:
- faça um hard refresh (Ctrl+F5)
- ou limpe os dados do site no navegador
- isso evita que o service worker mantenha arquivos antigos em cache
