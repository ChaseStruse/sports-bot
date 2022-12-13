type BotMessageProps = {
    userSelection: string;
}

export default function BotMessage(props: BotMessageProps) {
    return(
        <div>
            <p>{props.userSelection}</p>
            <p>Test</p>
        </div>
    )
}