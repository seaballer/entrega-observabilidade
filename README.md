# ObservAI · Motor de Operações — protótipo de front-end

Protótipo navegável de painel administrativo para observabilidade em IA dentro do setor empresarial.

## Como demonstrar

```bash
cd entrega-observabilidade
python3 -m http.server 8080
```

Abra **http://localhost:8080** (o `index.html` redireciona para a Visão Executiva).
Também é possível abrir os arquivos diretamente no navegador via `file://`.

## Páginas conectadas

| Arquivo | Rota no menu | Conteúdo |
|---|---|---|
| `governance.html` | Visão Executiva | Cockpit executivo (custo, leads, tarefas, eficiência) |
| `leads.html` | Pipeline de Leads | Pipeline de leads com dossiê lateral |
| `tasks.html` | Tarefas e Fluxos de Trabalho | Kanban de orquestração de agentes |
| `telemetry.html` | Governança de IA e Custos | Telemetria de custo/tokens e guardrails |

## Navegação

- **Sidebar**: os 5 itens agora apontam para as páginas reais; o item corrente fica destacado e o breadcrumb do header mostra o nome da página.
- **Visão Executiva como hub**: os 4 KPIs clicáveis levam a Telemetria, Leads, Tarefas e Telemetria, respectivamente; "Ver Pipeline Completo" → Leads; "Revisar Incidente" → Telemetria.
- **Outros atalhos**: "Regras do Motor" (Tarefas) → Telemetria; "Configurar Cotas Multi-tenant" e "Ver Trilha de Auditoria de Governança Completa" (Telemetria) → Visão Executiva.
- `demo.js`: ações sem backend (Configurações da Organização, LinkedIn, importar/enviar etc.) exibem um aviso em toast; **Cmd/Ctrl + K** foca a busca global.

## Observações

- O visual depende do CDN do Tailwind, Google Fonts e Material Symbols (é necessária conexão com a internet).
- Os dados são estáticos/fictícios, apenas para demonstração de interface.
