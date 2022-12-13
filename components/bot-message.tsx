

type BotMessageProps = {
    userSelection: string;
}

messageContent: '';

 const SendMessage = async() => {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.58&longitude=-93.71&hourly=temperature_2m')
    const data = await res.json()
    const parsed = JSON.parse(data)
    return 'test'
}

export default async function BotMessage(props: BotMessageProps) {
    return(
        <div>
            <p>{props.userSelection}</p>
            <p>{await SendMessage()}</p>
        </div>
    )
}