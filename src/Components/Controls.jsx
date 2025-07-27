const Controls = ({ setActiveIndex, totalSlides }) => {

    const onPrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const onNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    return (
        <div>
            <button className="left" onClick={onPrevious}>{"<"}</button>
            <button className="right" onClick={onNext}>{">"}</button>
        </div>
    );
}

export default Controls;