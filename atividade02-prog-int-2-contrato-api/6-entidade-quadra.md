# Entidade Quadra

- [Entidade Quadra](#entidade-quadra)
  - [GET /api/quadra](#get-apiquadra)
  - [POST /api/quadra](#post-apiquadra)
  - [GET /api/quadra/:id](#get-apiquadraid)
  - [PUT /api/quadra/:id](#put-apiquadraid)
  - [DELETE /api/quadra/:id](#delete-apiquadraid)
  - [GET /api/quadra/:id/imagem](#get-apiquadraidimagem)
  - [PUT /api/quadra/:id/imagem](#put-apiquadraidimagem)
  - [DELETE /api/quadra/:id/imagem](#delete-apiquadraidimagem)



## GET /api/quadra

**Descrição**: Lista todas as quadras.

**Pré-Condições**: O usuário deve estar logado e convidado.

**Pós-Condições**: Nenhuma.

```typescript
// output caso sucesso (200 OK)
{
    quadras: {
        id: string,
        nome: string,
        localizacao: string,
        capacidade: number,
        tipo: "indoor" | "outdoor",
        imagem: boolean,
        descricao?: string,
        apagado: boolean,
    }[],
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

------

## POST /api/quadra

**Descrição**: Cria uma nova quadra.

**Pré-Condições**: O usuário deve estar logado e convidado.

**Pós-Condições**: Uma nova quadra é criada e salva no sistema.

```typescript
// input
{
    nome: string,
    localizacao: string,
    capacidade: number,
    tipo: "indoor" | "outdoor",
    imagem?: boolean,
    descricao?: string,
}
// output caso sucesso (201 Created)
{
    quadra: {
        id: string,
        nome: string,
        localizacao: string,
        capacidade: number,
        tipo: "indoor" | "outdoor",
        imagem: boolean,
        descricao?: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

------

## GET /api/quadra/:id

**Descrição**: Retorna os detalhes de uma quadra específica.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: Nenhuma.

```typescript
// output caso sucesso (200 OK)
{
    quadra: {
        id: string,
        nome: string,
        localizacao: string,
        capacidade: number,
        tipo: "indoor" | "outdoor",
        imagem: boolean,
        descricao?: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [quadra_id_not_found](./8-erros.md#quadra_id_not_found)

------

## PUT /api/quadra/:id

**Descrição**: Atualiza os dados de uma quadra existente.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: Os dados da quadra são atualizados.

```typescript
// input
{
    nome?: string,
    localizacao?: string,
    capacidade?: number,
    tipo?: "indoor" | "outdoor",
    descricao?: string,
}
// output caso sucesso (200 OK)
{
    quadra: {
        id: string,
        nome: string,
        localizacao: string,
        capacidade: number,
        tipo: "indoor" | "outdoor",
        imagem: boolean,
        descricao?: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [quadra_id_not_found](./8-erros.md#quadra_id_not_found)

------

## DELETE /api/quadra/:id

**Descrição**: Exclui uma quadra específica.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: A quadra é excluída ou marcada como excluída.

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [quadra_id_not_found](./8-erros.md#quadra_id_not_found)

------

## GET /api/quadra/:id/imagem

**Descrição**: Retorna a imagem de uma quadra.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir, e a quadra deve ter uma imagem.

**Pós-Condições**: Nenhuma.

Em caso de sucesso, essa API retorna um `image/jpeg` com status `200 OK`.

```typescript
// output caso a quadra especificada não tenha uma imagem (404 Not Found)
{
    error: "quadra_imagem_not_found",
    description: "essa quadra não tem uma imagem",
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [quadra_id_not_found](./8-erros.md#quadra_id_not_found)

------

## PUT /api/quadra/:id/imagem

**Descrição**: Atualiza ou adiciona a imagem de uma quadra.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: A imagem da quadra é atualizada ou adicionada.

O corpo desta requisição deve ser um `image/jpeg`.

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [quadra_id_not_found](./8-erros.md#quadra_id_not_found)

------

## DELETE /api/quadra/:id/imagem

**Descrição**: Exclui a imagem de uma quadra, ou faz nada se a quadra não tiver imagem.

**Pré-Condições**: O usuário deve estar logado e convidado; o ID especificado deve existir.

**Pós-Condições**: Nenhuma.

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [quadra_id_not_found](./8-erros.md#quadra_id_not_found)