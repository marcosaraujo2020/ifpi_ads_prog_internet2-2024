# Autenticação

- [Autenticação](#autenticação)
  - [POST /api/signin](#post-apisignin)
  - [POST /api/login](#post-apilogin)
  - [POST /api/logoff](#post-apilogoff)
  - [POST /api/signoff](#post-apisignoff)

## POST /api/signin

**Descrição**: Cria uma nova conta de usuário

**Pré-Condições**: Nenhuma

**Pós-Condições**: O usuário é criado, uma sessão é criada e é envidada para o cliente por meio de um cookie

```typescript
// input
{
    nome: string,
    email: string,
    senha: string,
    nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
    genero: "masculino" | "feminino" | null,
}
// output caso sucesso (200 OK)
{}
// output caso nome já exista (409 Conflict)
{
    error: "nome_already_exists",
    description: "esse nome de usuário já está sendo usado, tente escolher outro"
}
// output caso email já existente (409 Conflict)
{
    error: "email_already_exists",
    description: "esse email já foi cadastrado, tente logar com esse email ao invés de criar uma conta"
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request)

-----

## POST /api/login

**Descrição**: Cria uma nova sessão

**Pré-Condições**: O usuário deve existir e não estar apagado

**Pós-Condições**: Uma sessão é criada e é envidada para o cliente por meio de um cookie

```typescript
// input
{
    email: string,
    senha: string,
}
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [bad_credentials](./8-erros.md#bad_credentials)

-----

## POST /api/logoff

**Descrição**: Encerra uma sessão

**Pré-Condições**: O usuário tem que estar logado

**Pós-Condições**: A sessão é encerrada

```typescript
// input
{}
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized)

-----

## POST /api/signoff

**Descrição**: Apagar a conta do usuário

**Pré-Condições**: O usuário deve existir e não estar apagado

**Pós-Condições**: O usuário é marcado como apagado

```typescript
// input
{
    email: string,
    senha: string,
}
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [bad_credentials](./8-erros.md#bad_credentials)
