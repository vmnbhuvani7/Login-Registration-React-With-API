import { resolve } from 'path';
import React from 'react'


// const pobj1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4, 5];
//         resolve(roll_no);
//     }, 2000)
// })

// const getBiodata = (index) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((index) => {
//             let biodata = {
//                 name: 'vmn',
//                 age: 26
//             }
//             resolve(`my roll no ${index} name ${biodata.name} age ${biodata.age}`)
//         }, 2000, index)
//     })
// }


// pobj1.then((rollno) => {
//     console.log(rollno);
//     return getBiodata(rollno[1]);
// })
//     .then((kuchbhi) => {
//         console.log(kuchbhi);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// // async function getData() {
// //     const rollnodata = await pobj1;
// //     console.log(rollnodata);

// //     const biodatas = await getBiodata(rollnodata[1]);
// //     console.log(biodatas);
// // }
// // getData();


function PromiseEx() {
    return (
        <div>
            <p>hhii</p>helli
        </div>
    )
}

export default PromiseEx
