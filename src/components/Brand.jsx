const Brand = () => {
    const brands = [1,2,3,4,5,6]
    return (
      <section className="section brand" aria-label="brand">
        <div className="container">
          <ul className="has-scrollbar">
            {brands.map((i) => (
              <li key={i} className="brand-item">
                <img src={`/assets/images/brand-${i}.png`} width="90" height="90" loading="lazy" alt="brand logo" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  export default Brand
  