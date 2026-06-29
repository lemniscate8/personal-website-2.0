import { Timeline, TimelineItem, TimelinePoint, TimelineTitle, TimelineTime, TimelineContent } from "flowbite-react"
import LinkPill from "./LinkPill"

type resumeItem = {
    startDate: string,
    endDate: string | undefined,
    location: string | undefined,
    employer: string | undefined,
    title: string,
    titleDetail: string | undefined
    category: string
    tags: string[] | undefined
    description: string[]
    links: { label: string, source: string }[] | undefined
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
