
interface Props {
    dropHandler: () => void;
    startSort: () => void;
    addHandler: () => void;
    salt: () => void;
    reset: () => void;
}

const UserOptions = (pros: Props) => {
    return (<>
        <div className="button-container">
            <button className="btn btn-sm changeValue" onClick={pros.dropHandler}><i className="fas fa-minus"></i></button>
            <button className="btn btn-sm changeValue" onClick={pros.startSort}><i className="fas fa-play"></i></button>
            <button className="btn btn-sm changeValue" onClick={pros.addHandler}><i className="fas fa-plus"></i></button>
        </div>
        <div className="button-container">
            <button className=" btn changeValue" onClick={pros.salt}>Salt</button>
            <button className="btn changeValue" onClick={pros.reset}>Reset</button>
        </div>

    </>)
}


export default UserOptions;