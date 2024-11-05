# Design API (Projeto API)
**Objetivo:**

Praticar Projeto (Design de API) e Design de uma API REST.

**Detalhes Técnicos:**

API REST

# Contrato de API - Galera do Vôlei

### Introdução

**Descrição geral do sistema**: O projeto será uma plataforma em formato de rede social onde os usuários, após cadastro, poderão organizar partidas de vôlei de areia, definindo local, data, horário e número máximo de jogadores. Também será possível especificar o tipo de partida: masculina, feminina ou mista. Além disso, cada usuário poderá enviar convites para outros participantes se juntarem à partida.

**Funcionalidades**: 
- Autenticação
- Cadastro e Perfil de Usuário
- Criação e gerenciamento de partidas com status: pendente confirmação, confirmada, fechada, encerrada ou cancelada.
- Convite e inscrição de partidas
- Localização
- Comunicação e notificação

**Autenticação**:

baseada em cookies com login, signin, logoff e signoff, é permitido apenas uma sessão ativa por vez

**Entidades**:

- **Usuário**: id, nome, email, senha, nível de habilidade, gênero.
- **Equipe**: id, nome da equipe, jogadores, gênero da equipe.
- **Partida**: id, data e hora, arena, tipo de partida, equipes, organizador, status da partida, gênero da partida.
- **Arena**: id, nome do estadio, endereço
- **Quadra**: id, id da arena, nº da quadra

**Ações**

- **Convidar usuário**
- **Confirmar a partida**
- **Iniciar a partida**
- **Terminar a partida**
- **Cancelar a partida**

### API

as apis foram modeladas no seguinte formato:

```markdown
## <MÉTODO> <CAMINHO>

**Descrição**: Uma breve descrição do que essa api faz

**Pré-Condições**: O que precisa para a api estar disponível

**Pós-Condições**: O que a api faz caso tenha dado certo
```

e então são seguidas por tipos em typescript descrevendo o corpo do request e as várias responses que você pode obter acompanhadas de seus status http

```typescript
// input
{
    corpo_do_request: "sempre é um json",
    um_numero: number,
    uma_string: string,
}
// output caso sucesso (200 OK)
{
    parece_que_deu_certo: true,
}
// output caso erro (<STATUS HTTP DO ERRO> <DESCRIÇÃO DO STATUS HTTP>)
{
    error: "algo_deu_errado",
    description: "aqui vem a descrição do problema"
}
```

outros erros podem vir seguidos abaixo na forma de links

todas as apis que esperam json no corpo tem que receber o header `Content-Type: application/json` ou senão irão rejeitar com o [erro padrão para requests com corpo incorreto](./8-erros.md#bad_request)

1. [Autenticação](./1-autenticacao.md)
2. [Entidade usuário](./2-entidade-usuario.md)
3. [Entidade equipe](./3-entidade-equipe.md)
4. [Entidade partida](./4-entidade-partida.md)
5. [Entidade arena](./5-entidade-arena.md)
6. [Entidade quadra](./6-entidade-quadra.md)
7. [Ações](./7-acoes.md)
8. [Erros](./8-erros.md)
