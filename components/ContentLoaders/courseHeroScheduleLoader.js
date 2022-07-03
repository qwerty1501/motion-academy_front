import ContentLoader from "react-content-loader";

export default function CourseHeroScheduleLoader(props) {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={50}
            viewBox="0 0 400 50"
            backgroundColor="#ef0000"
            foregroundColor="#ffffff"
            {...props}
        >
            <rect x="0" y="0" rx="3" ry="3" width="210" height="20" />
            <rect x="0" y="30" rx="3" ry="3" width="50" height="20" />
        </ContentLoader>
    )

}