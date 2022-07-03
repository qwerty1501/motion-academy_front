import ContentLoader from "react-content-loader";

export default function WebinarHeroLoader(props) {
    return (
        <ContentLoader
            speed={2}
            width={1200}
            height={280}
            viewBox="0 0 1300 300"
            backgroundColor="#ef0000"
            foregroundColor="#ffffff"
            {...props}
        >
            <rect x="0" y="13" rx="3" ry="3" width="370" height="34" />
            <rect x="0" y="85" rx="3" ry="3" width="579" height="36" />
            <rect x="0" y="160" rx="2" ry="2" width="405" height="34" />
            <rect x="0" y="220" rx="2" ry="2" width="625" height="100" />
            <rect x="670" y="0" rx="2" ry="2" width="280" height="140" />
            <rect x="990" y="0" rx="2" ry="2" width="280" height="100" />
        </ContentLoader>
    )

}