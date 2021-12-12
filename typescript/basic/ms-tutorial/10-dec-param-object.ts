interface Message {
    text: string;
    sender: String;
}

let msg = ({text, sender}: Message): any => {
    console.log('Message from', sender, ":", text)
}

msg({text: 'Hello my friend', sender: 'Ihor Tym'});