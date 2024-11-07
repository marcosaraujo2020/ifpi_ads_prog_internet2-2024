# Ações

## POST /api/usuario/convidar

**Descrição**: Convida outro usuário que ainda não foi convidado

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir

**Pós-Condições**: O usuário passa a ser um convidado

```typescript
// input
{
    email: string,
}
// output caso sucesso (200 OK)
{}
// output caso o email não esteja cadastrado, ou caso seja o email de um usuário já convidado (404 Not Found)
{
    error: "email_para_convite_not_found",
    description: "não encontramos nenhum usuário com esse email para convidar",
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

-----

## POST /api/partida/:id/confirmar

**Descrição**: Uma breve descrição do que essa api faz

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir

**Pós-Condições**: A partida muda status para confirmar

```typescript
// input
{
    partida_id: string,
}
// output caso sucesso (200 OK)
{}
// output caso o não seja possível mudar para esse status (409 Conflict)
{
    error: "invalid_partida_state_change",
    description: "não é possível voltar para esse estado",
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

-----

## POST /api/partida/:id/iniciar

**Descrição**: Uma breve descrição do que essa api faz

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir

**Pós-Condições**: A partida muda status para iniciar

```typescript
// input
{
    partida_id: string,
}
// output caso sucesso (200 OK)
{}
// output caso o não seja possível mudar para esse status (409 Conflict)
{
    error: "invalid_partida_state_change",
    description: "não é possível voltar para esse estado",
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

-----

## POST /api/partida/:id/terminar

**Descrição**: Uma breve descrição do que essa api faz

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir

**Pós-Condições**: A partida muda status para terminar
```typescript
// input
{
    partida_id: string,
}
// output caso sucesso (200 OK)
{}
// output caso o não seja possível mudar para esse status (409 Conflict)
{
    error: "invalid_partida_state_change",
    description: "não é possível voltar para esse estado",
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

-----

## POST /api/partida/:id/cancelar

**Descrição**: Uma breve descrição do que essa api faz

**Pré-Condições**: O que precisa para a api estar disponível

**Pós-Condições**: O que a api faz caso tenha dado certo

```typescript
// input
{
    partida_id: string,
}
// output caso sucesso (200 OK)
{}
// output caso o não seja possível mudar para esse status (409 Conflict)
{
    error: "invalid_partida_state_change",
    description: "não é possível voltar para esse estado",
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)
