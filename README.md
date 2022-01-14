## Projeto de Galeria de Fotos com o Firebase

## Projeto como atividade do curso de React da B7web

#### Comandos

- npx create-react-app gallery --template typescript
- npm i styled-components
- npm i -D @types/styled-components
- npm i firebase
- npm i uuid
- npm i -D @types/uuid


#### Obs.
- nunca executa codigo assincrono diretamente no useEffect, cria uma funcao e depois a chama no useEffect
- Funcionalidade de deleção implementada

#### file-upload-button customizado
- css adicionado no App.css
```
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
  padding: 8px 16px;
  border-radius: 10px;
  color: blue;
  background-color: #ccc;
  border: 2px solid blue;
  font-weight: bold;
  font-size: 16px;
}

::-webkit-file-upload-button:hover {
  font: inherit;
  -webkit-appearance: button;
  padding: 8px 16px;
  border-radius: 10px;
  color: #fff;
  background-color: blue;
  border: 2px solid #fff;
  font-weight: bold;
  font-size: 16px;
}
```
