interface ValueListProps{
    title:string;
    value:string;
}

const Value : React.FC<ValueListProps>= ({title,value})=>{
    return(
        <div className="value">
          <h5>{title}</h5>
          <p>{value}</p>
        </div>
    )
}

export {Value}