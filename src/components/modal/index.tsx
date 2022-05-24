import { closeModal, confirm } from "./modal";
import "./modal.css";
const Modal: React.FC = () => {
    return(
        <div id="Modal" className="modal">
            <div className="modal-content" id="modal-content">
                <button onClick={closeModal}>Close</button>
                <br />
                <input type="file" accept=".jpg" id="image" onChange={confirm}/>
                <div id="image"><input type="text" placeholder="Caption" /></div>
                {/* <!-- tags --> */}
            </div>
        </div>
    );
} 
export default Modal;
