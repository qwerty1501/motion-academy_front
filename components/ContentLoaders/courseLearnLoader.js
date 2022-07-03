import ContentLoader from "react-content-loader";

export default function CourseLearnLoader(props) {
    return (
        <ContentLoader
            speed={2}
            width={800}
            height={300}
            viewBox="0 0 800 300"
            backgroundColor="#ef0000"
            foregroundColor="#ffffff"
            {...props}
        >
            <rect x="1" y="10" rx="10" ry="10px" width="790" height="250" />
        </ContentLoader>
    )

}