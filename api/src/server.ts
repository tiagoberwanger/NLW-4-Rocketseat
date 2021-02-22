import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.json({message: "#rumoaoproximonivel"})
})

app.post('/', (req, res) => {
  return res.json({message: "os dados foram salvos com sucesso!!!"})
})

app.listen(3333, ()=> console.log("server is running!"));