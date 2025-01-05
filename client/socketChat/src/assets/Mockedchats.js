
const chatDB = [
    {
        chatId:1,
        chatRoomName:'private-adele-bar_amos',
        isGroup:false,
        messaagesList:[],
        Participants:[
            {
                id : 25,
                userName:"Bar-amos",
                userAvatar: '../src/assets/men logo.png',
                email:'boby@gmail.com',
                isFemale:'false'
            },
            {
                id : 22,
                userName:"Adele",
                userAvatar: '../src/assets/women logo.png',
                email:'adele@gmail.com',
                isFemale:'true'
            }
        ]
    },
    {
        chatId:5,
        chatRoomName:'Public group',
        isGroup:true,
        messaagesList:[],
        Participants:[
            {
                id : 25,
                userName:"Bar-amos",
                userAvatar: '../src/assets/men logo.png',
                email:'boby@gmail.com',
                isFemale:'false'
            },
            {
                id : 22,
                userName:"Adele",
                userAvatar: '../src/assets/women logo.png',
                email:'adele@gmail.com',
                isFemale:'true'
            },
            {
                id : 30,
                userName:"Daniel",
                userAvatar: '../src/assets/men logo.png',
                email:'danielRayfer@gmail.com',
                isFemale:'false'
            }
        ]
    }
];

export default chatDB;