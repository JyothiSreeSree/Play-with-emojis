import './index.css'

const EmojiCard = props => {
  const {emojisList, onSelectingEmoji} = props
  const {id, emojiUrl, emojiName} = emojisList
  const onselect = () => {
    onSelectingEmoji(id)
  }
  return (
    <li className="list-item">
      <button className="button" onClick={onselect}>
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
