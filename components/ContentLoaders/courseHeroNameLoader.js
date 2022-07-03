import ContentLoader from "react-content-loader";

export default function CourseHeroNameLoader(props) {
    return (
        <ContentLoader
            speed={2}
            width={600}
            height={217}
            viewBox="0 0 600 217"
            backgroundColor="#ef0000"
            foregroundColor="#ffffff"
            {...props}
        >
            <rect x="0" y="30" rx="3" ry="3" width="250" height="50" />
            <rect x="0" y="97" rx="3" ry="3" width="330" height="50" />
            <rect x="0" y="165" rx="3" ry="3" width="400" height="60" />
        </ContentLoader>
    )

}