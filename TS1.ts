import {IMission} from './mission.interface';

const newMission: IMission = {
    mission_name: 'First-mission',
    launch_date_local: '07-02-2022',
    launch_site: {
        site_name_long: 'owu.com.ua',
    },
    links: {
        article_link: null,
        video_link: 'owu.com.ua',
    },
    rocket: {
        rocket_name: 'FullStack',
        first_stage: {
            cores: [{
                flight: 1,
                core: {
                    reuse_count: 2,
                    status: 'done'
                }
            }]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: 'kg',
                    payload_mass_kg: 1500644,
                    payload_mass_lbs: 154657887
                }
            ]
        }
    }
}

console.log(newMission);

////////////////////////////////////////////

interface IUser {
    name:string, age:number, gender:string
}

const someUser:IUser = {
    name: 'Max',
    age: 18,
    gender: 'male'
}

function sum(a:number,b:number):number{
    return a+b
}
function showSum(a:number,b:number):void{
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):IUser{
    someUser.age+=inc;
    return someUser;
}

console.log(sum(1, 2));
showSum(2,3)
incAge(someUser, 2)