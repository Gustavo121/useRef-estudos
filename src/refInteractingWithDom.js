import { useState, useEffect, useRef } from "react";
import FakeModal from "./fakeModal";

export default function RefInteractingWithDom() {
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef();

    function showFakeModal() {
        setShowModal(true);
    }

    return (
        <div>
            <h1>useRef para interagir com elementos da DOM</h1>
            <button onClick={showFakeModal}>
                Clique aqui para informar seu e-mail e não perder nenhuma novidade!
            </button>
            {showModal && <FakeModal forwardedRef={inputRef}/>}
        </div>
    );
}