import ContentLoader from "react-content-loader";

export default function MasterClassLoader(props) {
    return (
        <div className="bg-[#fff] mb-[80px] rounded-[18px] h-[350px] p-[2px]">
            <ContentLoader
                speed={2}
                width={400}
                height={350}
                viewBox="0 0 400 350"
                backgroundColor="#ef0000"
                foregroundColor="#ffffff"
                {...props}
            >
                <rect x="4" y="10" rx="3" ry="3" width="200" height="24" />
                <rect x="5" y="65" rx="3" ry="3" width="370" height="100" />
                <rect x="218" y="15" rx="2" ry="2" width="125" height="20" />
                <rect x="5" y="185" rx="5" ry="5" width="370" height="71" />
                <rect x="7" y="273" rx="3" ry="3" width="370" height="8" />
                <circle cx="30" cy="310" r="19" />
                <rect x="60" y="290" rx="3" ry="3" width="150" height="15" />
                <rect x="60" y="310" rx="3" ry="3" width="290" height="15" />
            </ContentLoader>
        </div>
    )

}