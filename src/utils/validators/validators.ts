export const required = (value: string) => {
    return value ? undefined : "This field is required"
}

export const maxLenghtCreator = (maxLenght: number) => {
    return (value: string) => {
        return value.length > maxLenght ? `Error, max length is ${maxLenght} symbols` : undefined
    }
}