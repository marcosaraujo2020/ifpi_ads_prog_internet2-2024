# Design API (Projeto API)
**Objetivo:**

Praticar Projeto (Design de API) e Implementação de API seguinte REST, Documentação de API com OPEN API e primeiras iniciativas de Arquitetura (Rotas, Controllers, Serviços e Repositórios.

**Detalhes Técnicos:**

API REST


# Contrato de API
### API Galera do Vôlei

### 1 Introdução

**Descrição geral do sistema**: O projeto será uma plataforma em formato de rede social onde os usuários, após cadastro, poderão organizar partidas de vôlei de areia, definindo local, data, horário e número máximo de jogadores. Também será possível especificar o tipo de partida: masculina, feminina ou mista. Além disso, cada usuário poderá enviar convites para outros participantes se juntarem à partida.

**Funcionalidades**: 
- Cadastro e Perfil de Usuário
- Criação e gerenciamento de partidas com status: aberta, fechada ou encerrada.
- Convite e inscrição de partidas
- Localização
- Comunicação e notificação


**Entidades**:

### 2 Entidades
- **Usuário**: id, nome, email, senha, nível de habilidade.
- **Equipe**: id, nome da equipe, jogadores
- **Partida**: id, data e hora, arena, tipo de partida, equipes, organizador, status da partida.
- **Arena**: id, nome da arena, endereço, nº da quadra



### 3 Endpoints
**Métodos**: GET, POST, PUT, DELETE



**Teste JSON**

```json
{
    "username":"Marcos",
}
```




