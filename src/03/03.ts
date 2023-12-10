import {StudentType} from '../02/02';
import {CityType, GovernmentBuildingType, HouseType} from '../02/02_02';


export function addSkill(student: StudentType, skill: string) {
    student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export function changeStudentLive(s: StudentType, city: string) {
    return s.address.city.title === city;
}

export const changeBudget = (Building: GovernmentBuildingType, budget: number) => {
    Building.budget += budget;
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}
export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men.`
}