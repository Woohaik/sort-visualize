interface Props {
    setSelectedAlgorithm: (al: string) => void;
    selectedAlgorithm: string;
    isAnimating: boolean;
}

const Navbar = (props: Props): JSX.Element =>
(
    <nav className="navbar">
        <div style={{ opacity: props.isAnimating ? 0.2 : 1 }} onClick={() => !props.isAnimating && props.setSelectedAlgorithm("bubble")} className={`navbar__item  ${props.selectedAlgorithm === "bubble" ? "selected" : ""}`}>
            Bubble Sort
        </div>
        <div style={{ opacity: props.isAnimating ? 0.2 : 1 }} onClick={() => !props.isAnimating && props.setSelectedAlgorithm("selection")} className={`navbar__item  ${props.selectedAlgorithm === "selection" ? "selected" : ""}`}>
            Selection Sort
        </div>
        <div style={{ opacity: props.isAnimating ? 0.2 : 1 }} onClick={() => !props.isAnimating && props.setSelectedAlgorithm("insertion")} className={`navbar__item  ${props.selectedAlgorithm === "insertion" ? "selected" : ""}`}>
            Insertion Sort
        </div>
    </nav >
);

export default Navbar;