

const Title = (props) => {
    const { title1, title2, titleStyles, title1Styles, paraStyles } = props;
    return (
        <div className={`${titleStyles} pb-10`}>
            <h2 className={`${title1Styles} h2`}>{title1} <span className="text-secondary !font-light underline"> {title2}</span></h2>
            <p className={`${paraStyles} hidden`}>Discover the best deals on top-qquality products, Crafted <br /> to elevate your everday experience.</p>
        </div>
    )
}

export default Title