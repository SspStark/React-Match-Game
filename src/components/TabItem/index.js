import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => changeTab(tabId)

  const activeTab = isActive ? 'button active' : 'button'
  return (
    <li className="tab-item">
      <button type="button" className={activeTab} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
