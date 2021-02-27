import react, {useState, useEffect} from "react";
// import menuImgLinksData from "./data/menu_img.json";


const Welcome = () => {
  const [menuImgLinksData, setGalleryImageData] = useState([]);
  const loadGalleryImageData = async() => {
       const resp = await fetch("https://rdaf19hr8l.execute-api.us-east-1.amazonaws.com/Production/galleryimages")
      let jsonData = await resp.json();

      setGalleryImageData(jsonData);
  }
  useEffect(() => {
    loadGalleryImageData();
  }, []);
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {
            menuImgLinksData.map((link) =>

              <img className={`${link.className}`} src={`${link.src}`} alt={`${link.alt}`} />

            )}

        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
      </article>
    </div>
  );
}



export default Welcome;