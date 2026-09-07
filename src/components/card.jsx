

export default function card({title, children}) {
  return (
    <div>
        <section className="card">
            <h2>{title}</h2>
        {children}
        </section>
    </div>
  )
}
