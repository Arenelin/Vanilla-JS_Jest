//House test
type StreetType = {
    title: string
}

type AddressHouseType = {
    number?: number
    street: StreetType
}

type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressHouseType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}

//Government test
type GovernmentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressHouseType
}