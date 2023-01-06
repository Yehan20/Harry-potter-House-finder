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
        max:70,
        min:0,
        path:hm

    },

    {
        id: 2,
        name: 'HufflePuff',
        description: 'You are loyal Friendly and like stay out of harms way. maybe you are not the smartest or strongest but have a huge heart',
        color: ['#E9AC2D', '#60605c'],
        max:150,
        min:80,
        path:h
    },
    {
        id: 3,
        name: 'RavenClaw',
        description: 'You are too smart and sensetive and have much knowledge. you are a great strategist and you can keep your group on the right track',
        color: ['#0e0990', '#221300'],
        max:240,
        min:160,
        path:r
    },
    {
        id: 4,
        name: 'Griffindor',
        description: 'You are daring brave and ditermined. You are a born leader and fight for whats just. You always stand next to family and friends',
        color: ['#f91313', '#692a00'],
        max:320,
        min:250,
        path:g
    },
    {
        id: 5,
        name: 'Slytherin',
        description: 'You are cunning and ingenious. you have a ambition for power. You enjoy revenge and no one can stop you when you have an objective !!.',
        color: ['#009403', '#002f01'],
        max:440,
        min:330,
        path:s
    }
]