import './index.css'

const ThumbNailItem = props => {
  const {details, onClickThumbNail} = props
  const {id, thumbnailUrl} = details

  const clickThumbNail = () => onClickThumbNail(id)

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={clickThumbNail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbNailItem
