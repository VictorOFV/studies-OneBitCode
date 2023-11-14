const dayJs = require("dayjs")

function dateConverter(date){
    const dateOfBith = dayJs(date) 
    const dateNow = dayJs()
    const birthday = dayJs(`${dateNow.year()}-${dateOfBith.month() + 1}-${dateOfBith.date()}`)
    const nextBirthday = dayJs(`${dateNow.year() + 1}-${dateOfBith.month() + 1}-${dateOfBith.date()}`) 

    let age = dateNow.year() - dateOfBith.year() 
    let daysNextBithday;

    if(dateNow > birthday){
        daysNextBithday = nextBirthday.diff(dateNow, "days")
        return `Faltam ${daysNextBithday} dias para o seu aniversário! na data ${nextBirthday.format("DD/MM/YYYY")} você ira fazer ${age + 1} anos, atualmente você tem ${age} anos.`
    }else{
        daysNextBithday = birthday.diff(dateNow, "days")
        return `Faltam ${daysNextBithday} dias para o seu aniversário! na data ${birthday.format("DD/MM/YYYY")} você ira fazer ${age} anos, atualmente você tem ${age - 1} anos.`
    }
}

console.log(dateConverter("2002-08-19"))

function dateConverter2(date){
    const dateOfBith = dayJs(date)
    const dateNow = dayJs()
    const age = dateNow.diff(dateOfBith, "year")
    const birthday = dateOfBith.add(age, "year")
    const nextBirthday = birthday.add(1, "year")
    const daysDiff = nextBirthday.diff(dateNow, "days")

    console.log(`Idade: ${age}`)
    console.log(`Data de aniversário: ${birthday.format("DD/MM/YYYY")}`)
    console.log(`Próximo Aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Faltam ${daysDiff} dias para você compeltar ${age + 1}`)
}

dateConverter2("2002-08-20")
