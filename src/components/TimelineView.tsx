import { Timeline, TimelineItem, TimelinePoint, TimelineTitle, TimelineTime, TimelineContent } from "flowbite-react"
import LinkPill from "./LinkPill"

type resumeItem = {
    startDate: string,
    endDate?: string,
    location?: string,
    employer?: string,
    title: string,
    titleDetail?: string
    category?: string
    tags?: string[]
    description: string[]
    links?: { label: string, source: string }[] | undefined
}

function TimelineView({ experience }: { experience: resumeItem[] }) {
    return <Timeline>
        {experience.map((item) => (<TimelineItem>
            <TimelinePoint />
            <TimelineContent>
                <TimelineTime>{item.startDate}{item.endDate && " - " + item.endDate}</TimelineTime>
                <TimelineTitle>{item.title}{item.titleDetail && <span className="font-normal">{item.titleDetail}</span>}</TimelineTitle>
                <em>{item.employer}</em>
                <ul className="list-disc pl-4">
                    {item.description.map((sentence) => <li>{sentence}</li>)}
                </ul>
                {item.links && <div className="mt-1 flex gap-2 flex-wrap">{item.links.map((alink) => <LinkPill href={alink.source}>{alink.label}</LinkPill>)}</div>}
            </TimelineContent>
        </TimelineItem>))}
    </Timeline>
}


export default TimelineView
