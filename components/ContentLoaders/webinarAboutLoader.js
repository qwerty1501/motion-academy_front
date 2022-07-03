import ContentLoader from "react-content-loader";

export default function WebinarAboutLoader(props) {
    return (
        <ContentLoader
            speed={2}
            width={1200}
            height={380}
            viewBox="0 0 1200 300"
            backgroundColor="#ef0000"
            foregroundColor="#ffffff"
            {...props}
        >
            <rect x="0" y="10" rx="3" ry="3" width="100%" height="204" />

        </ContentLoader>
    )

}