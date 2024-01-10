const Button = props => {
  const {buttonText, className} = props
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  <div className='main-container'>
    <div className='socialBox-container'>
      <h1>Social Buttons</h1>
      <div className='Button-container'>
        <Button buttonText='Like' className='Like-button' />
        <Button buttonText='Comment' className='comment-button' />
        <Button buttonText='Share' className='share-button' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
