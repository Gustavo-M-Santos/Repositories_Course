let optionMenu = 0
const students = [

]

while (optionMenu != 3) {
  optionMenu = Number(prompt(`
  Escolha uma das opções:
    1° - Adicionar um aluno.
    2° - Ver a lista de aprovados e Reprovados.
    3° - Cancelar operação.
  `))

  switch (optionMenu) {
    case 1:
      const name = prompt('Qual é o nome do Aluno')
      const sobName = prompt('Qual é o sobre nome do Aluno')
      const noteBi1 = Number(prompt('Digite a nota do 1° bimestre'))
      const noteBi2 = Number(prompt('Digite a nota do 2° bimestre'))
      const noteBi3 = Number(prompt('Digite a nota do 3° bimestre'))
      const noteBi4 = Number(prompt('Digite a nota do 4° bimestre'))
      const average = (noteBi1 + noteBi2 + noteBi3 + noteBi4) / 4
      const passed = average >= 7

      const student = {
        name,
        sobName,
        noteBi1,
        noteBi2,
        noteBi3,
        noteBi4,
        average,
        passed,
      }

      students.push(student)

      alert('Aluno adicionado com sucesso!');
      break;
    case 2:
      while (true) {
        const subMenuOption = Number(prompt(`
          Escolha uma das opções:
          1 - Ver lista de aprovados
          2 - Ver lista de reprovados
          3 - Retornar ao menu principal
        `));

        switch (subMenuOption) {
          case 1:
            if(students.length == 0){
              alert('Nenhum aluno(a) encontrado. Por favor adicione alunos(a)')
            }else{
              const passedStudents  = students.filter(student => student.passed)
              for(const student of passedStudents){
                alert(`${student.name} teve uma média anual de ${student.average}.\n Meus parabéns voce passou de ano!`)
              }
            }
            break;

          case 2:

          if(students.length == 0){
            alert('Nenhum aluno(a) encontrado. Por favor adicione alunos(a)')
          }else{
            const failedStudents   = students.filter(student => !student.passed)
            for(const student of failedStudents){
              alert(`${student.name} teve uma média anual de ${student.average}.\n Me desculpe mas voce não passou de ano!`)
            }
          }

            break;

          case 3:
            alert('Retornando ao menu principal');
            break;

          default:
            alert('Opção inválida');
            break;
        }

        if (subMenuOption === 3) {
          break; // Sai do loop interno e retorna ao menu principal
        }
      }
      break;
    case 3:
      alert('operação encerrada')
      break;
    default:
      alert('operação invalida')
      break;
  }

}

