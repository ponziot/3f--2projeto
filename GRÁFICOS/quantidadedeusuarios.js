async function quantidadedeusuarios(){

    const url =  'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await resultados.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadedeusuarios = Object.values(dados);

    const infos = [
      {
        x: nomeDasRedes,
        y: quantidadedeusuarios,
        type: 'bar'
      }
    ]
}
