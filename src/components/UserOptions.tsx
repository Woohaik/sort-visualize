
interface Props {
    dropHandler: () => void;
    startSort: () => void;
    addHandler: () => void;
    salt: () => void;
    reset: () => void;
    resume: () => void;
    pause: () => void;
    isPaused: boolean;
    isAnimating: boolean;
    stopSort: () => void;
}

const UserOptions = (pros: Props) =>
(
    <>
        <div className="button-container">
            {!pros.isAnimating ? <button className="btn btn-sm changeValue" onClick={pros.dropHandler}><i className="fas fa-minus"></i></button> : <></>}
            {!pros.isAnimating ? <button className="btn btn-sm changeValue" onClick={pros.startSort}><i className="fas fa-play"></i></button> : <></>}
            {pros.isAnimating && pros.isPaused ? <button className="btn btn-sm changeValue" onClick={pros.resume}><i className="fas fa-play"></i></button> : <></>}
            {pros.isAnimating && !pros.isPaused ? <button onClick={pros.pause} className="btn btn-sm changeValue"><i className="fas fa-pause"></i></button> : <></>}
            {!pros.isAnimating ? <button className="btn btn-sm changeValue" onClick={pros.addHandler}><i className="fas fa-plus"></i></button> : <></>}
        </div>
        <div className="button-container">
            {!pros.isAnimating ? <button className=" btn changeValue" onClick={pros.salt}>Salt</button> : <></>}
            {!pros.isAnimating ? <button className="btn changeValue" onClick={pros.reset}>Reset</button> : <></>}
            {pros.isPaused && pros.isAnimating ? <button className="btn changeValue" onClick={pros.stopSort}>Stop</button> : <></>}
        </div>
    </>
);



export default UserOptions;