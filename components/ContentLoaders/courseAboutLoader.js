import ContentLoader from "react-content-loader";

export default function CourseAboutLoader(props) {
    return (
        <div className="">
            <ContentLoader
                speed={2}
                width={200}
                height={60}
                viewBox="0 0 200 300"
                backgroundColor="#ef0000"
                foregroundColor="#ffffff"
                {...props}
            >
                <rect x="1" y="10" rx="1" ry="1" width="40000" height="94" />
            </ContentLoader>
        </div>
    )

}