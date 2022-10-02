# Desafio Proxy Reverso Nginx com Node.js

Desafio apresentado no curso Full Cycle (módulo Docker).

O desafio consiste em utilizar o nginx como proxy reverso para que  quando um usuário acessar o nginx, o mesmo fazer uma chamada em nossa aplicação node.js.

Essa aplicação por sua vez adicionará um registro em nosso banco de dados (MySQL), cadastrando nomes na tabela people. 

Em seguida, a página deve mostrar uma lista com os nomes cadastrados no banco.


---

### Para rodar a aplicação utilize o docker-compose.

```
docker-compose up -d 
```

Dentro de alguns instantes a aplicação estará no ar.

---

### Para acessar, digite o seguinte endereço no navegador:

[http://localhost:8080/](http://localhost:8080/)

---
OBS: caso apresente erro 502, aguarde mais alguns segundos e atualize a página.