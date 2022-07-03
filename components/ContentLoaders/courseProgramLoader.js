import ContentLoader from "react-content-loader";

export default function CourseProgramLoader(props) {
    return (
        <ContentLoader
            speed={2}
            width={200}
            height={50}
            viewBox="0 0 600 50"
            backgroundColor="#ef0000"
            foregroundColor="#ffffff"
            {...props}
        >
            <rect x="0" y="10" rx="3" ry="3" width="65" height="14" />
        </ContentLoader>
    )

}