import ContentLoader from "react-content-loader";

export default function CourseHeroVideoLoader(props) {
    return (
        <div className="bg-[#fff] mx-[20px] rounded-[18px] h-[450px] p-[2px]">
            <ContentLoader
                speed={2}
                width={1200}
                height={600}
                viewBox="0 0 1200 600"
                backgroundColor="#ef0000"
                foregroundColor="#ffffff"
                {...props}
            >
                <rect x="500" y="200" rx="100" ry="100" width="60" height="60" />
            </ContentLoader>
        </div>
    )

}