# Erros

Esse arquivo documenta erros compartilhados por várias apis

### bad_request

output caso o corpo do request não esteja de acordo com o especificado aqui (400 Bad Request)

esse erro pode ocorrer em todas as apis que recebem json

```typescript
{
    error: "bad_request",
    description: "não foi possível concluir essa operação agora",
    technical_error: string,
}
```

-----

### bad_credentials

output caso você informe um usuário e senha inválido (401 Unauthorized)

```typescript
{
    error: "bad_credentials",
    description: "informe um usuário e senha já cadastrados no sistema",
}
```

-----

### unauthorized

output caso você não esteja autenticado (401 Unauthorized)

esse erro ocorre quando você não envia o cookie de sessão para o servidor, quando seu cookie expira ou quando ele está em um formato inválido

```typescript
{
    error: "unauthorized",
    description: "você não tem acesso a esse recurso, tente logar novamente",
}
```

-----

### forbidden

output caso você não tenha acesso ao recurso (403 Forbidden)

esse erro ocorre quando você não está autenticado mas suas credenciais não permitem que você acesse ou altere um recurso

```typescript
{
    error: "forbidden",
    description: "você não tem acesso a esse recurso",
}
```

-----

### usuario_id_not_found

output caso você não especifique um id de usuário que não existe (404 Not Found)

```typescript
{
    error: "usuario_id_not_found",
    description: "esse usuário não existe",
}
```

-----

### equipe_id_not_found

output caso você não especifique um id de equipe que não existe (404 Not Found)

```typescript
{
    error: "equipe_id_not_found",
    description: "essa equipe não existe",
}
```

-----

### partida_id_not_found

output caso você não especifique um id de partida que não existe (404 Not Found)

```typescript
{
    error: "partida_id_not_found",
    description: "essa partida não existe",
}
```

-----

### arena_id_not_found

output caso você não especifique um id de arena que não existe (404 Not Found)

```typescript
{
    error: "arena_id_not_found",
    description: "essa arena não existe",
}
```

-----

### quadra_id_not_found

output caso você não especifique um id de quadra que não existe (404 Not Found)

```typescript
{
    error: "quadra_id_not_found",
    description: "essa quadra não existe",
}
```
