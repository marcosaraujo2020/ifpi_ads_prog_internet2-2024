# Entidade equipe

- [Entidade equipe](#entidade-equipe)
  - [GET /api/equipe](#get-apiequipe)
  - [PUT /api/equipe/:id](#put-apiequipeid)
  - [GET /api/equipe/:id](#get-apiequipeid)
  - [DELETE /api/equipe/:id](#delete-apiequipeid)
  - [POST /api/equipe](#post-apiequipe)
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

## PUT /api/equipe/:id

**Descrição**: Atualiza os dados de uma equipe

**Pré-Condições**: O usuário tem que estar logado e convidado, o id especificado tem que existir, o usuário logado deve ser o dono da equipe

**Pós-Condições**: Os dados da equipe são atualizados

```typescript
// input
{
    nome: string,
    participantes?: string[],
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

**Outros erros**: [unauthorized](./8-erros.md#unauthorized), [forbidden](./8-erros.md#forbidden), [equipe_id_not_found](./8-erros.md#equipe_id_not_found)

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

## DELETE /api/equipe/:id

## POST /api/equipe

## GET /api/equipe/:id/imagem
## PUT /api/equipe/:id/imagem
## DELETE /api/equipe/:id/imagem

