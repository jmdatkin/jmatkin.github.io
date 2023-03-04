import { parseISO, format, parse } from 'date-fns'

type Props = {
    dateString: string,
    className?: string
}

const DateFormatter = ({ dateString, className }: Props) => {
    // const date = parse(dateString, 'u-M-dd', new Date());
    const date = parseISO(dateString);
    // {dateString}
    return <time className={className} dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
    // return JSON.stringify(date)
}

export default DateFormatter