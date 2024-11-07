# Entidade Partida

- [Entidade partida](#entidade-partida)
  - [GET /api/partida](#get-apipartida)
  - [POST /api/partida](#post-apipartida)
  - [GET /api/partida/:id](#get-apipartidaid)
  - [PUT /api/partida/:id](#put-apipartidaid)
  - [DELETE /api/partida/:id](#delete-apipartidaid)
  - [GET /api/partida/:id/imagem](#get-apipartidaidimagem)
  - [PUT /api/partida/:id/imagem](#put-apipartidaidimagem)
  - [DELETE /api/partida/:id/imagem](#delete-apipartidaidimagem)



## GET /api/partida

**Descrição**: Lista todas as partidas

**Pré-Condições**: O usuário deve estar logado e convidado.

**Pós-Condições**: Nenhuma.

```typescript
// output caso sucesso (200 OK)
{
    partidas: {
        id: string,
        local: string,
        data: string,
        horario: string,
        max_jogadores: number,
        tipo: "masculina" | "feminina" | "mista",
        imagem: boolean,
        criador_id: string,
        apagado: boolean,
    }[],
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

------

## POST /api/partida

**Descrição**: Cria uma nova partida

**Pré-Condições**: O usuário deve estar logado e convidado.

**Pós-Condições**: Uma nova partida é criada e salva no sistema.

```typescript
// input
{
    local: string,
    data: string,
    horario: string,
    max_jogadores: number,
    tipo: "masculina" | "feminina" | "mista",
    imagem?: boolean,
}
// output caso sucesso (201 Created)
{
    partida: {
        id: string,
        local: string,
        data: string,
        horario: string,
        max_jogadores: number,
        tipo: "masculina" | "feminina" | "mista",
        imagem: boolean,
        criador_id: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

------

## GET /api/partida/:id

**Descrição**: Retorna os detalhes de uma partida específica.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: Nenhuma.

```typescript
// output caso sucesso (200 OK)
{
    partida: {
        id: string,
        local: string,
        data: string,
        horario: string,
        max_jogadores: number,
        tipo: "masculina" | "feminina" | "mista",
        imagem: boolean,
        criador_id: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [partida_id_not_found](./8-erros.md#partida_id_not_found)



## PUT /api/partida/:id

**Descrição**: Atualiza os dados de uma partida existente.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: Os dados da partida são atualizados.



```typescript
// input
{
    local?: string,
    data?: string,
    horario?: string,
    max_jogadores?: number,
    tipo?: "masculina" | "feminina" | "mista",
}
// output caso sucesso (200 OK)
{
    partida: {
        id: string,
        local: string,
        data: string,
        horario: string,
        max_jogadores: number,
        tipo: "masculina" | "feminina" | "mista",
        imagem: boolean,
        criador_id: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [partida_id_not_found](./8-erros.md#partida_id_not_found)



## DELETE /api/partida/:id

**Descrição**: Exclui uma partida específica.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: A partida é excluída ou marcada como excluída.

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [partida_id_not_found](./8-erros.md#partida_id_not_found)



## GET /api/partida/:id/imagem

**Descrição**: Retorna a imagem de uma partida.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir, e a partida deve ter uma imagem.

**Pós-Condições**: Nenhuma.

em caso de sucesso, essa API retorna um `image/jpeg` com status `200 OK`.



```typescript
// output caso a partida especificada não tenha uma imagem (404 Not Found)
{
    error: "partida_imagem_not_found",
    description: "essa partida não tem uma imagem",
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [partida_id_not_found](./8-erros.md#partida_id_not_found)



## PUT /api/partida/:id/imagem

**Descrição**: Atualiza ou adiciona a imagem de uma partida.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: A imagem da partida é atualizada ou adicionada.

O corpo desta requisição deve ser um `image/jpeg`.



```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [partida_id_not_found](./8-erros.md#partida_id_not_found)



## DELETE /api/partida/:id/imagem

**Descrição**: Exclui a imagem de uma partida, ou faz nada se a partida não tiver imagem.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: Nenhuma.



```typescript
// output caso sucesso (200 OK)
{}	
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [partida_id_not_found](./8-erros.md#partida_id_not_found)