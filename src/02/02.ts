//Student
type TechnologyType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    city: LocalCityType
    streetTitle: string
}


export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologyType>
}


export const student: StudentType = {
    id: 1,
    name: 'Nikita',
    age: 21,
    isActive: true,
    address: {
        city: {
            title: 'Novosibirsk',
            countryTitle: 'Russia'
        },
        streetTitle: 'Merlina 23'
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        }, {
            id: 2,
            title: 'CSS'
        }, {
            id: 3,
            title: 'React'
        },
    ]
}