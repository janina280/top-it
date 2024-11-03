import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { API_BASE_URL } from "../../constants/apiConstants";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

function AddProductForm(props) {
  const [state, setState] = useState({
    name: "",
    description: "",
    stock: "",
    specification: "",
    price: "",
    category: "",
    provider: "",
    successMessage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = () => {
    props.showError(null);
    const payload = {
      name: state.name,
      description: state.description,
      stock: state.stock,
      specification: state.specification,
      price: state.price,
      category: state.category,
      provider: state.provider,
    };

    axios
      .post(`${API_BASE_URL}/auth/addProduct`, payload)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("site", response.data.token);
          props.showError(null);
          navigate("/");
        } else {
          props.showError("Some error occurred");
        }
      })
      .catch((error) => {
        props.showError("Some error occurred");
        console.error(error);
      });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    sendDetailsToServer();
  };

  return (
    <div>
      <button type="submit" className="button addProduct__submit">
        <span className="button__text">Add New Category</span>
        <FontAwesomeIcon icon={faChevronRight} className="button__icon" />
      </button>
      <button type="submit" className="button addProduct__submit">
        <span className="button__text">Add New Provider</span>
        <FontAwesomeIcon icon={faChevronRight} className="button__icon" />
      </button>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="addProduct" onSubmit={handleSubmitClick}>
              {["name", "description", "price", "specification", "stock"].map(
                (field) => (
                  <div className="addProduct__field" key={field}>
                    <input
                      type="text"
                      className="addProduct__input"
                      id={field}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      value={state[field]}
                      onChange={handleChange}
                    />
                  </div>
                )
              )}

              <Box>
                <FormControl sx={{ width: "75%" }}>
                  <InputLabel id="category-label" >Category</InputLabel>
                  <Select
                  className="addProduct__select"
                    labelId="category-label"
                    id="category"
                    value={state.category}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
              </Box>
              <Box>
                <FormControl sx={{ width: "75%" }}>
                  <InputLabel id="provider-label">Provider</InputLabel>
                  <Select
                    labelId="provider-label"
                    id="provider"
                    value={state.provider}
                    label="Provider"
                    onChange={handleChange}
                    className="addProduct__select"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
              </Box>

              <button type="submit" className="button addProduct__submit">
                <span className="button__text">Add New Product</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="button__icon"
                />
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
