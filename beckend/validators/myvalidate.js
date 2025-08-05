import mongoose from "mongoose"

const myvalidate = {
    checkName: (name) => {
        if (!/^[a-zA-Zא-ת]$/)
            throw new Error("the name is not proper")
    },
    checkPass: (pass) => {
        if (pass.length < 8 || pass.length > 12)
            throw new Error("the pass is not proper")
    },
    checkPhone: (phone) => {
        if (!/^[0-9]$/)
            throw new Error("the phone is not proper")
        if (phone.length < 9 || phone.length > 10)
            throw new Error("the phone is not proper")
    },
    checkNameRacipy: (name) => {
        if (!/^[a-zA-Zא-ת]$/)
            throw new Error("the name is not proper")
    },
    checklevel: (level) => {
        if (!/קל קשה בינוני/)
            throw new Error(" the level is a Incompatible answer")
    },
    checktype: (type) => {
        if (!/חלבי בשרי פרוה/)
            throw new Error(" the type is a Incompatible answer")
    },
    

}
