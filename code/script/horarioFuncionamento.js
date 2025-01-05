export default class horarioFuncionamento {
  constructor(datAbre, dataFechado, dataSemana) {
    this.dataHorarioAbre = document.querySelector(datAbre);
    this.dataFechado = document.querySelector(dataFechado);
    this.dataSemana = document.querySelector(dataSemana);
  }

  CriarHorario() {
    const pegarData = new Date();
    const pegarHorario = pegarData.getUTCHours() - 3;
    this.transformarData(pegarData, pegarHorario);
  }

  transformarData(dataPega, horarioPego) {
    const diaSemana = this.dataSemana.dataset.semana.split(',').map(Number);
    const horarioSemana = this.dataHorarioAbre.dataset.horarioAbre
      .split(',')
      .map(Number);
    this.verificarHorario(diaSemana, horarioSemana, dataPega, horarioPego);
  }

  verificarHorario(diaSemana, horarioSemana, pegarData, horarioPego) {
    const abertoSemana = diaSemana.indexOf(pegarData);
    const abertoHorario =
      horarioPego > horarioSemana[0] && horarioPego < horarioSemana[1];
    this.ativarHorarioDeFuncionamento(abertoHorario, abertoSemana);
  }

  ativarHorarioDeFuncionamento(abertoHorario, abertoSemana) {
    console.log(abertoSemana);
    if (abertoHorario && abertoSemana !== -1) {
      this.dataFechado.style.backgroundColor = 'green';
    } else {
      this.dataFechado.style.backgroundColor = 'red';
    }
  }

  init() {
    this.CriarHorario();
  }
}
