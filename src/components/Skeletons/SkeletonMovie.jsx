import ContentLoader from "react-content-loader"

const SkeletonMovie = (props) => (
  <ContentLoader 
    speed={2}
    width={1240}
    height={600}
    viewBox="0 0 1240 600"
    backgroundColor="#2e2e2e"
    foregroundColor="#383838"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="600px" />
  </ContentLoader>
)

export default SkeletonMovie

