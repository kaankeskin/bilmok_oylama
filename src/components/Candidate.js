import React from "react";
import { observer } from "mobx-react-lite";

const Candidate = ({candidate}) => {
    const {name, university, count, increment, decrement, imagePath} = candidate;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 text-center top-buffer">
            <div className="card">
                <img className="card-img-top" src={window.location.origin + imagePath} alt={university} />
                <div className="card-block"> </div>
                <h4 className="card-title">{university}</h4>
                <hr className="primary" />
                <div className="card-text">
                    {name && <p>{name}</p>}
                    <div className="input-group">
                        <input type="text" className="form-control" value={count} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={increment}>+1</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-1</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Candidate);