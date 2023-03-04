import { parseISO, format, parse } from 'date-fns'

type Props = {
    dateString: string,
    className?: string,
    formatString?: string
}

const DateFormatter = ({ dateString, className, ...props }: Props) => {
    // const date = parse(dateString, 'u-M-dd', new Date());
    const date = parseISO(dateString);
    // {dateString}
    return <time className={`${className} whitespace-nowrap `} dateTime={dateString}>{format(date, props.formatString ? props.formatString : 'LLLL	d, yyyy')}</time>
    // return JSON.stringify(date)
}

export default DateFormatter