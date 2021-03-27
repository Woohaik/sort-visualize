interface Props {
    setSelectedAlgorithm: (al: string) => void;
    selectedAlgorithm: string;
}

const Navbar = (props: Props) =>
(
    <nav className="navbar">
        <div onClick={() => props.setSelectedAlgorithm("bubble")} className={`navbar__item  ${props.selectedAlgorithm === "bubble" ? "selected" : ""}`}>
            Bubble Sort
        </div>
        <div onClick={() => props.setSelectedAlgorithm("selection")} className={`navbar__item  ${props.selectedAlgorithm === "selection" ? "selected" : ""}`}>
            Selection Sort
        </div>
        <div onClick={() => props.setSelectedAlgorithm("insertion")} className={`navbar__item  ${props.selectedAlgorithm === "insertion" ? "selected" : ""}`}>
            Insertion Sort
        </div>
    </nav>
);


export default Navbar;