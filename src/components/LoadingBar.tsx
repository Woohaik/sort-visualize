interface Props {
    loadingPorcentage: number;
}

const LoadingBar = (props: Props) => {
    return (
        <div className="loading-bar">
            <div className="loading-bar-progress" style={{ width: `${props.loadingPorcentage}%` }}></div>
        </div>
    )
}

export default LoadingBar;