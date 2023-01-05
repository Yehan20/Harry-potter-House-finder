import g from '../../images/g.png';
import hm from '../../images/hm.png';
import r from '../../images/r.png';
import h from '../../images/h.png';
import s from '../../images/s.png';
export const   Houses = [
    {
        id: 1,
        name: 'No House',
        description: 'Sorry you cannot be sorted into a house you should go home !!!',
        color: ['#ccc', '#ccc'],
        max:40,
        min:0,
        path:hm

    },

    {
        id: 2,
        name: 'HufflePuff',
        description: 'You are loyal Friendly and like stay out of harms way. maybe you are not the smartest or strongest but have a huge heart',
        color: ['#E9AC2D', '#60605c'],
        max:80,
        min:40,
        path:h
    },
    {
        id: 3,
        name: 'RavenClaw',
        description: 'You are too smart and sensetive and have much knowledge. you are a great strategist and you can keep your group on the right track',
        color: ['#0b0f42', '#221300'],
        max:100,
        min:80,
        path:r
    },
    {
        id: 4,
        name: 'Griffindor',
        decsription: 'You are daring brave and ditermined. You are a born leader and fight for whats just. You always stand next to family and friends',
        color: ['#f91313', '#692a00'],
        max:120,
        min:100,
        path:g
    },
    {
        id: 5,
        name: 'Slytherin',
        description: 'You are cunning and ingenious. you have a ambition for power. You enjoy revenge and no one can stop you when you have an objective !!.',
        color: ['#009403', '#002f01'],
        max:160,
        min:120,
        path:s
    }
]