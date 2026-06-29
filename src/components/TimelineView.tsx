import { Timeline, TimelineItem, TimelinePoint, TimelineTitle, TimelineTime, TimelineContent } from "flowbite-react"
import LinkPill from "./LinkPill"
import { LiaChalkboardTeacherSolid, LiaMicroscopeSolid, LiaStar } from "react-icons/lia";
import { FiTerminal } from "react-icons/fi";
import { GoMortarBoard } from "react-icons/go";
import type { IconType } from "react-icons";

type resumeItem = {
    startDate: string,
    endDate?: string,
    location?: string,
    employer?: string,
    title: string,
    titleDetail?: string
    category?: string
    tags?: string[]
    description?: string[]
    links?: { label: string, source: string }[] | undefined
}

const iconMaps: { [keys: string]: IconType } = {
    "Research": LiaMicroscopeSolid,
    "Teaching": LiaChalkboardTeacherSolid,
    "Development": FiTerminal,
    "Personal Projects": LiaStar,
    "Credential": GoMortarBoard
}

function TimelineView({ experience }: { experience: resumeItem[] }) {
    return <Timeline>
        {experience.map((item) => (<TimelineItem>
            <TimelinePoint icon={item.category ? iconMaps[item.category] : undefined} />
            <TimelineContent>
                <TimelineTime>{item.startDate}{item.endDate && " - " + item.endDate}</TimelineTime>
                <TimelineTitle>{item.title}{item.titleDetail && <span className="font-normal">{item.titleDetail}</span>}</TimelineTitle>
                <em>{item.employer}</em>
                {item.description &&
                    <ul className="list-disc pl-4">
                        {item.description.map((sentence) => <li>{sentence}</li>)}
                    </ul>
                }
                {item.links && <div className="mt-1 flex gap-2 flex-wrap">{item.links.map((alink) => <LinkPill href={alink.source}>{alink.label}</LinkPill>)}</div>}
            </TimelineContent>
        </TimelineItem>))}
    </Timeline>
}


export default TimelineView
