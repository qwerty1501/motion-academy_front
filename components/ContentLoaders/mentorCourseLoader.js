import ContentLoader from "react-content-loader";

export default function MentorCourseLoader(props) {
    return (
        <div className="bg-[#fff] mx-[20px] rounded-[18px] h-[420px] p-[2px]">
            <ContentLoader
                speed={2}
                width={1200}
                height={390}
                viewBox="0 0 1200 390"
                backgroundColor="#ef0000"
                foregroundColor="#ffffff"
                {...props}
            >

                <rect x="100" y="80" rx="5" ry="5" width="140" height="21" />
                <rect x="100" y="123" rx="3" ry="3" width="483" height="45" />
                <rect x="100" y="183" rx="3" ry="3" width="483" height="180" />
                <circle cx="875" cy="130" r="90" />
                <rect x="700" y="236" rx="255" ry="400" width="352" height="457" />

            </ContentLoader>
        </div>
    )

}