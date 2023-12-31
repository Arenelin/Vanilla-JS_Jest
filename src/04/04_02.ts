import {CityType, GovernmentBuildingType} from '../02/02_02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) =>
    city.houses = city.houses.filter(h => h.address.street.title !== street);


export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, staff: number) {
    return buildings.filter(b => b.staffCount > staff);
}