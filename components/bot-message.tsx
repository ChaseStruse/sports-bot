type BotMessageProps = {
    userSelection: string;
}

messageContent: '';

const SendMessage = () => {
    return 'Testing'
}

export default function BotMessage(props: BotMessageProps) {
    return(
        <div>
            <p>{props.userSelection}</p>
            <p>{SendMessage()}</p>
        </div>
    )
}