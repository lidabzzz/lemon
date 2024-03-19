import { useNavigate } from "react-router-dom";

function CallToAction() {
    const navigate = useNavigate();
    return(
        <section className="call-to-action-main">
            <div className="call-to-action">
                <h2>Try the Mediterranean Fusion! Reserve Your Table Now.</h2>
                <p>Experience the perfect blend of tradition and innovation at The Little Lemon. Indulge in our tantalizing dishes crafted with care by Adrian and Mario. Your culinary adventure awaits!</p>
                <button
                    onClick={() => {
                        navigate("/reservations")
                    }}
                    aria-label="On Click">
                    Reserve a table
                </button>
            </div>
        </section>
    )
}

export default CallToAction;