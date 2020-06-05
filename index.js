const axios = require('axios')
require('dotenv').config()

let ROOM_CODE = process.env.ROOM_CODE
let MEMBER_ID = process.env.MEMBER_ID

const states = ["在席", "退社", "取込中", "離席", "外出", "休暇", "会議中", "帰社", "社外研修", "社内研修", "在宅勤務"]

const url = `https://iruca.co/api/rooms/${ROOM_CODE}/members/${MEMBER_ID}`

if (process.argv.length < 3) {
    console.log('needs target status.')
    process.exit(-1)
}

if (!states.includes(process.argv[2])) {
    console.log('unsupported status : ' + process.argv[2])
    process.exit(-1)
}

axios.put(url, {
    status: process.argv[2]
})
.catch(function (error) {
    console.log(error)
    process.exit(-1)
})

