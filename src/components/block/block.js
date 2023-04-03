import './Block.css'

function Block({ value, onClick }) {
      const style = value === "X" ? "block x" : "block o"
      return (
            <button className={style} onClick={onClick}>{value}</button>
      );
}

export default Block
