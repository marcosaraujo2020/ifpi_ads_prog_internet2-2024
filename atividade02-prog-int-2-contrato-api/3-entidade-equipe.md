# Entidade equipe

- [Entidade equipe](#entidade-equipe)
  - [GET /api/equipe](#get-apiequipe)
  - [POST /api/equipe](#post-apiequipe)
  - [GET /api/equipe/:id](#get-apiequipeid)
  - [PUT /api/equipe/:id](#put-apiequipeid)
  - [DELETE /api/equipe/:id](#delete-apiequipeid)
  - [GET /api/equipe/:id/imagem](#get-apiequipeidimagem)
  - [PUT /api/equipe/:id/imagem](#put-apiequipeidimagem)
  - [DELETE /api/equipe/:id/imagem](#delete-apiequipeidimagem)

## GET /api/equipe

**Descrição**: Lista todas as equipes

**Pré-Condições**: O usuário tem que estar logado e convidado

**Pós-Condições**: Nenhuma

```typescript
// output caso sucesso (200 OK)
{
    equipes: {
        id: string,
        nome: string,
        image: boolean,
        participantes: {
            id: string,
            nome: string,
            image: boolean,
            nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
            genero: "masculino" | "feminino" | null,
            apagado: false,
        }[],
        nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
        genero: "masculino" | "feminino" | null,
        dono_usuario_id: string,
        apagado: boolean,
    }[],
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

## POST /api/equipe

**Descrição**: Cria uma nova equipe

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir

**Pós-Condições**: A nova equipe é criada

```typescript
// input
{
    nome: string,
    participantes: string[],
    nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
    genero: "masculino" | "feminino" | null,
}
// output caso sucesso (200 OK)
{
    equipe: {
        id: string,
        nome: string,
        image: boolean,
        participantes: {
            id: string,
            nome: string,
            image: boolean,
            nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
            genero: "masculino" | "feminino" | null,
            apagado: false,
        }[],
        nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
        genero: "masculino" | "feminino" | null,
        dono_usuario_id: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden)

## GET /api/equipe/:id

**Descrição**: Retorna uma equipe

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir

**Pós-Condições**: Nenhuma

```typescript
// output caso sucesso (200 OK)
{
    equipe: {
        id: string,
        nome: string,
        image: boolean,
        participantes: {
            id: string,
            nome: string,
            image: boolean,
            nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
            genero: "masculino" | "feminino" | null,
            apagado: false,
        }[],
        nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
        genero: "masculino" | "feminino" | null,
        dono_usuario_id: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [equipe_id_not_found](./8-erros.md#equipe_id_not_found)

## PUT /api/equipe/:id

**Descrição**: Atualiza os dados de uma equipe

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir, o usuário logado deve ser o dono da equipe

**Pós-Condições**: Os dados da equipe são atualizados

```typescript
// input
{
    nome?: string,
    participantes?: string[],
    nivel?: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
    genero?: "masculino" | "feminino" | null,
}
// output caso sucesso (200 OK)
{
    equipe: {
        id: string,
        nome: string,
        image: boolean,
        participantes: {
            id: string,
            nome: string,
            image: boolean,
            nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
            genero: "masculino" | "feminino" | null,
            apagado: false,
        }[],
        nivel: "iniciante" | "amador" | "bom" | "profissional" | "excelente" | null,
        genero: "masculino" | "feminino" | null,
        dono_usuario_id: string,
        apagado: boolean,
    },
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [equipe_id_not_found](./8-erros.md#equipe_id_not_found)

## DELETE /api/equipe/:id

**Descrição**: Apaga uma equipe

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir

**Pós-Condições**: Nenhuma

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [equipe_id_not_found](./8-erros.md#equipe_id_not_found)

## GET /api/equipe/:id/imagem

**Descrição**: Retorna a imagem da equipe

**Pré-Condições**: A equipe tem que estar logado e convidado, o id especificado tem que existir, a equipe especificada deve ter imagem

**Pós-Condições**: Nenhuma

em caso de sucesso, essa api retorna um `image/jpeg` com status `200 OK`

```typescript
// output caso a equipe especificada não tenha uma imagem de perfil (404 Not Found)
{
    error: "equipe_imagem_not_found",
    description: "esse equipe não tem uma imagem de perfil",
}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [equipe_id_not_found](./8-erros.md#equipe_id_not_found)

## PUT /api/equipe/:id/imagem

**Descrição**: Exclui a imagem da equipe, ou faz nada se a equipe não tiver imagem

**Pré-Condições**: A equipe tem que estar logado e convidado

**Pós-Condições**: Nenhuma

o corpo dessa requisição tem que ser um `image/jpeg`

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [bad_request](./8-erros.md#bad_request), [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [equipe_id_not_found](./8-erros.md#equipe_id_not_found)

## DELETE /api/equipe/:id/imagem

**Descrição**: Exclui a imagem da equipe, ou faz nada se a equipe não tiver imagem

**Pré-Condições**: A equipe tem que estar logado e convidado

**Pós-Condições**: Nenhuma

```typescript
// output caso sucesso (200 OK)
{}
```

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [forbidden](./8-erros.md#forbidden)
