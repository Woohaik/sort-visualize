interface Props {
    loadingPorcentage: number;
    interval: number;
}

const LoadingBar = (props: Props): JSX.Element =>
(
    <div className="loading-bar">
        <div className="loading-bar-progress" style={{ width: `${props.loadingPorcentage}%`, transition: `all 0.${props.interval}s` }}></div>
    </div>
);


export default LoadingBar;