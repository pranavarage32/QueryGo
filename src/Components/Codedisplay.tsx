interface Codedisplayprops{
   text: string
}


const Codedisplay = ({text}:Codedisplayprops) => {
    return (
      <div className="code-display">
         <div className="buttons">
            <div className="button1 first"></div>
            <div className="button1 middle"></div>
            <div className="button1 last"></div>
         </div>
         <div className="code-output">
          <p>{text}</p>
         </div>
      </div>
    )
  }
  // export{};
  export default Codedisplay