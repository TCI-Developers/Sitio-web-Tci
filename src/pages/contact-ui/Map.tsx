

const Map = () => {
    return (
      <div className="my-8 rounded-2xl overflow-hidden md:my-0 md:w-11/12 min-h-80 md:max-w-[600px] md:flex md:mx-auto md:max-h-[400px]">
        <iframe
          width="100%"
          height="100%"
          frameBorder={100}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&height=300&hl=es&q=Estocolmo%2013%20Col%20la%20joyita+(TCI%20consultores)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
          title="Ubicación TCI Consultores"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      );
}

export default Map
