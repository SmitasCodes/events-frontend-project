import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import categoriesServices from "../../../services/categoriesServices";

const AdminCreateCategory = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await categoriesServices.getCategories();
    if (data) {
      setCategories(data);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formattedCategory =
      category.charAt(0).toLowerCase() + category.slice(1);

    const existingCategory = categories.find(
      (cat) => cat.title === formattedCategory
    );

    if (!category.trim()) {
      console.log("No category provided");
      return;
    }

    if (existingCategory) {
      console.log(`Deleting category "${existingCategory.title}"`);
      await categoriesServices.deleteCategory(existingCategory._id);
      getCategories();
    } else {
      console.log(`Creating category "${formattedCategory}"`);
      await categoriesServices.postCategory({ title: formattedCategory });
      getCategories();
    }

    setCategory("");
  };

  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col lg="6" className="text-center">
          <h1>Sukurti/Ištrinti Kategorija</h1>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Ivesti kategorija"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ textTransform: "capitalize" }}
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Pridėti arba ištrinti
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCreateCategory;
