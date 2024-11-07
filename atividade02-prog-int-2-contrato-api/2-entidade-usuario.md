# Entidade usuário

- [Entidade usuário](#entidade-usuário)
  - [GET /api/usuario](#get-apiusuario)
  - [PUT /api/usuario](#put-apiusuario)
  - [GET /api/usuario/:id](#get-apiusuarioid)
  - [GET /api/usuario/:id/imagem](#get-apiusuarioidimagem)
  - [PUT /api/usuario/imagem](#put-apiusuarioimagem)
  - [DELETE /api/usuario/imagem](#delete-apiusuarioimagem)

## GET /api/usuario

**Descrição**: Lista todos os usuários

**Pré-Condições**: O usuário tem que estar logado e convidado

**Pós-Condições**: Nenhuma

```typescript
// output caso sucesso (200 OK)
{
    usuarios: {
        id: string,
        nome: string,
        image: boolean,
        nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
        genero: "masculino" | "feminino" | null,
        apagado: boolean,
    }[],
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

------

## PUT /api/usuario

**Descrição**: Atualiza os dados do usuário

**Pré-Condições**: O usuário tem que estar logado e convidado

**Pós-Condições**: Os dados do usuário são atualizados

```typescript
// input
{
    nome?: string,
    nivel?: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
    genero?: "masculino" | "feminino" | null,
}
// output caso sucesso (200 OK)
{
    usuario: {
        id: string,
        nome: string,
        image: boolean,
        nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
        genero: "masculino" | "feminino" | null,
        apagado: boolean,
    },
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request) [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

------

## GET /api/usuario/:id

**Descrição**: Retorna um usuário

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir

**Pós-Condições**: Nenhuma

```typescript
// output caso sucesso (200 OK)
{
    usuario: {
        id: string,
        nome: string,
        image: boolean,
        nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
        genero: "masculino" | "feminino" | null,
        apagado: boolean,
    },
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [usuario_id_not_found](./8-erros.md#usuario_id_not_found)

------

## GET /api/usuario/:id/imagem

**Descrição**: Retorna a imagem do usuário

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir, o usuário especificado deve ter imagem

**Pós-Condições**: Nenhuma

em caso de sucesso, essa api retorna um `image/jpeg` com status `200 OK`

```typescript
// output caso o usuário especificado não tenha uma imagem de perfil (404 Not Found)
{
    error: "usuario_imagem_not_found",
    description: "esse usuário não tem uma imagem de perfil",
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [usuario_id_not_found](./8-erros.md#usuario_id_not_found)

------

## PUT /api/usuario/imagem

**Descrição**: Exclui a imagem do usuário, ou faz nada se o usuário não tiver imagem

**Pré-Condições**: O usuário tem que estar logado e convidado

**Pós-Condições**: Nenhuma

o corpo dessa requisição tem que ser um `image/jpeg`

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

------

## DELETE /api/usuario/imagem

**Descrição**: Exclui a imagem do usuário, ou faz nada se o usuário não tiver imagem

**Pré-Condições**: O usuário tem que estar logado e convidado

**Pós-Condições**: Nenhuma

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)
