import "./inicio.css";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div>
        <img
          src="https://marti-motors.com/wp-content/uploads/2022/09/motos-naked.jpg"
          style={{ width: "40vw", borderRadius: "10px" }}
        ></img>
        <img
          src="https://lucero.com.pe/wp-content/uploads/2020/07/3-46.jpg"
          style={{ width: "40vw", borderRadius: "10px" }}
        ></img>
      </div>
      <div className="cajaDerecha">
        <img
          src="https://s1.best-wallpaper.net/wallpaper/m/1705/Honda-motorcycle-gray-background_m.jpg"
          style={{ width: "100%", borderRadius: "10px" }}
        ></img>
        <h1 style={{paddingTop: "3rem"}}>Nuestra historia</h1>
        <p>
        Somos Moto-Ruta una casa de venta de motos, cuatris e indumentaria, nos especializamos en equipos de alta eficiencia y confort, 
        las últimas motos con la mejor tecnología, los mejores cuads para todo tipo de salida y la indumentaria ideal para una conducción 
        cómoda y segura. Surgimos a partir de la necesidad de tener acceso a este tipo de vehículos en argentina, por lo que también 
        contamos con un equipo especializado que se va a encargar de solucionar todos los inconvenientes que aparezcan en vehículos 
        tanto de Moto-Ruta como de otros lugares (con cargo adicional). Por el momento tenemos esta dinámica y estos tres categorías 
        de vehículos, pero en un futuro no muy lejano pensamos incorporar marcas de gran calibre como Suzuki, Ducati, etc. Con la 
        finalidad de incorporar gente a la familia Moto-Ruta, hasta formar nuestro propio equipo de competición!
        </p>
      </div>
    </div>
  );
};
