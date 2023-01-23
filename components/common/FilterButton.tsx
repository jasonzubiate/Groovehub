import styles from "../../styles/FilterButton.module.scss" 
import {IoMdOptions} from 'react-icons/Io'

const FilterButton = () => {
  return (
    <div className={styles.btn}>
      <IoMdOptions size={20}/>
    </div>
  )
}

export default FilterButton