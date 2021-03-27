interface Props {
    loadingPorcentage: number;
}

const LoadingBar = (props: Props) =>
(
    <div className="loading-bar">
        <div className="loading-bar-progress" style={{ width: `${props.loadingPorcentage}%` }}></div>
    </div>
);


export default LoadingBar;