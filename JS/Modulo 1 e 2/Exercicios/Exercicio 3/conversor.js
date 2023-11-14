const lenghtInMeters = parseFloat(prompt("Digite o comprimento em METROS que você deseja converter."))
const conversionUnit = parseFloat(prompt("Digite as unidade de converção desejada:\n\n1. Milímetro (MM)\n2. Centímetro (CM)\n3. Decímetro (DM)\n4. Decâmetro (DAM)\n5. Hectômetro (HM)\n6. Quilômetro (KM)"))

switch (conversionUnit) {
    case 1:
        alert(`Resultado:\n${lenghtInMeters} Metros = ${lenghtInMeters * 1000} Milímetros`)
        break;
    case 2:
        alert(`Resultado:\n${lenghtInMeters} Metros = ${lenghtInMeters * 100} Centímetros`)
        break;
    case 3:
        alert(`Resultado:\n${lenghtInMeters} Metros = ${lenghtInMeters * 10} Decímetros`)
        break;
    case 4:
        alert(`Resultado:\n${lenghtInMeters} Metros = ${lenghtInMeters / 10} Decâmetros`)
        break;
    case 5:
        alert(`Resultado:\n${lenghtInMeters} Metros = ${lenghtInMeters / 100} Hectômetros`)
        break;
    case 6:
        alert(`Resultado:\n${lenghtInMeters} Metros = ${lenghtInMeters / 1000} Quilômetros`)
        break;
    default:
        alert("Não consegui identificar a unidade de medida! \n\nENCERRANDO PROGRAMA...")
}