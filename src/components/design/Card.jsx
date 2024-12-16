import { useState } from "react";

export const Card = ({
  title,
  icons,
  images,
  alt,
  additionalImages,
  background,
}) => {
  const [selectedImage, setSelectedImage] = useState(images);
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  const [selectedMedia, setSelectedMedia] = useState(additionalImages);

  return (
    <div className="row">
      <div className="detail-card">
        <div className="detail-wrapper">
          <div
            className="detail-cardImgBG"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <div className="detail-cardImg">
              <img
                src={selectedImage}
                alt="Card Image"
                className="w-full h-auto object-cover rounded-t-lg"
                style={{ aspectRatio: "4 / 3" }}
              />
            </div>
          </div>
          <div className="image-thumbnails flex justify-center mt-4 space-x-2">
            {[...additionalImages].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-12 h-12 object-cover rounded-lg cursor-pointer ${
                  selectedImage === image ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
          {/* Card content at the bottom */}
          <div className="detail-cardInfo">
            <h1>{title}</h1>

            <div className="action">
              <div className="priceGroup">
                <div className="flex space-x-4">
                  {icons.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      width={65}
                      height={48}
                      alt={`Icon ${index + 1} for ${title}`}
                      className="flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
