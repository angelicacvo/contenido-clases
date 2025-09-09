// creation of type Person who have 3 attributes
type Person =
    {
        name: string,
        age: number,
        human: boolean
    }

// Validation of an empty string, if it's empty is invalid, else is valid
type verifyString<Attribute> = Attribute extends "" ? "INVALID" : "VALID";
// Validation of a number and if the number is 
type verifyAge<Attribute> = Attribute extends number ? (Attribute extends 19 | 20 | 21 | 22  ? "VALID" : "INVALID") : "INVALID";
type verifyHuman<Attribute> = Attribute extends true ? "VALID" : "INVALID"

type AND<A, B, C> = A extends "VALID"
    ? B extends "VALID"
    ? C extends "VALID"
    ? "VALID" : "INVALID"
    : "INVALID"
    : "INVALID"

type validationPerson = AND<verifyString<"Angelica">, verifyAge<24>, verifyHuman<true>>
type validationPerson2 = AND<verifyString<"">, verifyAge<20>, verifyHuman<true>>
type validationPerson3 = AND<verifyString<"Angelica">, verifyAge<19>, verifyHuman<true>>
type validationPerson4 = AND<verifyString<"Angelica">, verifyAge<20>, verifyHuman<false>>

