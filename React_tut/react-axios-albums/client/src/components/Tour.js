
function Tour({tour}) {
  return (
    <div>
        <section>
            <img src={tour.image} alt="{tour.name}" />
        </section>
    </div>
  )
}

export default Tour