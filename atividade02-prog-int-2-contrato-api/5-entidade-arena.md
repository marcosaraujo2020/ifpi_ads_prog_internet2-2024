# Entidade Arena

- [Entidade Arena](#entidade-arena)
  - [GET /api/arena](#get-apiarena)
  - [POST /api/arena](#post-apiarena)
  - [GET /api/arena/:id](#get-apiarenaid)
  - [PUT /api/arena/:id](#put-apiarenaid)
  - [DELETE /api/arena/:id](#delete-apiarenaid)
  - [GET /api/arena/:id/imagem](#get-apiarenaidimagem)
  - [PUT /api/arena/:id/imagem](#put-apiarenaidimagem)
  - [DELETE /api/arena/:id/imagem](#delete-apiarenaidimagem)



## GET /api/arena

**Descrição**: Lista todas as arenas.

**Pré-Condições**: O usuário deve estar logado e convidado.

**Pós-Condições**: Nenhuma.

```typescript
// output caso sucesso (200 OK)
{
    arenas: {
        id: string,
        nome: string,
        localizacao: string,
        capacidade: number,
        imagem: boolean,
        descricao?: string,
        apagado: boolean,
    }[],
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

------

## POST /api/arena

**Descrição**: Cria uma nova arena.

**Pré-Condições**: O usuário deve estar logado e convidado.

**Pós-Condições**: Uma nova arena é criada e salva no sistema.

```typescript
// input
{
    nome: string,
    localizacao: string,
    capacidade: number,
    imagem?: boolean,
    descricao?: string,
}
// output caso sucesso (201 Created)
{
    arena: {
        id: string,
        nome: string,
        localizacao: string,
        capacidade: number,
        imagem: boolean,
        descricao?: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

------

## GET /api/arena/:id

**Descrição**: Retorna os detalhes de uma arena específica.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: Nenhuma.

```typescript
// output caso sucesso (200 OK)
{
    arena: {
        id: string,
        nome: string,
        localizacao: string,
        capacidade: number,
        imagem: boolean,
        descricao?: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [arena_id_not_found](./8-erros.md#arena_id_not_found)

------

## PUT /api/arena/:id

**Descrição**: Atualiza os dados de uma arena existente.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: Os dados da arena são atualizados.

```typescript
// input
{
    nome?: string,
    localizacao?: string,
    capacidade?: number,
    descricao?: string,
}
// output caso sucesso (200 OK)
{
    arena: {
        id: string,
        nome: string,
        localizacao: string,
        capacidade: number,
        imagem: boolean,
        descricao?: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [arena_id_not_found](./8-erros.md#arena_id_not_found)

------

## DELETE /api/arena/:id

**Descrição**: Exclui uma arena específica.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: A arena é excluída ou marcada como excluída.

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [arena_id_not_found](./8-erros.md#arena_id_not_found)

------



## GET /api/arena/:id/imagem

**Descrição**: Retorna a imagem de uma arena.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir, e a arena deve ter uma imagem.

**Pós-Condições**: Nenhuma.

Em caso de sucesso, essa API retorna um `image/jpeg` com status `200 OK`.

```typescript
// output caso a arena especificada não tenha uma imagem (404 Not Found)
{
    error: "arena_imagem_not_found",
    description: "essa arena não tem uma imagem",
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [arena_id_not_found](./8-erros.md#arena_id_not_found)

------

## PUT /api/arena/:id/imagem

**Descrição**: Atualiza ou adiciona a imagem de uma arena.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: A imagem da arena é atualizada ou adicionada.

O corpo desta requisição deve ser um `image/jpeg`.

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [arena_id_not_found](./8-erros.md#arena_id_not_found)

------

## DELETE /api/arena/:id/imagem

**Descrição**: Exclui a imagem de uma arena, ou faz nada se a arena não tiver imagem.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: Nenhuma.

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [arena_id_not_found](./8-erros.md#arena_id_not_found)