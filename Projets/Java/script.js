
let index = 1
const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
]

let patientsNames = []
let patientWeight = []

function calcIMC(weight, height) {
  return ((weight) / ((height / 100)**2)).toFixed(2)
}


for(let patient of patients) {
  patientsNames.push(alert(`Paciente ${index++}:
  Nome: ${patient.name}
  Idade: ${patient.age}
  Peso: ${patient.weight} kg
  Altura: ${patient.height} cm
  IMC: ${calcIMC(patient.weight, patient.height)}`))

}
