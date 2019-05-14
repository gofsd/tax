export const tax_host = "http://ec2-13-59-77-231.us-east-2.compute.amazonaws.com:4000";
export const dictionaries = "/api/tax/dictionary";

//post request - {username:"test",password:"test", device_id: "xxxxxxxx"}
export const auth = "/api/users/authenticate";
//with Authorization header key and value like this: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NTcxMzI3MDQsImV4cCI6MTU1NzczNzUwNCwiaWF0IjoxNTU3MTMyNzA0fQ.JiRs-FUW8kiWi22GQ2-17ph8dXz-2U-l-nrxYcjb8ck
//from auth
export const users = "/api/users";
//post
//response
// {
//     "forestries": [
//         {
//             "kalg": 13050101,
//             "kaig": 1
//         },
//         {
//             "kalg": 13461104,
//             "kaig": 7
//         },
//         {
//             "kalg": 13180618,
//             "kaig": 5
//         }
//     ]
// }
export const forestries = "/api/tax/profile";
//post data from forestries
// {
//     "table": 'M10',
//     "kalg": 13050101,
//     "kaig": 1
// }
export const layout = "/api/tax/data";

export const saveLayouts = "/api/tax/data/save";

