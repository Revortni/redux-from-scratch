import { classnames } from "utils/string"

export const Tab = ({ label, selected, onClick }) => {
  const className = classnames("tab__button", {
    "tab__button--selected": selected
  })

  return <div className={className} onClick={onClick}>{label}</div>

}