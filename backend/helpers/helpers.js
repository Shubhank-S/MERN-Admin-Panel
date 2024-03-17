import bcrypt from "bcryptjs";

export const hashingPassword = async (password) => {
    try {
        const round = 10
        const hashedPassword = await bcrypt.hash(password, round)
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword = async (password, hashPassword) => {
    return bcrypt.compare(password, hashPassword)
}