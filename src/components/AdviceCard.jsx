import { useEffect, useState } from "react";
import "./AdviceCard.css";

export const AdviceCard = () => {

    const [card, setCard] = useState(null);

    useEffect(() => {
        generateAdvice();
    }, []);


    const generateAdvice = async () => {
        setCard(null);

        const newAdvice = await fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 224 + 1)}`)
                .then(res => res.json())
                .then(data => data)
                .catch(error => error);

        setCard(newAdvice.slip);
    };


    const loadAdvice = () => {

        if (card)
            return <>
                <p>{`Advice #${card.id}`}</p>
                <h1>{`"${card.advice}"`}</h1>
            </>;

        return ( <h1>Loading...</h1> );
    };

    return (
        <div className="card">
            <div className="card-content">
                {loadAdvice()}
                <h1 className="divider"><span></span></h1>
                <input type="button" onClick={generateAdvice} />
            </div>
        </div>
    );
};

export default AdviceCard;