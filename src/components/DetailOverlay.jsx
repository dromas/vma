export default function DetailOverlay({ item, onClose }) {
  if (!item) return null
  return (
    <div className="detail-overlay">
      <div className="detail-head">
        <button className="detail-back" onClick={onClose}>‹</button>
        <span className="detail-head-title">{item.tag || item.cat}</span>
      </div>
      <div className="detail-body">
        <div className="detail-tag">{item.tag || item.cat}</div>
        <div className="detail-title">{item.title}</div>
        {item.meta && (
          <div className="detail-meta">
            {item.meta.map((m, i) => (
              <span key={i} className="badge blu">{m}</span>
            ))}
          </div>
        )}
        <div className="detail-text">{item.text}</div>
      </div>
    </div>
  )
}
