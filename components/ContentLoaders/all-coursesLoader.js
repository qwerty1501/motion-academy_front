import ContentLoader from "react-content-loader";

export default function AllCoursesLoader(props) {
    return (
        <div className="bg-[#fff] mx-[20px] rounded-[18px] h-[300px] p-[2px]">
            <ContentLoader
                speed={2}
                width={600}
                height={280}
                viewBox="0 0 600 300"
                backgroundColor="#ef0000"
                foregroundColor="#ffffff"
                {...props}
            >
                <rect x="44" y="10" rx="3" ry="3" width="65" height="14" />
                <rect x="5" y="85" rx="3" ry="3" width="239" height="36" />
                <circle cx="14" cy="17" r="12" />
                <rect x="158" y="10" rx="2" ry="2" width="85" height="14" />
                <rect x="5" y="145" rx="5" ry="5" width="240" height="71" />
                <rect x="7" y="263" rx="3" ry="3" width="183" height="40" />
                <circle cx="405" cy="100" r="60" />
                <rect x="278" y="176" rx="155" ry="400" width="252" height="257" />
            </ContentLoader>
        </div>
    )

}