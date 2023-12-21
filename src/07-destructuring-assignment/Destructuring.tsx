import React, {useState} from 'react';

type TechnologyType = {
    id: number
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: { title: string; name?: string }[]
    technologies: TechnologyType[]
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: { model: string }
}
export const Destructuring: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man: {name}} = props;
    //  const {title, man, ...rest} = props;
    const [value, setValue] = useState<string>('');

    return (
        <div>
            {/*<h1>{props.title}</h1>*/}
            <h1>{title}</h1>
            <hr/>
            <div>
                {/*{props.man.name}*/}
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
            <div>
                {props.food}
            </div>
        </div>
    );
};

