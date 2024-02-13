import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel"; // Import Carousel component from react-bootstrap
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

const AxiosApp = () => {
  const [proData, setProData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data.products);
        setProData(data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Container>
        <div className="row">
          {proData.map((product) => (
            <div key={product.id} className="col-md-4 ">
              <Card style={{ width: "18rem" }}>
                {/* Display images in a Carousel */}
                <Carousel>
                  {product.images.map((imageUrl, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="card-image-top"
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        width={300}
                        height={200}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{product.brand}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default AxiosApp;
